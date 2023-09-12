import React from "react";
import Modal from "../Tasks/Modals";
import { img13, img14 } from "./../../images";
import { useState } from "react";
import CreateLeave from "./CreateLeave";


export default function LeaveHeader({ setLeave, itemCount }) {
  const [openLeave, setOpenLeave] = useState(false);

  return (
    <div className="task-header">
      <div className="TaskCount">
        <p className="one">Leave </p>
        <button className="count">{itemCount}</button>
      </div>
      <div className="buttons-training">
        <div className="export-container">
          <img src={img13} className="export-image" alt="" />
          <a href="./export" className="export">
            Export
          </a>
        </div>
        <div className="create-training-container">
          <img src={img14} className="create-image" alt="" />
          <button
            className="create-training"
            onClick={() => {
              setOpenLeave(true);
            }}
          >
            Apply For Leave
          </button>
        </div>
        <Modal open={openLeave} >
        <CreateLeave setOpenLeave={setOpenLeave} setLeave={setLeave}/>
        </Modal>
      </div>
    </div>
  );
}
