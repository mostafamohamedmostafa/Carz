import { HomePage } from "./Components/HomePage";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { AboutUsPage } from "./Components/AboutUsPage";
import { ServicePage } from "./Components/ServicePage";
import { PricingPage } from "./Components/PricingPage";
import { TeamMemberPage } from "./Components/TeamMemberPage";
import { NavigationBar } from "./Components/NavigationBar";
import { Footer } from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App container-fluid">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="Carz" element={<HomePage />} />
        <Route path="AboutUsPage" element={<AboutUsPage />} />
        <Route path="ServicePage" element={<ServicePage />} />
        <Route path="PricingPage" element={<PricingPage />} />
        <Route path="TeamMemberPage" element={<TeamMemberPage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
