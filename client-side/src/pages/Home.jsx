import React, { useEffect, useState } from "react";
import CMSLogo from "../images/cms-logo-1.svg"

export default function Home(){

    const [isChecked, setIsChecked] = useState(false)
    const [scrollDisabled, setScrollDisabled] = useState (false)
    
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
                <h1>Navigation</h1>

                <div className="nav-elements-container">
                    <div className="logo-container">
                        <img className="cms-logo-one" src={CMSLogo} alt="CMS Logo" />
                    </div>

                    <div className="nav-search-container">
                        <h2>Search Bar Container</h2>
                    </div>

                    <div className="nav-menu-buttons-container">
                        <ul className="nav-menu-buttons">
                            <li>
                                <div className="nav-icon"></div>
                                <h2>Dashboard</h2>
                            </li>
                            <li>
                                <div className="nav-icon"></div>
                                <h2>Customer Hub</h2>
                            </li>
                            <li>
                                <div className="nav-icon"></div>
                                <h2>Notes</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mobile-nav-line"></div>
            <main>
                <section className="mobile-nav">
                    <div className="mobile-nav-icon">

                    </div>
                    <div className="mobile-nav-logo">

                    </div>
                </section>
                <section className="search-bar-container">
                    <div className="dashboard-title-container">

                    </div>
                    <div className="dashboard-search-container search-hidden-small-screen">

                    </div>

                </section>

                <header>
                    <div className="header-greeting-container">

                    </div>

                    <div className="header-date-container">

                    </div>

                    <div className="header-line"></div>

                    <div className="header-qoute-container">

                    </div>
                </header>

                <section className="customer-reports-section">
                    <div className="customer-reports-container">

                        <div className="customer-reports-title-container">
                                <h2>customer-reports-title-container</h2>
                        </div>
                        <div className="customer-reports-buttons-container">
                            <ul className="customer-reports-buttons">
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                                <li>
                                    <a href="">Regular Receiver</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="special-reports-section">
                    <div className="special-reports-container">
                        <div className="special-reports-title-container">
                            <h2>customer-reports-title-container</h2>
                        </div>
                        <div className="special-reports-buttons-container">
                            <ul className="special-reports-buttons">
                                <li>
                                    <a href="">Special Report</a>
                                </li>
                                <li>
                                    <a href="">Special Report</a>
                                </li>
                                <li>
                                    <a href="">Special Report</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}