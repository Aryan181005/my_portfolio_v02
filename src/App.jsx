import React, { useState } from "react";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <video
        src="/background.mp4"
        loop
        autoPlay
        playsInline
        muted
        preload="auto"
        className="fixed inset-0 z-0 h-full w-full object-cover object-center pointer-events-none"
      />
      <Home />
    </div>
  );
};

export default App;
