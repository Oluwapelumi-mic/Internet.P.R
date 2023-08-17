import React from 'react'
import { img1,img2,img3,img4,img5,img6,img7,img8 } from '../images'
export default function SideNav(){
    return <nav className="nav">
        <img className="image" src={img1} alt=""/>
        <ul className="rowBar">
            <li className="column">
                <img className="icons" src= {img2} alt=""/>
                <a className='a' href="./dashboard">DashBoard</a>
            </li>
            <li className="column">
                <img className="icons" src={img3} alt=""/>
                <a className='a' href="./dashboard">Clock</a>
            </li>
            <li className="column1">
                <img className="icons1" src={img4} alt=""/>
                <a className='a1' href="./task">Task</a>
            </li>
            <li className="column">
                <img className="icons" src={img5} alt=""/>
                <a className='a' href="./dashboard">Meeting</a>
            </li>
            <li className="column">
                <img className="icons" src={img6} alt=""/>
                <a className='a' href="./dashboard" >Reports</a>
            </li>
            <li className="column">
                <img className="icons" src={img7} alt=""/>
                <a className='a' href="./forms" >Forms</a>
            </li>
            <li className="column">
                <img className="icons" src={img8} alt=""/>
                <a className='a' href="./settings" >settings</a>
            </li>
        </ul>

    </nav>
}