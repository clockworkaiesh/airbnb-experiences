import React from "react"
import Star from "../img/star.png" 

export default function Card(props){
    return(
        <section className="cards">
            <div className="card">
                <img src={props.img} className="card-image"/>
                <div className="rating-info">
                    <img src={Star} />
                    <span className="rating">{props.rating}</span>
                    <span className="rating-count">({props.count})</span>
                    <span className="country">{props.country}</span>
                </div>
                {/* <p className="excerpt">{props.title}</p> */}
                <h4 className="price"><strong>From ${props.price}</strong> / person</h4>
            </div>
        </section>
    )
}