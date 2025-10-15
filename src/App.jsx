import { BrowserRouter, Routes, Route } from "react-router";
import { AnimatePresence } from "motion/react";

import { Landing } from "./features/landing";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

// Create Home Route
