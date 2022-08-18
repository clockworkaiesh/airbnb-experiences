import React from "react"
import Star from "../img/star.png" 

export default function Card(props){

    let status
    if(status === 0){
        status = "sold out"
    }
    else if(props.location === "Online"){
        status = "Online"
    }

    return(
        <section className="cards">
            <div className="card">
               {status && <span className="spots">{status}</span>}
                <img src={props.coverImg} className="card-image"/>
                <div className="rating-info">
                    <img src={Star} />
                    <span className="rating">{props.stats.rating}</span>
                    <span className="rating-count">({props.stats.reviewCount})</span>
                    <span className="country">{props.location}</span>
                </div>
                <p className="excerpt">{props.title}</p>
                <h4 className="price"><strong>From ${props.price}</strong> / person</h4>
            </div>
        </section>
    )
}