import { Link } from 'react-router-dom';

export default function Header() {
    const isLoggedIn = Boolean(localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <>
            <div className="flex flex-row py-4 items-center justify-between border-purple-400 border-b">
                <div className="flex items-center gap-6 ">
                    <a className="flex gap-1" href="/">
                        <p className='text-2xl font-bold'>KS</p>
                        <p className="text-2xl font-bold bg-linear-to-b from-pink-500 to-blue-500 bg-clip-text text-transparent">Music</p>
                    </a>
                    <ul className="flex gap-2">
                        <li><Link to="/dashboard" className="text-zinc-400 hover:text-white">대시보드</Link></li>
                        <li><a href="https://discord.gg/DK6rG8tEsf" className="text-zinc-400 hover:text-white">디스코드</a></li>
                    </ul>
                </div>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-400 transition-colors duration-300">
                        로그아웃
                    </button>
                ) : (
                    <Link to='/login' className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-400 transition-colors duration-300'>
                        로그인
                    </Link>
                )}
            </div>
        </>
    );
}