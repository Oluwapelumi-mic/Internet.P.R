import React, { useState } from "react";
import { img17, img27 } from "./../../images";
import Modal from "./Modals";
import CreateTask from "./CreateTask";

export default function TaskDetails({ setOpenDetails }) {
  const [tasks] = useState([]);
  const [OpenTask, setOpenTask] = useState(false);

  return (
    <div className="create3">
      <div className="level1">
        <p className="level1-text"> Task Details</p>
        <img
          onClick={() => {
            setOpenDetails(false);
          }}
          src={img17}
          className="exit2"
          alt=""
        />
      </div>
      {tasks.map((state, i) => (
        <div className="level2">
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
        </div>
      ))}
      <div className="level3">
        <button type="submit" className="editButton" onClick={() => {
            setOpenTask(true);
          }}>
          Edit
        </button>
        <button
          className="okayButton"
          onClick={() => {
            setOpenDetails(false);
          }}
        >
          Okay
        </button>
      </div>
      <Modal open={OpenTask}>
        <CreateTask setOpenTask={setOpenTask} />
      </Modal>
    </div>
  );
}
