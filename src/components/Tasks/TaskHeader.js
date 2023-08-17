import React from "react";
import { Modal } from "./Modals";
import {img13,img14} from './../../images'; 
import { useState } from "react";
import {img16} from './../../images';
import {img17} from './../../images';


export default function TaskHeader(){
    const [openTask, setOpenTask, onclose] = useState(false)
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
                    <button className="create" onClick={() => {
                        setOpenTask(true);}}>Create Task</button>     
                </div>
                <Modal open={openTask} onclose={() => setOpenTask(false)}>
                            <div className="create-page">
                                <div className="create1">
                                    <div className="heading">
                                        <div className="add-task">
                                            <div className="task-image-container">
                                                <img src={img16} className="task-image" alt=""/>
                                            </div>
                                            <p className="add-task-title">Add Task</p>
                                        </div>
                                        <img onClick={()=> {
                                                setOpenTask(false);
                                            }} src={img17} className="exit" alt=""/>

                                    </div>
                                    <div className="forms">
                                        <form className="ui form">
                                            <div className="field">
                                                <label style={{ color: "#191632" }}>Product Name</label>
                                                <input
                                                type="text"
                                                name="title"
                                                placeholder="Enter Name"
                                                />
                                            </div>
                                            <div className="field">
                                                <label style={{ color: "#191632" }}>Project Title</label>
                                                <input
                                                type="text"
                                                name="body"
                                                placeholder="Enter Title"
                                                />
                                            </div>
                                            <div className="field">
                                                <label style={{ color: "#191632" }}>Project Details</label>
                                                <input
                                                type="text"
                                                name="details"
                                                placeholder="Add Project Descriptions"
                                                className="details"
                                                />
                                            </div>
                                            <div className="flex-part">
                                                <div className="field1">
                                                    <label style={{ color: "#191632" }}>ETA</label>
                                                    <input
                                                    type="text"
                                                    name="ETA"
                                                    />
                                                </div>
                                                <div className="field1">
                                                    <label style={{ color: "#191632" }}>Status</label>
                                                    <input
                                                    type="text"
                                                    name="status"
                                                    placeholder="pending"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="footer">
                                        <div className="submit-task">
                                            <button type="submit" className="cancel"
                                            onClick={()=> {
                                                setOpenTask(false);
                                            }}>Cancel</button>
                                            <button className="confirm">Confirm</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </Modal>
            </div>
        </div>

    );
}