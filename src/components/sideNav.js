import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { img1, img2, img3, img4, img5, img6, img7, img8, img28, img29 } from "../images";
export default function SideNav() {
  const [open, setOpen] = useState(true);
  const {pathname}= useLocation();
  const handleDropdownClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const listItems = document.querySelectorAll(".column");

    listItems.forEach((item) => {
      item.addEventListener("click", function () {
        listItems.forEach((item) => {
          item.classList.remove("clicked");
        });
        item.classList.add("clicked");
      });
    });
  }, []);
  return (
    <nav className= "nav">
      <img className="image" src={img1} alt="" />
      <ul className="rowBar">
        <li className={pathname==="/dashboard" ? "column-clicked":"column"}>
          <img className="icons" src={img2} alt="" />
          <a className={pathname==="/dashboard" ? "a1 ":"a"} href="/dashboard" >
            DashBoard
          </a>
        </li>
        <li className={pathname==="/clock" ? "column-clicked":"column"}>
          <img className="icons" src={img3} alt="" />
          <a className={pathname==="/clock" ? "a1 ":"a"} href="/clock">
            Clock
          </a>
        </li>
        <li className={pathname==="/task" ? "column-clicked":"column"}>
          <img className="icons1" src={img4} alt="" />
          <a className={pathname==="/task" ? "a1 ":"a"} href="/task">
            Task
          </a>
        </li>
        <li className={pathname==="/meeting" ? "column-clicked":"column"}>
          <img className="icons" src={img5} alt="" />
          <a className={pathname==="/meeting" ? "a1 ":"a"} href="/meeting">
            Meeting
          </a>
        </li>
        <li className={pathname==="/report" ? "column-clicked":"column"}>
          <img className="icons" src={img6} alt="" />
          <a className={pathname==="/report" ? "a1 ":"a"} href="/report">
            Reports
          </a>
        </li>
        <li className= {pathname === "/leave" || pathname === "/training" ? "column-form":"column"}>
          <img className="icons" src={img7} alt="" />
          <button className={pathname === "/leave" || pathname === "/training" ? "button-text-opened" : "button-text"} onClick={handleDropdownClick}>

            Forms
          </button>
          <img className="icons" src={img28} alt="" onClick={handleDropdownClick}/>
        </li>
        <div className={`form-dropdown ${open ? "form-dropdown-open" : ""}`}>
          <ul className="form-list">
            <li className="form-column">
            <img className="icons-form" src={img29} alt="" />
              <a className={pathname==="/leave" ? "a-form-clicked ":"a-form"} href="/leave">
                Leave
              </a>
            </li>
            <li className="form-column">
            <img className="icons-form" src={img29} alt="" />
              <a className={pathname==="/training" ? "a-form-clicked ":"a-form"} href="/training">
                Training
              </a>
            </li>
            <li className="form-column-e">
            <img className="icons-form" src={img29} alt="" />
              <a className={pathname==="/expenditure" ? "a-form-clicked ":"a-form"} href="/expenditure">
                Expenditure
              </a>
            </li>
          </ul>
        </div>
        <li className={pathname==="/settings" ? "column-clicked":"column"}>
          <img className="icons" src={img8} alt="" />
          <a className={pathname==="/settings" ? "a1 ":"a"} href="/settings">
            settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
