import React from "react";
import {img15} from './../../images'; 


export default function EmptyLeave(){
    return(
        <div className="empty-task">
            <img src={img15}  className="active-task" alt=""/>
            <h2 className="empty-text">No Active Leave</h2>
            <p className="empty-p">You currently do not have any 
            Leave at the moment, you can proceed to Apply for one. </p>
        </div>
        
    );
}