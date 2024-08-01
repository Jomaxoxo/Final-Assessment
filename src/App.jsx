import React from "react";
import Tasks from "./Components/Tasks";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Classroom Task Management</h1>
      </header>
      <main>
        <Tasks />
      </main>
      <footer>
        <p>&copy; 2024 TORMIS-APP</p>
      </footer>
    </div>
  );
}

export default App;
