import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface User {
    userId: string
    username: string
    avatar: string
}

const dummyUser: User = {
    userId: "123456789",
    username: "TestUser",
    avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-188F6CEE1EE9BD2A1BA0E1516FCB9025-Png/150/150/AvatarHeadshot/Png/noFilter"
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(dummyUser)

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
            const res = await fetch('https://ksmusic.shop/me', {
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