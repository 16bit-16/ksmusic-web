import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="flex flex-row py-4 items-center justify-between border-zinc-500 border-b">
                <p className="text-2xl font-bold bg-linear-to-b from-orange-400 to-purple-400 bg-clip-text text-transparent">KSMusic</p>
                <Link to="/login" className='text-zinc-400'>
                    로그인 / 회원가입
                </Link>
            </div>
        </>
    );
}