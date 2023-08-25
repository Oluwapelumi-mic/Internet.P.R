import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmptyTask from "./EmptyTask";
import { img10 } from "../../images";
import { img20 } from "../../images";
import { img21 } from "../../images";
import { img22 } from "../../images";
import { img23 } from "../../images";
import { img24, img25 } from "../../images";
import TaskHeader from "./TaskHeader";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskHeader setTasks={setTasks} />
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
                <th className="element-name">Name</th>
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
                    <tr>
                      <td className="name-content">
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
                        <img src={img25} className="sucess" />
                      </td>
                    </tr>
                  ))}
                </>
              </>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
