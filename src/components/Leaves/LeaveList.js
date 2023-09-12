import React from "react";
import { useState } from "react";
import EmptyLeave from "./EmptyLeave";
import { img10, img23, img24 } from "../../images";
import LeaveHeader from "./LeaveHeader";
import Modal from "../Tasks/Modals";
import LeaveDetails from "./LeaveDetails";

export default function LeaveList() {
  const [Leaves, setLeave] = useState([]);
  const [OpenLeaveDetails, setLeaveDetails] = useState(false);

  return (
    <>
      <LeaveHeader setLeave={setLeave} itemCount={Leaves.length} />
      {Leaves.length === 0 ? (
        <EmptyLeave />
      ) : (
        <div className="task-table">
          <div className="task-completion">
            <button className="task-status">All Leaves</button>
            <button className="task-status">Past</button>
            <button className="task-status">Upcoming</button>
          </div>
          <div className="search-filter">
            <form className="search4">
              <img className="search-icon" src={img10} alt="" />
              <input
                type="text"
                className="search-input1"
                placeholder="Search task by any related keywords"
              />
            </form>
          </div>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th className="element-name">
                  <input type="checkbox" className="checkbox" /> Leave Type
                </th>
                <th className="element-details">
                  Details <img className="help-circle" src={img23} alt=""></img>
                </th>
                <th className="element-title">Start Date</th>
                <th className="element-eta">End Date</th>
                <th className="element-status">File Upload</th>
                <th className="element-status">Status</th>
                <th className="status-icon"></th>
              </tr>
            </thead>
            <tbody className="table-body">
              <>
                <>
                  {Leaves.map((state, i) => (
                    <tr key={i} onClick={() => setLeaveDetails(true)}>
                      <td className="name-content-leave">
                        <input type="checkbox" className="checkbox" />
                        <div className="project-contain">{state.title}</div>
                      </td>
                      <td className="project-container2">
                        <div className="details-content">{state.details}</div>
                      </td>
                      <td className="project-container ">
                        <div className="title-content">{state.start}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content">{state.end}</div>
                      </td>
                      <td className="project-container3">
                        <div className="eta-content">{state.upload}</div>
                      </td>
                      <td className="project-container4">
                        <div className="status-content">
                          <img className="complett" src={img24} alt="" />
                          Active
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              </>
            </tbody>
          </table>
          <Modal open={OpenLeaveDetails}>
            <LeaveDetails setLeaveDetails={setLeaveDetails} />
          </Modal>
        </div>
      )}
    </>
  );
}
