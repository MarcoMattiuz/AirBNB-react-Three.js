import React from 'react';
import star from '../images/star.png';


function Card(props) {

    let text = ""
    if(props.openSpots === 0){
        text = "SOLD OUT"
    }else if(props.country === "ONLINE"){
        text = "ONLINE"
    }
    return (
        <div className='card'>
            {text != "" && <div className='sold'>{text}</div>}
            <img src={props.img} alt='experiance' className='card-image'></img>
            <div>
                <div className='stars'>
                    <img src={star} alt='star' className='star-image'></img>
                    <p>5.0<span className='grey'> ({props.reviewCount}) • {props.country} </span></p>
                </div>
                <p className='card-description'> {props.title}</p>
                <div className='pricing'>
                    <p><span className='bold'>From ${props.price}</span> / person</p>
                </div>
            </div>
        </div>
    )
}

export default Card