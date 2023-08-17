import React from "react";
import {img15} from './../../images'; 


export default function EmptyTask(){
    return(
        <div className="empty-task">
            <img src={img15}  className="active-task" alt=""/>
            <h2 className="empty-text">No Active Tasks</h2>
            <p className="empty-p">You currently do not have any active task at the moment, you can proceed to create one. </p>
        </div>
        
    );
}