import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(Boolean(token));
    }, []);

    return (
        <>
            <div className="flex flex-row py-4 items-center justify-between border-purple-400 border-b">
                <a className="flex gap-1" href="/">
                    <p className='text-2xl font-bold'>KS</p>
                    <p className="text-2xl font-bold bg-linear-to-b from-pink-500 to-blue-500 bg-clip-text text-transparent">Music</p>
                </a>
                <Link to={isLoggedIn ? '/dashboard' : '/login'} className='text-zinc-400'>
                    {isLoggedIn ? '대시보드' : '로그인 / 회원가입'}
                </Link>
            </div>
        </>
    );
}