import React from "react";
import CreatedTraining from "../Trainings/CreatedTraining";
import Modal from "../Tasks/Modals";
import { useState } from "react";
import { img16, img17 } from "./../../images";

export default function CreateTraining({ setOpenTraining, setTrainings }) {
  const [TrainingSuccessful, setTrainingSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    details: "",
    location: "",
    cost: "",
    upload: "",
    start: "",
    end: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTrainings((prev) => [...prev, formData]);
    setTrainingSuccessful(true);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="create1">
      <div className="heading-training">
        <div className="add-training">
          <div className="task-image-container">
            <img src={img16} className="task-image" alt="" />
          </div>
          <p className="add-training-title">Training Details</p>
        </div>
        <img
          onClick={() => {
            setOpenTraining(false);
          }}
          src={img17}
          className="exit-training"
          alt=""
        />
      </div>
      <div className="forms">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Training Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Website URL</label>
            <input
              type="text"
              name="body"
              placeholder="Enter URL"
              onChange={handleChange}
            />
          </div>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Training Description</label>
            <input
              type="text"
              name="details"
              placeholder="Add Project Details"
              className="training-details"
              onChange={handleChange}
            />
          </div>
          <div className="flex-part">
            <div className="field-training1">
              <label style={{ color: "#191632" }}>Location</label>
              <input type="text" name="location" onChange={handleChange} />
            </div>
            <div className="field-training1">
              <label style={{ color: "#191632" }}>Training Cost</label>
              <input
                type="text"
                name="cost"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field-training">
            <label style={{ color: "#191632" }}>Upload File</label>
            <input
              type="text"
              name="upload"
              placeholder="Click to browse or drag and drop your files"
              className="upload"
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
                  setOpenTraining(false);
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
      <Modal open={TrainingSuccessful}>
        <CreatedTraining setTrainingSuccessful={setTrainingSuccessful} />
      </Modal>
    </div>
  );
}
