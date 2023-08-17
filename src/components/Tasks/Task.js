import React from "react";
import TaskHeader from "./TaskHeader";
import EmptyTask from "./EmptyTask";
import {Link, Outlet} from "react-router-dom";

function Tasks() {
    return (
        <div className="Tasks">
            <TaskHeader />
            <EmptyTask />

            
            <Link to="/Tasks"> EmptyTask </Link>
            
            <Outlet />
        </div>
    );
}

export default Tasks;