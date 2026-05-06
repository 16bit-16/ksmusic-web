import { useAuth, useTokenCapture, useNowPlaying } from "../hooks/useAuth";
import Header from '../components/Header'

export default function Dashboard() {
  useTokenCapture(); // URL에서 토큰 캡처
  const { user, logout } = useAuth();
  const token = localStorage.getItem('token')
  const nowPlaying = useNowPlaying(token)

  const copy = () => {
    navigator.clipboard.writeText(user?.userId || '');
  }

  if (!user) return <div className="flex text-center">로딩 중...</div>;
  return (
    <div className="flex flex-col px-40 gap-16">
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <div className="flex flex-col justify-center border-purple-400 border gap-16 p-16 rounded-2xl ">
        <div className="flex items-start gap-24">
          {/* 프로필 */}
          <div className="flex flex-col gap-8">
            <p className="text-2xl">프로필</p>
            <div className="flex flex-col gap-4">
              <img src={user.avatar} className="w-32 h-32 bg-zinc-700 rounded-full " />
              <p className="text-xl">{user.username} 님 반가워요!</p>
            </div>
          </div>
          {/* 타임라인 */}
          <div className="flex flex-col gap-8">
            <p className="text-2xl">현재 재생중인 노래</p>
            <div className="flex gap-8">
              <img src="/image2.png" alt="" className="w-32 h-32 rounded-xl"/>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{nowPlaying.title || '재생중인 노래 없음'}</p>
                <p className="text-lg text-zinc-300">{nowPlaying.artist}</p>
              </div>
            </div>
          </div>
        </div>
        {/* 아이디 복사 */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl">내 아이디</p>
          <div className="flex justify-between items-center border-purple-400 border px-6 py-4 rounded-2xl">
            <p className="text-lg font-medium">{user.userId}</p>
            <button onClick={copy} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300">복사</button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-purple-400"></div>
        {/* 연결 상태 */}
        <div className="gap-4 flex flex-col">
          <p className="text-2xl">연결 상태</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500"></div>
            <p>정상작동중</p>
          </div>
        </div>
      </div>
      <button onClick={logout} className="bg-purple-500 text-white px-8 py-4 rounded-lg">
          <p className="font-bold text-xl">로그아웃</p>
      </button>
    </div>
  );
}
