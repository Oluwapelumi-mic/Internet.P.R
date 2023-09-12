import React, { useState } from "react";
import { img17 } from "./../../images";
import { img18 } from "./../../images";
import { img19 } from "./../../images";


export default function CreatedTraining({setTrainingSuccessful}) {

  return (
    <div className="create2">
      <div className="heading1">
        <img onClick={() => {
                    setTrainingSuccessful(false);
                  }} src={img17} className="exit1" alt="" />
      </div>

      <div className="added-task">
        <div className="added-icons">
          <img src={img18} className="path" alt="" />
          <img src={img19} className="oval" alt="" />
          <h4 className="tick">✔</h4>
        </div>
        <h2 className="task-created">Training Request created</h2>
        <p className="task-created-text">
          Your training has been succesfully created and added to your board{" "}
        </p>
        <div className="okay-btn">
          <button onClick={() => {
                    setTrainingSuccessful(false)  ;
                  }} type="submit" className="okay">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
