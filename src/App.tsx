import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <main>
          <Routes>
            {/* 공개 페이지 */}
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
    </div>
  );
}