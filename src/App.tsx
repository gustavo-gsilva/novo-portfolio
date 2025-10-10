import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const location = useLocation();

  // useEffect que controla o loadingScreen ao entrar no site 

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false),
        setFadeIn(true)
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // useEffect que controla o loadingScreen ao trocar de página

  useEffect(() => {
    setRouteLoading(true);

    const timer = setTimeout(() => setRouteLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location]);

  const isLoading = initialLoading || routeLoading;

  return (
    <>
      {isLoading === true ? <LoadingScreen /> :
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