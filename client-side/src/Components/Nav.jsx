import React from "react";
import HomeIcon from "../images/home-icon.svg"
import HubIcon from "../images/hub-icon.svg"
import NotesIcon from "../images/notes-icon.svg"

export default function Nav() {


    return(
        <div className="nav-menu-buttons-container">
            <ul className="nav-menu-buttons">
                <li>
                    
                    <a href='/' className="nav-menu-button">
                        <div className="nav-icon">
                            <img src={HomeIcon} alt="" />
                        </div>
                        <h2>Dashboard</h2>
                    </a>
                    
                    <div className="nav-button-highlight"></div>
                </li>
                <li>
                    <a href="https://docs.google.com/spreadsheets/d/1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A/edit#gid=706279304" className="nav-menu-button">
                        <div className="nav-icon">
                            <img src={HubIcon} alt="" />
                        </div>
                        <h2>Customer Hub</h2>
                    </a>
                    <div className="nav-button-highlight"></div>
                </li>
                <li>
                    <a href="/calculator" className="nav-menu-button">
                        <div className="nav-icon">
                            <img src={NotesIcon} alt="" />
                        </div>
                        <h2>Calculator</h2>
                    </a>
                    <div className="nav-button-highlight"></div>
                </li>
                <li>
                    <div className="nav-menu-button">
                        <div className="nav-icon">
                            <img src={NotesIcon} alt="" />
                        </div>
                        <h2>Notes</h2>
                    </div>
                    <div className="nav-button-highlight"></div>
                </li>
            </ul>
        </div>
    )
}