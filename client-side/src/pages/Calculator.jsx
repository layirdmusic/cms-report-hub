import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';

import CMSLogo from "../images/cms-logo-1.svg"
import SearchIcon from "../images/search-icon.svg"
import CMSLogoMobile from "../images/cms-logo-2.svg"
import CMSIcon from "../images/cms-icon.svg"
import Qoutes from "../Qoutes";
import RegularTitle from "../images/regular-form-title.svg"
import SquarePanels from "../images/square-panels2.svg"
import Nav from '../Components/Nav';
import CloseIcon from "../images/close-icon.svg"
import RegularFormImage from "../images/regular-form-image.png"
import DownArrow from "../images/down-arrow.svg"
import CalcTitle from "../images/calculator-title.svg"



export default function Calculator() {

    const [isChecked, setIsChecked] = useState(false)
    const [scrollDisabled, setScrollDisabled] = useState (false)
    
    const [total, setTotal] = useState(0)
    
    const handleChange = (e) => {
        let newTotal = 0
        document.querySelectorAll(".product-count").forEach (function(input) {
            newTotal += parseInt(input.value) || 0
        })
        setTotal(newTotal)
    }

  useEffect(() => {
    console.log(total)
  },[total])



    
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
        <>
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

                    <header className='calc-section'>
                        <img className="square-panels" src={SquarePanels} alt="" />
                        <div className="form-header-content-back"></div>
                        <div className="calc-section-content">
                            <div className='calc-title-container'>
                                <img src={CalcTitle} alt="" />
                            </div>
                            <div className='calc-table-base'>
                                    <div className='table-header'>
                                        <p>Enter Numbers</p>
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-input'>
                                        <input onChange={handleChange} className="product-count" type="text" />
                                    </div>
                                    <div className='table-total'>
                                        <div className='total-txt'>
                                            <p>Total:</p>
                                        </div>
                                        <div className='total-count'>
                                            <p>{total}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </header>
                </main>
                
            </div>

        </>
        
    )
}