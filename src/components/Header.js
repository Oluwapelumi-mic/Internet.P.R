import React from "react";
import {img9} from '../images'
import {img10} from '../images'  
import {img11} from '../images' 
import {img12} from '../images' 

export default function Header(){
    return (
        <div className="search-box">
            <form className="search">
                <img className="search-icon" src={img10} alt=""/>
                <input type="text" className="search-input" placeholder="Search anything here"/>
            </form>

            <ul className="profile-list">
                <li className="settings">
                    <img className="settings-icon" src={img11} alt=""/>
                </li>
                <li className="notifications">
                    <img className="bell-icon" src={img12} alt=""/>
                </li>
                <li className="profile">
                    <img className="profile-icon" src={img9} alt=""/>
                </li>
            </ul>
        </div>
    );
}