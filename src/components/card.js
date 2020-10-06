import React from 'react';
import data from '../data.json';
import prave from './praveen.jpg';
import dhoni1 from './dhoni1.jpg';
import {Link} from 'react-router-dom';
import './Resume.css'

let Cards=()=>{
    let cardsData = data.details;
    console.log(cardsData);
    let images = [prave,dhoni1];
    return(
        <div>
            {/* <h1 className="text-info">Profiles</h1> */}
            <div className="row">
            {cardsData.map((values,index)=>(
                <div className="col-sm-10 col-md-6 col-lg-5" key={index}>
                    <div className="card container">
                        <img src={images[index]} className="Resume-logo"></img>
                        <h3>
                            {values.card.name}
                        </h3>
                        <a href={"mailto:"+values.card.email}>
                            <h4>{values.card.email}</h4>
                        </a>
                        <h3>
                            {values.card.mobile}
                        </h3>
                        <h3>
                            {values.card.description}
                        </h3>
                        <Link to={{pathname:"/Resume",personcard:{id:index}}} className="btn btn-primary">click me</Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

    

export default Cards;