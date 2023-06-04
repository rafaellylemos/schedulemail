import { DashboardPage, WriteNowPage } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/escrever-agora" element={<WriteNowPage />} />
     </Routes>
    </BrowserRouter>
  )
}