import React from "react";
import {img15} from './../../images'; 


export default function EmptyTraining(){
    return(
        <div className="empty-task">
            <img src={img15}  className="active-task" alt=""/>
            <h2 className="empty-training">No Active Training </h2>
            <p className="empty-p">You currently do not have any 
            active training at the moment, you can proceed to create one. </p>
        </div>
    );
}