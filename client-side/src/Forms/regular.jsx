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
import CloseIcon from "../images/close-icon.svg"



export default function Regular() {

    const [isChecked, setIsChecked] = useState(false)
    const [scrollDisabled, setScrollDisabled] = useState (false)
    const currentDate = new Date()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov" ,"Dec"]
    const currentWeekDay = weekDays[currentDate.getDay()]
    const currentDayNum = currentDate.getDate()
    const currentMonth = months[currentDate.getMonth()]
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [successTitle, setSuccessTitle] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)

    // INPUT VAUES (START)
        const [nameOne, setNameOne] = useState("")
        const [nameTwo, setNameTwo] = useState("")
        const [date, setDate] = useState("")
        const [threePart, setThreePart] = useState("")
        const [poNum, setPoNum] = useState("")
        const [receivedBy, setReceivedBy] = useState("")
        const [bolNum, setBolNum] = useState("")
        const [carrier, setCarrier] = useState("")
        const [lbs, setLbs] = useState("")
        const [totalCount, setTotalCount] = useState("")
        const [vendor, setVendor] = useState("")

    // INPUT VAUES (START)
    
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


        let items = {}
    
    useEffect(() => {
        for(let i = 1; i <= 55; i++){
            const elementValue = document.querySelector(`.item${i}`)
            items[`item${i}`] = elementValue + ".value"
        }

        console.log(items)
    },[])


    const postData = async (e) => {
        e.preventDefault()

        try {
        const response = await axios.post('.netlify/functions/postFunction',{
            nameOne: document.querySelector(".name-one").value,
            nameTwo: document.querySelector(".name-two").value,
            date: document.querySelector(".date").value,
            threePart: document.querySelector(".three-part").value,
            poNum: document.querySelector(".po-num").value,
            receivedBy: document.querySelector(".received-by").value,
            bolNum: document.querySelector(".bol-num").value,
            carrier: document.querySelector(".carrier").value,
            lbs: document.querySelector(".lbs").value,
            totalCount: document.querySelector(".total-count").value,
            vendor: document.querySelector(".vendor").value,
            ...items
        })
        console.log(response.data)
        setSuccessTitle("SUCCESS")
        setSuccessMsg("FORM SUBMITTED")
        setNameOne("")
        setNameTwo("")
        setDate("")
        setThreePart("")
        setPoNum("")
        setReceivedBy("")
        setBolNum("")
        setCarrier("")
        setLbs("")
        setTotalCount("")
        setVendor("")
        


    


        } catch(error) {
            console.log(error)
            setSuccessTitle("FAILED")
            setSuccessMsg("FORM DID NOT SUBMIT")
        }

        setFormSubmitted(true)
    }

    const handleInputValueChange = (e) => {
        const nameOneValue = document.querySelector(".name-one").value
        const nameTwoValue = document.querySelector(".name-two").value
        const dateValue = document.querySelector(".date").value
        const threePartValue = document.querySelector(".three-part").value
        const poNumValue = document.querySelector(".po-num").value
        const receivedByValue = document.querySelector(".received-by").value
        const bolNumValue = document.querySelector(".bol-num").value
        const carrierValue = document.querySelector(".carrier").value
        const lbsValue = document.querySelector(".lbs").value
        const totalCountValue = document.querySelector(".total-count").value
        const vendorValue = document.querySelector(".vendor").value

        setNameOne(nameOneValue)
        setNameTwo(nameTwoValue)
        setDate(dateValue)
        setThreePart(threePartValue)
        setPoNum(poNumValue)
        setReceivedBy(receivedByValue)
        setBolNum(bolNumValue)
        setCarrier(carrierValue)
        setLbs(lbsValue)
        setTotalCount(totalCountValue)
        setVendor(vendorValue)


    }

    const nextInput = (e) => {

        if(e.keyCode === 13){
            document.querySelector(".form-job-name-two").focus()
        }
    }

    const closePopup = () => {
        setFormSubmitted(false)
    }

    


    useEffect(() => {
        fetchData()
    },[])




    return (
        <>
            <div className="home-page-container">
                <div className={`submit-popup-overlay ${formSubmitted? "": "overlay-hide"}`}>
                    <div className='submit-popup-base'>
                        <div className='close-button-container'>
                            <img onClick={closePopup} className='close-button' src={CloseIcon} alt="" />
                        </div>
                        <div className='message-container'>
                            <h2>{successTitle}</h2>
                            <p>{successMsg}</p>
                            <div className='form-link-container'>
                                <a href="https://docs.google.com/spreadsheets/d/1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A/edit#gid=472786389" target='_blank'> View Form</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
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
                                                    <input type="text" className="name-one" name="name-one" value={nameOne} onChange={(e) => handleInputValueChange(e)}/>
                                                    
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="name-two" name="name-two" value={nameTwo} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="date" name="date" value={date} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="three-part" name="three-part" value={threePart} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="po-num" name="po-num" value={poNum} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="received-by" name="received-by" value={receivedBy} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="bol-num" name="bol-num" value={bolNum} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="carrier" name="carrier" value={carrier} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="lbs" name="lbs" value={lbs} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="total-count" name="total-count" value={totalCount} onChange={(e) => handleInputValueChange(e)} />
                                                </div>
                                                <div className='data-body'>
                                                    <input type="text" className="vendor" name="vendor" value={vendor} onChange={(e) => handleInputValueChange(e)} />
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
                                                        <input type="text" className="item1" name="item1" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item2" name="item2" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item3" name="item3" />
                                                    
                                                    </div>
                                                    <div className='form-row column-body'>
                                                        <input type="text" className="item4" name="item4" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item5" name="item5" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item6" name="item6" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item7" name="item7" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item8" name="item8" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item9" name="item9" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item10" name="item10" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item11" name="item11" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-two'>
                                                        <h2>DESCRIPTION</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item12" name="item12" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item13" name="item13" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item14" name="item14" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item15" name="item15" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item16" name="item16" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item17" name="item17" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item18" name="item18" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item19" name="item19" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item20" name="item20" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item21" name="item21" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item22" name="item22" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-three'>
                                                        <h2>LOCATION</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item-23" name="item-23" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item24" name="item24" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item25" name="item25" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item26" name="item26" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item27" name="item27" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item28" name="item28" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item29" name="item29" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item30" name="item30" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item31" name="item31" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item32" name="item32" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item33" name="item33" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-four'>
                                                        <h2>SKID | BOX | CRATE</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item34" name="item34" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item35" name="item35" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item36" name="item36" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item37" name="item37" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item38" name="item38" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item39" name="item39" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item40" name="item40" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item41" name="item41" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item42" name="item42" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item43" name="item43" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item44" name="item44" />
                                                    </div>
                                                </div>
                                                <div className='form-column'>
                                                    <div className='form-row column-header header-five'>
                                                        <h2>QUANTITY</h2>
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item45" name="item45" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item46" name="item46" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item47" name="item47" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item48" name="item48" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item49" name="item49" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item50" name="item50" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item51" name="item51" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item52" name="item52" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item53" name="item53" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item54" name="item54" />
                                                    </div>
                                                    <div className='form-row column-body'>
                                                    <input type="text" className="item55" name="item55" />
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