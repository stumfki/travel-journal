import React from "react";

export default function Card (props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.item.imageUrl}></img>
            </div>
            <div className="card-desc">
                <div className="location">
                <h2><img id="locationlogo" src="https://scontent.flju1-1.fna.fbcdn.net/v/t1.15752-9/277931025_651773659220160_2132864904869300230_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mAxXDSgmCFAAX_FyfDh&_nc_ht=scontent.flju1-1.fna&oh=03_AdRx1i71qEgkYNIiVhyn6Q2yBwcTqSMRgD4GHg_FLgmiBA&oe=638F1B3C"></img>{props.item.location}</h2><a target="blank" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1>{props.item.title}</h1>
                <p><span>{props.item.startDate}-{props.item.endDate}</span></p>
                <p>{props.item.description}</p>
            </div>
            
        </div>
    )
}