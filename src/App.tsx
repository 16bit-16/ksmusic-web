import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <main>
          <Routes>
            {/* 공개 페이지 */}
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        </main>
    </div>
  );
}