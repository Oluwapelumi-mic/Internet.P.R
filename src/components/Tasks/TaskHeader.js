import React from "react";
import {img13,img14} from './../../images'; 
import { useState } from "react";
import { Modal } from "./Modals";



export default function TaskHeader(){
    const [openTask, setOpenTask] = useState(false)
    return(
        <div className="task-header">
            <div className="TaskCount">
                <p className="one">Task </p>
                <button className="count">192</button>
            </div>
            <div className="buttons">
                <div className="export-container">

                    <img src={img13} className="export-image" alt=""/>
                    <a href="./export" className="export" >Export</a>

                </div>
                <div className="create-container">
                    <img src={img14}  className="create-image" alt=""/>
                    <button className="create" onClick={() => {setOpenTask(true);}}>Create Task</button>
                    <Modal open={openTask} onclose={() => setOpenTask(false)} />

                </div>
            </div>
        </div>

    );
}