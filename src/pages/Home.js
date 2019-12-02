import React from 'react'
import Logo from "../components/Logo.js"
import "../styles/Style.css"

function Home() {
    return(
        <div>
            <Logo/>
            <div className="home-box">
                <p className="home-text">58% of all food produced in Canada, which is 35.5 million tonnes, is lost or wasted. A third of that could be saved and sent to sent communities in need.</p>    
            </div>
        </div>
    )
}

export default Home