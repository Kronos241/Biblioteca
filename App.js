import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", width: "100%" }}>
        <Header />
        <p style={{ padding: "20px", fontSize: "18px" }}>
          Bienvenido a la Biblioteca Digital
        </p>
      </div>
    </div>
  );
}

export default App;
