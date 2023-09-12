import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import SideNav from "./components/sideNav";
import Header from "./components/Header";
import TaskList from "./components/Tasks/TaskList";
import TrainingList from "./components/Trainings/TrainingList";
import LeaveList from "./components/Leaves/LeaveList";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <SideNav />
        </div>
        <div className="App-content">
          <Header />
          <Routes>
            <Route path="/task" element={<TaskList />} />
            <Route path="/leave" element={<LeaveList />} />
            <Route path="/training" element={<TrainingList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
