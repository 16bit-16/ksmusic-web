import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex px-40 py-12 border-t border-purple-400 gap-4 items-center justify-center text-zinc-400">
      <Link to="/privacy" className="text-purple-400 hover:underline">
        개인정보처리방침
      </Link>
      <Link to="/terms" className="text-purple-400 hover:underline">
        이용약관
      </Link>
    </div>
  )
}