import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function Regular() {

    const [iframeKey, setIframeKey] = useState(0)

    const fetchData = async () => {
        const results = await axios.get('/.netlify/functions/postFunction')
        console.log("results.data.message")
    }
    
    const postData = async (e) => {
        e.preventDefault()

        try {
        const response = await axios.post('/.netlify/functions/postFunction',{
            request: document.querySelector(".form-request").value,
            name: document.querySelector(".form-name").value
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

        </>
        
    )
}