import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CMSLogo from "../images/cms-logo-1.svg"
import SearchIcon from "../images/search-icon.svg"
import CMSLogoMobile from "../images/cms-logo-2.svg"
import CMSIcon from "../images/cms-icon.svg"
import Qoutes from "../Qoutes";
import Greeting from "../images/greeting.svg"
import SquarePanels from "../images/square-panels2.svg"
import Nav from '../Components/Nav';



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
            nameOne: document.querySelector(".name-one").value,
            NameTwo: document.querySelector(".name-two").value
        })
        console.log(response.data)
        } catch(error) {
            console.log(error)
        }

        // window.open("https://docs.google.com/spreadsheets/d/1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A/export?format=xlsx", "_blank")
    }

        const nextInput = (e) => {

            if(e.keyCode === 13){
                document.querySelector(".form-job-name-two").focus()
            }

        }


    useEffect(() => {
        fetchData()
    },[])




    return (
        <>
            {/* <form className="form" id="sheetdb-form" onSubmit={postData}>
            <input type="text" placeholder="Requests" className="form-request" name="request" />
            <input type="text" placeholder="Name" id="name" className="form-name" />
            <input className="button" type="submit"/>
            </form> */}

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

                        <Nav />
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
                            <div className='form-inputs-container'>
                                <div className='form-customer-inputs-container'>
                                    <h2 className='form-title'>CUSTOMER</h2>
                                    <p className='form-subtitle'>Enter customer name and info</p>
                                    {/* <div className='header-line'></div> */}
                                    <div className='customer-table-background'>
                                        <div className='customer-table'>
                                            <div className='desc'>
                                                <div className='form-header header-one'>
                                                    <h2>DATA TYPE</h2>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Job Name 1:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Job Name 2:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Date Received:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>3 Part Number:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>PO Number:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Received By:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>BOL Number:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Delivery Number:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Lbs:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Total Item Count:</p>
                                                </div>
                                                <div className='desc-body'>
                                                    <p>Vendor:</p>
                                                </div>
                                            </div>
                                            <div className='data'>
                                                <div className='form-header header-two'>
                                                    <h2>DATA INPUT</h2>
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                    
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-two" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-one" name="name-one" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className='form-product-inputs-container'>
                                    <h2 className='form-title'>PRODUCT</h2>
                                    <p className='form-subtitle'>Enter product details and location</p>
                                        <div className='scroll-box'>
                                            <div className='product-table-base'>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-one'>
                                                        <h2>ITEM CODE</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item-code-one" name="item-code-one" />
                                                    
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-two'>
                                                        <h2>DESCRIPTION</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-three'>
                                                        <h2>LOCATION</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-four'>
                                                        <h2>SKID | BOX | CRATE</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-five'>
                                                        <h2>QUANTITY</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-code-one" name="item-code-one" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className='form-submit-button-container'>
                                <button type='submit' className='form-submit-button'><h2>SUBMIT | UPDATE</h2></button>
                            </div>
                        </form>
                            
                    </section>
                </main>
                
            </div>

        </>
        
    )
}