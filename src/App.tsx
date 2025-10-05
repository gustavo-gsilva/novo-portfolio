import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const location = useLocation();

  // useEffect que controla o loadingScreen ao entrar no site 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false),
      setFadeIn(true)
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // useEffect que controla o loadingScreen ao trocar de página

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => setIsLoading(false), 1800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading === true ?
        <LoadingScreen />
        :
        <div className={fadeIn ? "fadeIn" : ""}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      }
    </>
  );
};

export default App;