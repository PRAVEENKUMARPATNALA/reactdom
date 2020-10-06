import React from 'react';
import data from "../data.json";
import './Resume.css';
import prave from "./praveen.jpg";
import dhoni1 from './dhoni1.jpg';


function Resume(props) {
    let profile = data.details[props.location.personcard.id];
    let images = [prave,dhoni1];
    console.log(profile);
    return(
        <div className="Resume">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-12 container-fluid bg-secondary">
                <div className="child1 text-center">
                    <img src={images[props.location.personcard.id]} className="Resume-logo img-responsive"></img>
                    <h3>{profile.card.name}</h3>
                    <h4>{profile.card.mobile}</h4>
                    <h4>{profile.card.email}</h4>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8 col-12 container-fluid bg-info">
                <div className="child2 text-left">
                    <div className="container-fluid">
                        <h3>Career Objective:</h3>
                        <hr></hr>
                        <p>{profile.career}</p><br></br>
                        <h3>Education:</h3>
                    </div>
                    <table className="table table-stripped table-responsive">
                    <tr>
                        <th>Institute</th>
                        <th>Degree</th>
                        <th>Passoutyear</th>
                        <th>Percentage</th>
                    </tr>
                        {profile.educationalqualification.map((edu,k)=>(

                            <tr>
                                <td>{edu.instistue}</td>
                                <td>{edu.degree}</td>
                                <td>{edu.passoutyear}</td>
                                <td>{edu.percentage}</td>
                            </tr>
                        ))}
                    </table>
                    {profile.technicalskills.map((values,i)=>(
                            <div className="container-fluid">
                                <h3>{values.title}</h3>
                                <hr></hr>
                                {profile.technicalskills[i].info.map((infos,j)=>(
                                <li>{infos}</li>))}
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    );
}

export default Resume;