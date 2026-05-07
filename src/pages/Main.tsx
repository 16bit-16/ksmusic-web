import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main() {
    return (
        <div className='px-40'>
            {/* header  */}
            <Header />
            {/* main  */}
            <div className="justify-center items-center flex flex-col py-16 gap-16">
                <p className='text-3xl'>KSMusic에 오신것을 환영합니다!</p>
                <div className='flex flex-col w-full items-center gap-16'>
                    <div className="flex gap-4">
                        <div className='rounded-lg shrink-0 overflow-hidden'>
                            <img src="/image3.jpg" alt="" className='h-198 w-auto object-cover rounded-lg' />
                        </div>
                        <div className='flex flex-col h-198 gap-4 shink-0 w-3xl'>
                            <img src="/image1.png" alt="" className='w-full flex-1 object-cover rounded-lg min-h-0' />
                            <img src="/image2.png" alt="" className='w-full flex-1 object-cover rounded-lg min-h-0' />
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className='text-2xl'>KSMusic은 KS Shop에서 만든 시스템으로</p><br />
                        <p className='text-2xl'>유튜브 뮤직에서 듣고 있는 음악을</p><br />
                        <p className='text-2xl'>로블록스에서 실시간으로 확인할수 있는 서비스입니다.</p><br />
                        <br />
                        <p className='text-2xl'>KSMusic은 크롬 확장 프로그램을 통해</p><br />
                        <p className='text-2xl'>현재 재생 중인 곡 정보를 로블록스로 전송합니다.</p><br />
                    </div>
                </div>
                <div className="flex gap-8">
                    <a target='_blank' href="https://discord.gg/DK6rG8tEsf" className='px-8 py-4 bg-purple-600 rounded-lg text-lg hover:bg-purple-400 transition-colors duration-300'>
                        디스코드
                    </a>
                    <Link to="/dashboard" className='px-8 py-4 border-purple-400 border-2 text-purple-400 rounded-lg text-lg hover:bg-zinc-700 hover:text-purple-200 hover:border-purple-200 transition-colors duration-300'>
                        사용하러 가기
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}