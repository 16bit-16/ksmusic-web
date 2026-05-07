import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface User {
    userId: string
    username: string
    avatar: string
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) return
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUser(payload)
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        if (typeof chrome !== 'undefined' && chrome.storage) {
            chrome.storage.local.remove('token')
        }
        setUser(null)
    }

    return { user, logout }
}

export function useNowPlaying(token: string | null) {
    const [nowPlaying, setNowPlaying] = useState({ title: '', artist: '', albumArt: '', current: '0:00', total: '0:00', isPlaying: false })
    const currentRef = useRef('0:00')
    const isPlayingRef = useRef(false)


    useEffect(() => {
        if (!token) return

        const fetchNowPlaying = async () => {
            const res = await fetch('https://api.ksmusic.shop/me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            setNowPlaying(data.nowPlaying)
            currentRef.current = data.nowPlaying.current
            isPlayingRef.current = data.nowPlaying.isPlaying
        }

        fetchNowPlaying()
        const fetchInterval = setInterval(fetchNowPlaying, 3000)

        // 1초마다 current 증가
        const tickInterval = setInterval(() => {
            if (!isPlayingRef.current) return
            const [m, s] = currentRef.current.split(':').map(Number)
            let totalSec = m * 60 + s + 1
            const newCurrent = `${Math.floor(totalSec / 60)}:${String(totalSec % 60).padStart(2, '0')}`
            currentRef.current = newCurrent
            setNowPlaying(prev => ({ ...prev, current: newCurrent }))
        }, 1000)

        return () => {
            clearInterval(fetchInterval)
            clearInterval(tickInterval)
        }
    }, [token])

    return nowPlaying
}

export function useTokenCapture() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        const token = searchParams.get('token')
        if (token) {
            localStorage.setItem('token', token)
            // 확장으로 토큰 전달
            window.postMessage({ type: 'KSMUSIC_TOKEN', token }, '*')
            navigate('/dashboard', { replace: true })
        }
    }, [])
}