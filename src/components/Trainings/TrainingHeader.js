import React from "react";
import Modal from "../Tasks/Modals";
import { img13, img14 } from "./../../images";
import { useState } from "react";
import CreateTraining from "./CreateTraining";


export default function TrainingHeader({setTrainings, itemCount}) {
  const [openTraining, setOpenTraining] = useState(false);
  return (
    <div className="task-header">
      <div className="TaskCount">
        <p className="one">Training </p>
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
              setOpenTraining(true);
            }}
          >
            Apply for Training
          </button>
        </div>
        <Modal open={openTraining} >
        <CreateTraining setOpenTraining={setOpenTraining} setTrainings={setTrainings}/>
        </Modal>
      </div>
    </div>
  );
}