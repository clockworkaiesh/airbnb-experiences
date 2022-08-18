import React from "react"
import PhotoGrid from "../img/photo-grid.png"
export default function Hero(){
    return(
        <section className="hero-section">
            <img src={PhotoGrid} alt="photo grid" className="hero-image"/>

            <h1 className="hero-heading">Online Experiences</h1>
            <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}