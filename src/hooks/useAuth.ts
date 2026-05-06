import { useEffect, useState } from 'react'
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
        setUser(null)
    }

    return { user, logout }
}

export function useNowPlaying(token: string | null) {
    const [nowPlaying, setNowPlaying] = useState({ title: '', artist: '' })

    useEffect(() => {
        if (!token) return

        const fetchNowPlaying = async () => {
            const res = await fetch('https:/api.ksmusic.shop/api/me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            setNowPlaying(data.nowPlaying)
        }

        fetchNowPlaying()
        const interval = setInterval(fetchNowPlaying, 3000)
        return () => clearInterval(interval)
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
            // chrome.storage에도 저장
            if (typeof chrome !== 'undefined' && chrome.storage) {
                chrome.storage.local.set({ token })
            }
            navigate('/dashboard', { replace: true })
        }
    }, [])
}