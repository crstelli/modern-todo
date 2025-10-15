import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

import { Landing } from "./features/landing";
import { Home } from "./features/home";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AnimatePresence>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Landing />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

// TODO: Sistemare le animazioni tra le pagine, fade-id e fade-out
