import React, { useState } from "react";
import { img17, img27 } from "./../../images";
import Modal from "../Tasks/Modals";
import CreateTraining from "./CreateTraining";

export default function TrainingDetails({ setOpenTrainingDetails }) {
  const [trainings] = useState([]);
  const [OpenTraining, setOpenTraining] = useState(false);

  return (
    <div className="create3">
      <div className="level1">
        <p className="level1-text"> Task Details</p>
        <img
          onClick={() => {
            setOpenTrainingDetails(false);
          }}
          src={img17}
          className="exit2"
          alt=""
        />
      </div>
      <div className="level2">
        <>
          <>
            {trainings.map((state, i) => (
              <ul className="level-list">
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">Assigner</p>
                  </div>
                  <div className="list-content">Babajide Eniafe</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">Project Name</p>
                  </div>
                  <div className="list-content">{state.title}</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">Title</p>
                  </div>
                  <div className="list-content">{state.body}</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">Details</p>
                  </div>
                  <div className="list-content">{state.details}</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">ETA</p>
                  </div>
                  <div className="list-content">{state.eta}</div>
                </li>
                <li className="LL6">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">Status</p>
                  </div>
                  <div className="complett">{state.status}</div>
                </li>
              </ul>
            ))}
          </>
        </>
      </div>
      <div className="level3">
        <button
          type="submit"
          className="editButton"
          onClick={() => {
            setOpenTraining(true);
          }}
        >
          Edit
        </button>
        <button
          className="okayButton"
          onClick={() => {
            setOpenTrainingDetails(false);
          }}
        >
          Okay
        </button>
      </div>
      <Modal open={ OpenTraining }>
        <CreateTraining setOpenTraining={ setOpenTraining } />
      </Modal>
    </div>
  );
}
