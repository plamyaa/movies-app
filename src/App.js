import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import './App.css';

function App() {
  return (
      <div className="App">
          <Header />
          <Outlet />
      </div>
  );
}

export default App;
