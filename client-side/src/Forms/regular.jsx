import React, { useState, useEffect } from 'react';




export default function Regular() {

    const [iframeKey, setIframeKey] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = document.querySelector('.form-request').value;
        const name = document.querySelector('.form-name').value;

        console.log('Request Value:', request);
        console.log('Name Value:', name);
    
        const response = await fetch('http://localhost:133/functions/postFunction.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ request, name }),
        });

        setIframeKey(iframeKey + 1)

        // window.open("https://docs.google.com/spreadsheets/d/1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A/export?format=xlsx", "_blank")

        
    
        const data = await response.json();
        console.log(data);


    };


    return (
        <>
            <form className="form" id="sheetdb-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Requests" className="form-request" name="request" />
            <input type="text" placeholder="Name" id="name" className="form-name" />
            <input className="button" type="submit"/>
            </form>

        </>
        
    )
}