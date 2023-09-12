import React from "react";
import { useState } from "react";
import EmptyTraining from "./EmptyTraining";
import { img10 } from "../../images";
import { img23 } from "../../images";
import { img24, img25,img26 } from "../../images";
import TrainingHeader from "./TrainingHeader";
import Modal from "../Tasks/Modals";
import TrainingDetails from "./TrainingDetails";

export default function TrainingList() {
  const [trainings, setTrainings] = useState([]);
  const [OpenTrainingDetails, setOpenTrainingDetails] = useState(false);

  return (
    <>
      <TrainingHeader setTrainings={setTrainings} itemCount={trainings.length}/>
      {trainings.length === 0 ? (
        <EmptyTraining />
      ) : (
        <div className="task-table">
          <div className="task-completion">
            <button className="task-status">All Training</button>
            <button className="task-status">Past</button>
            <button className="task-status">Upcoming</button>
          </div>
          <div className="search-filter">
            <form className="search4">
              <img className="search-icon" src={img10} alt="" />
              <input
                type="text"
                className="search-input1"
                placeholder="Search events by any related keywords"
              />
            </form>
          </div>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th className="element-name">Training</th>
                <th className="element-link">Website URL</th>
                <th className="element-details">
                  Details <img className="help-circle" src={img23} alt=""></img>
                </th>
                <th className="element-project">Location</th>
                <th className="element-project">Start Date</th>
                <th className="element-project">Amount (N)</th>
                <th className="element-link">File Upload</th>
                <th className="element-status">Status</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <>
                <>
                  {trainings.map((state, i) => (
                    <tr key={i} onClick={() => setOpenTrainingDetails(true)}>
                      <td className="project-contente">
                        <div className="project-contain">{state.title}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content"><a>{state.body}</a></div>
                      </td>
                      <td className="project-container2">
                        <div className="details-content">{state.details}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content">{state.location}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content">{state.start}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content">{state.cost}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content"><a>{state.upload}</a></div>
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
          <Modal open={OpenTrainingDetails}>
        <TrainingDetails setOpenTrainingDetails={setOpenTrainingDetails} />
      </Modal>
        </div>
      )}
    </>
  );
}
