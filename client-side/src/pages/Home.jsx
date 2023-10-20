import React, { useEffect, useState } from "react";
import CMSLogo from "../images/cms-logo-1.svg"
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
import Nav from "../Components/Nav";


export default function Home(){

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

    return (
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

                <section className="customer-reports-section">
                    <div className="customer-reports-container">

                        <div className="customer-reports-title-container">
                                <h2>CUSTOMER RECEIVER FORMS</h2>
                        </div>
                        <div className="customer-reports-buttons-container">
                            <ul className="customer-reports-buttons">
                                <li>
                                    <a href="/regular">
                                        <div className="customer-reports-icon">
                                            <img src={RegularIcon} alt="" />
                                        </div>
                                        REGULAR RECIEVER
                                    </a>
                                </li>
                                <li>
                                    <a href="/hotel-emilie">
                                        <div className="customer-reports-icon">
                                            <img src={EmilieIcon} alt="" />
                                        </div>
                                        HOTEL EMILIE
                                    </a>
                                </li>
                                <li>
                                    <a href="/acorns-east-orange">
                                        <div   div className="customer-reports-icon">
                                            <img src={AcornsIcon} alt="" />
                                        </div>
                                        ACORNS EAST ORANGE
                                    </a>
                                </li>
                                <li>
                                    <a href="/big-checkn-sodo">
                                        <div className="customer-reports-icon">
                                            <img src={ChickenIcon} alt="" />
                                        </div>
                                        BIG CHICKEN SODO
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div className="customer-reports-icon">
                                            <img src={WoldarfIcon} alt="" />
                                        </div>
                                        WOLDORF ASTORIA
                                    </a>
                                </li>
                                <li>
                                    <a href="/toms-watch-bar">
                                        <div className="customer-reports-icon">
                                            <img src={TomsIcon} alt="" />
                                        </div>
                                        TOMS WATCH BAR
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="special-reports-section">
                    <div className="special-reports-container">
                        <div className="special-reports-title-container">
                            <h2>SPECIAL FORMS</h2>
                        </div>
                        <div className="special-reports-buttons-container">
                            <ul className="special-reports-buttons">
                                <li>
                                    <a className="damage-report-button" href="">
                                        <img src={DamageIcon} alt="" />
                                        <h2>DAMAGE REPORT</h2>
                                    </a>
                                </li>
                                <li>
                                    <a className="vaulted-form-button" href="">
                                        <img src={VaultedIcon} alt="" />
                                        <h2>VAULTED FORM</h2>
                                    </a>
                                </li>
                                <li>
                                    <a className="packing-list-button" href="">
                                        <img src={PackingIcon} alt="" />
                                        <h2>PACKING LIST FORM</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </main>
            
        </div>
    )
}