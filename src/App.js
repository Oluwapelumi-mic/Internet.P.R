import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import SideNav from './components/sideNav'; 
import Header from './components/Header'; 
import Task from './components/Tasks/Task'; 
import TaskHeader from "./components/Tasks/TaskHeader";
import EmptyTask from "./components/Tasks/EmptyTask";



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
            <Route path="/task" element={<><TaskHeader /> <EmptyTask/></>} />
            
          </Routes>
        </div>
      </Router>
    </div>


  );
}

export default App;
