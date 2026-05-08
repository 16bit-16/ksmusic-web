import {
  useAuth,
  useTokenCapture,
  useNowPlaying,
  useSpotifyStatus,
} from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

export default function Dashboard() {
  useTokenCapture(); // URL에서 토큰 캡처
  const { user, logout } = useAuth();
  const token = localStorage.getItem("token");
  const nowPlaying = useNowPlaying(token);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"ytmusic" | "spotify">("ytmusic");
  const spotifyConnected = useSpotifyStatus(token);

  const copy = () => {
    navigator.clipboard.writeText(user?.userId || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
      }
    }
  }, [user]);

  if (!user) return <div className="flex text-center">로딩 중...</div>;
  return (
    <div className="flex flex-col px-40 gap-16">
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <div className="bg-zinc-800 flex flex-col justify-center border-purple-400 border gap-16 p-10 rounded-2xl">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("ytmusic")}
              className={`text-2xl transition-colors ${activeTab === "ytmusic" ? "text-purple-400 font-bold" : "text-zinc-500 font-medium"}`}
            >
              유튜브 뮤직
            </button>
            <button
              onClick={() => setActiveTab("spotify")}
              className={`text-2xl transition-colors ${activeTab === "spotify" ? "text-purple-400 font-bold" : "text-zinc-500 font-medium"}`}
            >
              스포티파이
            </button>
          </div>
          <div className="w-full h-0.5 bg-purple-400" />
        </div>
        {activeTab === "spotify" ? (
          spotifyConnected ? (
            <div className="flex items-start gap-24">
              <div className="flex flex-col gap-8">
                <p className="text-2xl">프로필</p>
                <div className="flex flex-col gap-4">
                  <img
                    src={user.avatar || "/no-image.png"}
                    className="w-32 h-32 bg-zinc-700 rounded-full"
                  />
                  <p className="text-xl whitespace-nowrap">
                    {!user
                      ? "로그인을 해주세요"
                      : `${user.username} 님 반가워요!`}
                  </p>
                </div>
              </div>
              {/* 현재 재생 */}
              <div className="flex flex-col gap-8 grow">
                <p className="text-2xl">현재 재생중인 노래</p>
                <div className="flex gap-8">
                  <img
                    src={nowPlaying.albumArt || "/no-image.png"}
                    alt=""
                    className="w-32 h-32 rounded-xl object-cover bg-zinc-700"
                  />
                  <div className="w-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-bold">
                        {nowPlaying.title || "재생중인 노래 없음"}
                      </p>
                      <p className="text-lg text-zinc-300">
                        {nowPlaying.artist || "아티스트 정보 없음"}
                      </p>
                    </div>
                    <Timeline
                      current={nowPlaying.current}
                      total={nowPlaying.total}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8 items-center justify-center py-16">
              <p className="text-2xl text-zinc-400">
                스포티파이 연동이 필요해요
              </p>
              <a
                href={`https://api.ksmusic.shop/spotify/login?token=${token}`}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                스포티파이 연동하기
              </a>
            </div>
          )
        ) : (
          <div className="flex items-start gap-24">
            {/* 프로필 */}
            <div className="flex flex-col gap-8">
              <p className="text-2xl">프로필</p>
              <div className="flex flex-col gap-4">
                <img
                  src={user.avatar || "/no-image.png"}
                  className="w-32 h-32 bg-zinc-700 rounded-full"
                />
                <p className="text-xl whitespace-nowrap">
                  {!user
                    ? "로그인을 해주세요"
                    : `${user.username} 님 반가워요!`}
                </p>
              </div>
            </div>
            {/* 현재 재생 */}
            <div className="flex flex-col gap-8 grow">
              <p className="text-2xl">현재 재생중인 노래</p>
              <div className="flex gap-8">
                <img
                  src={nowPlaying.albumArt || "/no-image.png"}
                  alt=""
                  className="w-32 h-32 rounded-xl object-cover bg-zinc-700"
                />
                <div className="w-full flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">
                      {nowPlaying.title || "재생중인 노래 없음"}
                    </p>
                    <p className="text-lg text-zinc-300">
                      {nowPlaying.artist || "아티스트 정보 없음"}
                    </p>
                  </div>
                  <Timeline
                    current={nowPlaying.current}
                    total={nowPlaying.total}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 아이디 복사 */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl">내 아이디</p>
          <div className="flex justify-between items-center border-purple-400 border px-6 py-4 rounded-2xl">
            <p className="text-lg font-medium">
              {user.userId || "아이디 정보 없음"}
            </p>
            <button
              onClick={copy}
              className="border-zinc-600 border-2 text-white rounded-md hover:bg-zinc-700 transition-colors duration-300"
            >
              <img
                src={copied ? "/check.png" : "/copy.png"}
                className="w-8 h-8"
              />
            </button>
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
      <button
        onClick={logout}
        className="bg-purple-500 text-white px-8 py-4 rounded-lg mb-40"
      >
        <p className="font-bold text-xl">로그아웃</p>
      </button>
      <Footer />
    </div>
  );
}
