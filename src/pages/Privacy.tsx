import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="flex flex-col px-40 gap-16">
      <Header />
      <div className="bg-zinc-800 flex flex-col gap-8 border-purple-400 border p-16 rounded-2xl">
        <h1 className="text-3xl font-bold">개인정보 처리방침</h1>
        <p className="text-zinc-400">최종 수정일: 2025년 5월 8일</p>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">1. 수집하는 정보</h2>
          <p className="text-zinc-300">
            KSMusic은 서비스 제공을 위해 다음과 같은 정보를 수집합니다.
          </p>
          <ul className="list-disc list-inside text-zinc-300 flex flex-col gap-2">
            <li>로블록스 계정 ID 및 사용자 이름</li>
            <li>로블록스 프로필 사진</li>
            <li>유튜브 뮤직 재생 중인 노래 제목 및 아티스트 정보</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">2. 정보 사용 목적</h2>
          <p className="text-zinc-300">
            수집된 정보는 다음 목적으로만 사용됩니다.
          </p>
          <ul className="list-disc list-inside text-zinc-300 flex flex-col gap-2">
            <li>로블록스 게임 내 현재 재생 중인 노래 정보 표시</li>
            <li>서비스 로그인 및 사용자 식별</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">3. 정보 보관 및 삭제</h2>
          <p className="text-zinc-300">
            수집된 정보는 서버 메모리에 임시 저장되며 서버 재시작 시 삭제됩니다.
            별도의 데이터베이스에 영구 저장되지 않습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">4. 제3자 제공</h2>
          <p className="text-zinc-300">
            수집된 정보는 어떠한 경우에도 제3자에게 판매하거나 제공하지
            않습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">5. 문의</h2>
          <p className="text-zinc-300">
            개인정보 처리방침에 관한 문의는 아래 이메일로 연락해 주세요.
          </p>
          <p className="text-purple-400">lhy93380@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
