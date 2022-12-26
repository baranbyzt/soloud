import React from "react";

import "./App.css";
import Home from "./pages/home";
import { StoreProvider } from "./contexts/StoreContext";
function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}

export default App;
