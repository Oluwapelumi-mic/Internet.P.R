import React from "react";
import CreatedLeave from "../Leaves/CreatedLeave";
import Modal from "../Tasks/Modals";
import { useState } from "react";
import { img16, img17 } from "./../../images";

export default function CreateLeave({ setOpenLeave, setLeave }) {
  const [LeaveSuccessful, setLeaveSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    upload: "",
    start: "",
    end: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLeave((prev) => [...prev, formData]);
    setLeaveSuccessful(true);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="create1">
      <div className="heading">
        <div className="add-training">
          <div className="task-image-container">
            <img src={img16} className="task-image" alt="" />
          </div>
          <p className="add-training-title">Apply for Leave</p>
        </div>
        <img
          onClick={() => {
            setOpenLeave(false);
          }}
          src={img17}
          className="exit-training"
          alt=""
        />
      </div>
      <div className="forms">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Leave Type</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Leave Details</label>
            <input
              type="text"
              name="details"
              placeholder="Add reason for Leave"
              className="details"
              onChange={handleChange}
            />
          </div>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Upload File</label>
            <input
              type="text"
              name="upload"
              placeholder="Click to browse or drag and drop your files"
              className="upload-details"
              onChange={handleChange}
            />
          </div>
          <div className="flex-part">
            <div className="field-training1">
              <label style={{ color: "#191632" }}>Start Date</label>
              <input type="text" name="start" onChange={handleChange} />
            </div>
            <div className="field-training1">
              <label style={{ color: "#191632" }}>End Date</label>
              <input
                type="text"
                name="end"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="footer">
            <div className="submit-task">
              <button
                type="button"
                className="cancel"
                onClick={() => {
                  setOpenLeave(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="confirm"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal open={LeaveSuccessful}>
        <CreatedLeave setLeaveSuccessful={setLeaveSuccessful} />
      </Modal>
    </div>
  );
}
