export default function Login() {
    return (
        <div className="px-40 flex items-center justify-center min-h-screen">
            <div className="flex items-center justify-center border-purple-400 shadow-2xl border rounded-2xl h-128">
                <div className="flex items-center justify-center w-full h-full px-24 gap-1">
                    <p className='text-3xl font-bold'>KS</p>
                    <p className="text-3xl font-bold bg-linear-to-b from-pink-500 to-blue-500 bg-clip-text text-transparent">Music</p>
                </div>
                <div className="bg-purple-400 w-0.5 h-3/4"></div>
                <div className="flex flex-col items-center justify-center h-full px-24 gap-12 text-center">
                    <p className="text-2xl font-bold whitespace-nowrap">로블록스로 로그인</p>
                    <a href="https://api.ksmusic.shop/auth/login" className="flex justify-center items-center gap-4 bg-white rounded-xl px-6 py-6 hover:bg-zinc-300 transition-colors duration-300 whitespace-nowrap">
                        <img src="/roblox.png" alt="Roblox" className="w-8 h-8"/>
                        <p className="text-xl font-black text-black">로그인</p>
                    </a>
                </div>
            </div>
        </div>
    );
}