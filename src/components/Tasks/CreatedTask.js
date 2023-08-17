import React from "react";
import {img17} from './../../images';
import {img18} from './../../images';
import {img19} from './../../images';

export default function CreatedTask(){
    return(
        <div className="create-page">
            <div className="create1">
                <div className="heading1">
                    <img src={img17} className="exit1" alt=""/>

                </div>

                <div className="added-task">
                    <div className="added-icons">
                        <img src={img18} className="path" alt=""/>
                        <img src={img19} className="oval" alt=""/>
                        <h4 className="tick">✔</h4>

                    </div>
                    <h2 className="task-created">Task Created</h2>
                    <p className="task-created-text">Your task has been succesfully created and added to your board </p>
                    <div className="okay-btn">
                        <button type="submit" className="okay">Okay</button>
                    </div>
                    
                </div>


            </div>
        </div>

        
    );
}