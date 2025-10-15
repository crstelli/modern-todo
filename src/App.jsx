import { BrowserRouter, Routes, Route } from "react-router";
import { AnimatePresence } from "motion/react";

import { Landing } from "./features/landing";
import { Home } from "./features/home";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

// Create Home Route
