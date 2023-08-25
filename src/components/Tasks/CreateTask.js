import React from "react";
import {Link} from 'react-router-dom'
import CreatedTask from "./CreatedTask";
import Modal from "./Modals";
import { useState } from "react";
import { img16, img17 } from "./../../images";

export default function CreateTask({ setOpenTask, setTasks }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    details: '',
    eta: '',
    status: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev)=>[...prev,formData])
    setIsSuccessful(true)
  }
  const handleChange = (event) => {
      setFormData({...formData,[event.target.name]: event.target.value});
  }
  return (
    <div className="create1">
      <div className="heading">
        <div className="add-task">
          <div className="task-image-container">
            <img src={img16} className="task-image" alt="" />
          </div>
          <p className="add-task-title">Add Task</p>
        </div>
        <img
          onClick={() => {
            setOpenTask(false);
          }}
          src={img17}
          className="exit"
          alt=""
        />
      </div>
      <div className="forms">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label style={{ color: "#191632" }}>Product Name</label>
            <input type="text" name="title" placeholder="Enter Name"  onChange={handleChange}/>
          </div>
          <div className="field">
            <label style={{ color: "#191632" }}>Project Title</label>
            <input type="text" name="body" placeholder="Enter Title" onChange={handleChange} />
          </div>
          <div className="field">
            <label style={{ color: "#191632" }}>Project Details</label>
            <input
              type="text"
              name="details"
              placeholder="Add Project Descriptions"
              className="details"
              onChange={handleChange}
            />
          </div>
          <div className="flex-part">
            <div className="field1">
              <label style={{ color: "#191632" }}>ETA</label>
              <input type="text" name="eta" onChange={handleChange} />
            </div>
            <div className="field1">
              <label style={{ color: "#191632" }}>Status</label>
              <input type="text" name="status" placeholder="pending" onChange={handleChange}/>
            </div>
          </div>
          <div className="footer">
              <div className="submit-task">
                <button
                  type="button"
                  className="cancel"
                  onClick={() => {
                    setOpenTask(false);
                  }}
                >
                  Cancel
                </button>
                <button type="submit"
                  className="confirm">Confirm
                </button>
              </div>
            </div>
        </form>
      </div>
      <Modal open={isSuccessful}>
        <CreatedTask setIsSuccessful={setIsSuccessful} />
      </Modal>
    </div>
  );
}
