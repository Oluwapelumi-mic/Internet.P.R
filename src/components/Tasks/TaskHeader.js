import React from "react";
import Modal from "./Modals";
import { img13, img14 } from "./../../images";
import { useState } from "react";
import CreateTask from "./CreateTask";


export default function TaskHeader({setTasks, itemCount}) {
  const [openTask, setOpenTask] = useState(false);


  return (
    <div className="task-header">
      <div className="TaskCount">
        <p className="one">Task </p>
        <button className="count">{itemCount}</button>
      </div>
      <div className="buttons">
        <div className="export-container">
          <img src={img13} className="export-image" alt="" />
          <a href="./export" className="export">
            Export
          </a>
        </div>
        <div className="create-container">
          <img src={img14} className="create-image" alt="" />
          <button
            className="create"
            onClick={() => {
              setOpenTask(true);
            }}
          >
            Create Task
          </button>
        </div>
        <Modal open={openTask} >
        <CreateTask setOpenTask={setOpenTask} setTasks={setTasks}/>
        </Modal>
      </div>
    </div>
  );
}
