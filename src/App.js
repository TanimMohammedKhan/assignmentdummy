import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfilePage from './pages/Profilepage';
import ArticlesPage from "./pages/ArticlesPage";
import "./App.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-container">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />

      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/articles" replace />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          
          <Route path="*" element={<Navigate to="/articles" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
