import React from "react";
import { useEffect, useState } from "react";
import EmptyTask from "./EmptyTask";
import { img10 } from "../../images";
import { img20 } from "../../images";
import { img21 } from "../../images";
import { img22 } from "../../images";
import { img23 } from "../../images";
import { img24, img25, img26 } from "../../images";
import TaskHeader from "./TaskHeader";
import Modal from "./Modals";
import TaskDetails from "./TaskDetails";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [OpenDetails, setOpenDetails] = useState(false);
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(true);
    setCheckedTwo(true);
  };
  

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <>
      <TaskHeader setTasks={setTasks} itemCount={tasks.length}/>
      {tasks.length === 0 ? (
        <EmptyTask />
      ) : (
        <div className="task-table">
          <div className="task-completion">
            <button className="task-status">All Task</button>
            <button className="task-status">Pending</button>
            <button className="task-status">Completed</button>
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
            <div className="filter-box">
              <div className="filter-button">
                <img className="filter-icon" src={img21} alt="" />
                <button className="filter-status">Filter</button>
              </div>
              <div className="image-button2">
                <img className="edit" src={img20} alt="" />
              </div>
              <div className="image-button">
                <img className="element" src={img22} alt="" />
              </div>
            </div>
          </div>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th className="element-name">
                  <input
                    type="checkbox"
                    className="checkbox"
                    label="Value 1"
                    value={checkedOne}
                    onChange={handleChangeOne}
                  />
                  <p className="">Name</p>
                </th>
                <th className="element-project">Project</th>
                <th className="element-title">Title</th>
                <th className="element-details">
                  Details <img className="help-circle" src={img23} alt=""></img>
                </th>
                <th className="element-eta">ETA</th>
                <th className="element-status">Status</th>
                <th className="status-icon"></th>
              </tr>
            </thead>
            <tbody className="table-body">
              <>
                <>
                {tasks.map((state, i) => (
                    <tr key={i} onClick={() => setOpenDetails(true)}>
                      <td className="name-content">
                        <input
                          type="checkbox"
                          className="checkbox"
                          label="Value 2"
                          value={checkedTwo}
                          onChange={handleChangeTwo}
                        />
                        <ul className="tasklists">
                          <li className="list1">
                            <strong>Babajide Eniafe</strong>
                          </li>
                          <li className="list2">kingsley@adebayoadeleke.com</li>
                        </ul>
                      </td>
                      <td className="project-content">
                        <div className="project-container1">{state.title}</div>
                      </td>
                      <td className="project-container">
                        <div className="title-content">{state.body}</div>
                      </td>
                      <td className="project-container2">
                        <div className="details-content">{state.details}</div>
                      </td>
                      <td className="project-container3">
                        <div className="eta-content">{state.eta}</div>
                      </td>
                      <td className="project-container4">
                        <div className="status-content">
                          <img className="complett" src={img24} alt="" />
                          {state.status}
                        </div>
                      </td>
                      <td className="project-container">
                        <div className="sucess3">
                          {state.status === "completed" ? (
                            <img src={img25} className="" alt="" />
                          ) : (
                            <img src={img26} className="" alt="" />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              </>
            </tbody>
          </table>
          <Modal open={OpenDetails}>
            <TaskDetails setOpenDetails={setOpenDetails} />
          </Modal>
        </div>
      )}
    </>
  );
}
