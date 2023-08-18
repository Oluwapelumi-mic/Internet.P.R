import React, { useState } from "react";
import { img17 } from "./../../images";
import { img18 } from "./../../images";
import { img19 } from "./../../images";

export default function CreatedTask({setIsSuccessful}) {
  return (
    <div className="create2">
      <div className="heading1">
        <img onClick={() => {
                    setIsSuccessful(false);
                  }} src={img17} className="exit1" alt="" />
      </div>

      <div className="added-task">
        <div className="added-icons">
          <img src={img18} className="path" alt="" />
          <img src={img19} className="oval" alt="" />
          <h4 className="tick">✔</h4>
        </div>
        <h2 className="task-created">Task created</h2>
        <p className="task-created-text">
          Your task has been succesfully created and added to your board{" "}
        </p>
        <div className="okay-btn">
          <button onClick={() => {
                    setIsSuccessful(false);
                  }} type="submit" className="okay">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
