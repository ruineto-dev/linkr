import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { MenuProvider } from "./contexts/MenuContext";
import Hashtag from "./pages/Hashtag";

export default function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/timeline" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag/>} />
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </AuthProvider>
  );
}