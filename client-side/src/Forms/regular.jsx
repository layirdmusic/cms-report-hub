import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CMSLogo from "../images/cms-logo-1.svg"
import HomeIcon from "../images/home-icon.svg"
import HubIcon from "../images/hub-icon.svg"
import NotesIcon from "../images/notes-icon.svg"
import SearchIcon from "../images/search-icon.svg"
import CMSLogoMobile from "../images/cms-logo-2.svg"
import CMSIcon from "../images/cms-icon.svg"
import Qoutes from "../Qoutes";
import Greeting from "../images/greeting.svg"
import SquarePanels from "../images/square-panels2.svg"
import TomsIcon from "../images/toms-icon.svg"
import WoldarfIcon from "../images/woldarf-icon.svg"
import ChickenIcon from "../images/chicken-icon.svg"
import AcornsIcon from "../images/acorns-icon.svg"
import EmilieIcon from "../images/emilie-icon.svg"
import RegularIcon from "../images/regular-icon.svg"
import DamageIcon from "../images/damage-icon.svg"
import VaultedIcon from "../images/vaulted-icon.svg"
import PackingIcon from "../images/packing-icon.svg"
// import Regular from "../Forms/regular";


export default function Regular() {

    const [isChecked, setIsChecked] = useState(false)
    const [scrollDisabled, setScrollDisabled] = useState (false)
    const currentDate = new Date()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov" ,"Dec"]
    const currentWeekDay = weekDays[currentDate.getDay()]
    const currentDayNum = currentDate.getDate()
    const currentMonth = months[currentDate.getMonth()]
    
    const handleToggle = () => {
        setIsChecked(!isChecked)
        setScrollDisabled(!scrollDisabled)
    }

    useEffect(() => {
        if(scrollDisabled === true) {
            document.body.classList.add('scroll-disabled')
        } else {
            document.body.classList.remove('scroll-disabled')
        }
    },[scrollDisabled])

    const [iframeKey, setIframeKey] = useState(0)

    const fetchData = async () => {
        const results = await axios.get('/.netlify/functions/postFunction')
        console.log(results.data.message)
    }
    
    const postData = async (e) => {
        e.preventDefault()

        try {
        const response = await axios.post('.netlify/functions/postFunction',{
            jobNameOne: document.querySelector(".job-name-one").value,
            jobNameTwo: document.querySelector(".job-name-two").value
        })
        console.log(response.data)
        } catch(error) {
            console.log(error)
        }

        window.open("https://docs.google.com/spreadsheets/d/1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A/export?format=xlsx", "_blank")
    }

    useEffect(() => {
        fetchData()
    },[])




    return (
        <>
            <form className="form" id="sheetdb-form" onSubmit={postData}>
            <input type="text" placeholder="Requests" className="form-request" name="request" />
            <input type="text" placeholder="Name" id="name" className="form-name" />
            <input className="button" type="submit"/>
            </form>

            <div className="home-page-container">
                <input checked={isChecked} onChange={handleToggle} className="nav-toggler" type="checkbox" />
                <nav>
                    <div className="nav-elements-container">
                        <div className="logo-container">
                            <img className="cms-logo-one" src={CMSLogo} alt="CMS Logo" />
                        </div>

                        <div className="nav-search-container">
                            <div className="nav-search-icon-container">
                                <img src={SearchIcon} alt="" />
                            </div>
                            <div className="nav-search-bar-container">
                                <input type="text" placeholder="Search Customer reports" />
                            </div>
                        </div>

                        <div className="nav-menu-buttons-container">
                            <ul className="nav-menu-buttons">
                                <li>
                                    <div className="nav-menu-button">
                                        <div className="nav-icon">
                                            <img src={HomeIcon} alt="" />
                                        </div>
                                        <h2>Dashboard</h2>
                                    </div>
                                    <div className="nav-button-highlight"></div>
                                </li>
                                <li>
                                    <div className="nav-menu-button">
                                        <div className="nav-icon">
                                            <img src={HubIcon} alt="" />
                                        </div>
                                        <h2>Customer Hub</h2>
                                    </div>
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
                    </div>
                </nav>
                <div className="mobile-nav-hamburger-line"></div>
                <main>
                    <section className="mobile-nav">
                        <div className="mobile-nav-icon">
                            <img src={CMSIcon} alt="" />
                        </div>
                        <div className="mobile-nav-logo">
                            <img src={CMSLogoMobile} alt="" />
                        </div>
                    </section>
                    <section className="search-bar-container">
                        <div className="dashboard-title-container">
                            <h2>DASHBOARD</h2>
                        </div>
                        <div className="dashboard-search-container search-hidden-small-screen">
                            <div className="dashboard-search-icon-container">
                                <img src={SearchIcon} alt="" />
                            </div>
                            <div className="dashboard-search-bar-container">
                                <input className="dashboard-search-bar" type="text" placeholder="Search Customer reports" />
                            </div>
                        </div>

                    </section>

                    <header>
                        <img className="square-panels" src={SquarePanels} alt="" />
                        <div className="header-content-background"></div>
                        <div className="header-content">
                            <div className="header-greeting-container">
                                    <img src={Greeting} alt="" />
                            </div>

                            <div className="header-date-container">
                                <h3>Todays is {currentWeekDay}, {currentMonth} {currentDayNum}</h3>
                            </div>

                            <div className="header-line"></div>

                            <div className="header-qoute-container">
                                <Qoutes />
                            </div>
                            <div className="header-scroll-button-highlight">
                                <div className="header-scroll-button-background">
                                    <a className="header-scroll-button" href="">Start Report</a>
                                </div>
                            </div>
                        </div>

                    </header>

                    <section className="form-inputs-section">
                        <form onSubmit={postData} className="form-inputs-content-container">
                            <for className='form-inputs-container'>
                                <div className='form-customer-inputs-container'>
                                    <h2>CUSTOMER INFO</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>DESCRIPTION</th>
                                                <th>DATA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='row-label'>Job Name Line 1:</td>
                                                <td><input type="text" className="form-job-name-one" name="job-name-one" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Job Name Line 2:</td>
                                                <td><input type="text" className="form-job-name-two" name="job-name-two" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Date Received:</td>
                                                <td><input type="text" className="form-data" name="data" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>3 Part Number:</td>
                                                <td><input type="text" className="form-job-id" name="job-id" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>PO Number:</td>
                                                <td><input type="text" className="form-job-po" name="job-po" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Received By:</td>
                                                <td><input type="text" className="form-job-receiver" name="job-receiver" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>BOL Number:</td>
                                                <td><input type="text" className="form-job-bol" name="job-bol" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Delivery Carrier:</td>
                                                <td><input type="text" className="form-job-carrier" name="job-carrier" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Lbs:</td>
                                                <td><input type="text" className="form-job-lbs" name="job-lbs" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Total Item Count:</td>
                                                <td><input type="text" className="form-job-item-count" name="job-item-count" /></td>
                                            </tr>
                                            <tr>
                                                <td className='row-label'>Vendor:</td>
                                                <td><input type="text" className="form-job-vendor" name="job-vendor" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='form-product-inputs-container'>
                                    <h2>PRODUCT INFO</h2>
                                </div>
                            </for>
                            <div className='form-submit-button-container'>
                                <button type='submit' className='form-submit-button'>SUBMIT | UPDATE</button>
                            </div>
                        </form>
                            
                    </section>
                </main>
                
            </div>

        </>
        
    )
}