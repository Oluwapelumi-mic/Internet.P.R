import React, { useState } from "react";
import { img17, img27 } from "./../../images";
import Modal from "../Tasks/Modals";
import CreateLeave from "./CreateLeave";

export default function LeaveDetails({setLeaveDetails}) {
  const [leaves] = useState([]);
  const [OpenLeave, setOpenLeave] = useState(false);

  return (
    <div className="create3">
      <div className="level1">
        <p className="level1-text"> Leave Details</p>
        <img
          onClick={() => {
            setLeaveDetails(false);
          }}
          src={img17}
          className="exit2"
          alt=""
        />
      </div>
      <div className="level2">
        <>
          <>
            {leaves.map((state, i) => (
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
                    <p className="list-text">Leave Type</p>
                  </div>
                  <div className="list-content">{state.title}</div>
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
                    <p className="list-text">Start Date</p>
                  </div>
                  <div className="list-content">{state.body}</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">End Date</p>
                  </div>
                  <div className="list-content">{state.eta}</div>
                </li>
                <li className="LL1">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">File Upload</p>
                  </div>
                  <div className="list-content">{state.eta}</div>
                </li>
                <li className="LL6">
                  <div className="list-left">
                    <img className="ovalist" src={img27} alt="" />
                    <p className="list-text">status</p>
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
            setOpenLeave(true);
          }}
        >
          Edit
        </button>
        <button
          className="okayButton"
          onClick={() => {
            setLeaveDetails(false);
          }}
        >
          Okay
        </button>
      </div>
      <Modal open={OpenLeave}>
        <CreateLeave setOpenLeave={setOpenLeave} />
      </Modal>
    </div>
  );
}
