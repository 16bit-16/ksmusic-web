import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col px-40 gap-16">
      <Header />
      <div className="bg-zinc-800 flex flex-col gap-8 border-purple-400 border p-16 rounded-2xl">
        <h1 className="text-3xl font-bold">서비스 약관</h1>
        <p className="text-zinc-400">최종 수정일: 2025년 5월 8일</p>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">1. 서비스 소개</h2>
          <p className="text-zinc-300">
            KSMusic은 유튜브 뮤직에서 재생 중인 노래 정보를 로블록스 게임에
            실시간으로 표시하는 서비스입니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">2. 이용 조건</h2>
          <ul className="list-disc list-inside text-zinc-300 flex flex-col gap-2">
            <li>
              본 서비스는 로블록스 계정이 있는 사용자만 이용할 수 있습니다.
            </li>
            <li>서비스 이용을 위해 크롬 확장 프로그램 설치가 필요합니다.</li>
            <li>
              서비스를 악용하거나 비정상적인 방법으로 이용하는 행위를
              금지합니다.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">3. 서비스 변경 및 중단</h2>
          <p className="text-zinc-300">
            운영자는 사전 고지 없이 서비스를 변경하거나 중단할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">4. 책임 제한</h2>
          <p className="text-zinc-300">
            KSMusic은 서비스 이용으로 인해 발생하는 어떠한 손해에 대해서도
            책임을 지지 않습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">5. 문의</h2>
          <p className="text-zinc-300">
            서비스 약관에 관한 문의는 아래 이메일로 연락해 주세요.
          </p>
          <p className="text-purple-400">lhy93380@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
