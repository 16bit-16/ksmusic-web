import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="flex flex-row py-4 items-center justify-between border-purple-400 border-b">
                <a className="flex gap-1" href="/">
                    <p className='text-2xl font-bold'>KS</p>
                    <p className="text-2xl font-bold bg-linear-to-b from-pink-500 to-blue-500 bg-clip-text text-transparent">Music</p>
                </a>
                <Link to="/login" className='text-zinc-400'>
                    로그인 / 회원가입
                </Link>
            </div>
        </>
    );
}