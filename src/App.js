import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import SideNav from './components/sideNav'; 
import Header from './components/Header'; 
import Task from './components/Tasks/Task'; 
import TaskHeader from "./components/Tasks/TaskHeader";
import EmptyTask from "./components/Tasks/EmptyTask";
import TaskList from "./components/Tasks/TaskList";
import TaskCard from "./components/Tasks/TaskCard";
import CreateTask from "./components/Tasks/CreateTask";



function App() {
  return ( 
    <div className="App"> 
      <Router>
        <div className="App-header">
          <SideNav />
        </div>
        <div className="App-content">
          <Header  />
          <Routes>
            <Route path="/task" element={<TaskList/>} />
            <Route exact path="/create" element={<CreateTask/>} />
                
            
          </Routes>
        </div>
      </Router>
    </div>


  );
}

export default App;
