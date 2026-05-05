export default function Login() {
    return (
        <div className="px-40 flex items-center justify-center min-h-screen">
            <div className="flex gap-20 items-center justify-center border-zinc-600 shadow-2xl border rounded-2xl h-128">
                <div className="flex items-center justify-center w-full h-full px-12">
                    <p className="text-4xl font-bold bg-linear-to-b from-orange-400 to-purple-400 bg-clip-text text-transparent">KSMusic</p>
                </div>
                <div className="bg-zinc-600 w-1 h-full"></div>
                <div className="flex flex-col items-center justify-center w-full h-full px-12">
                    <p className="text-2xl pb-4">로그인</p>
                    <form action="submit" className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="아이디" className="border border-zinc-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="password" placeholder="비밀번호" className="border border-zinc-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}