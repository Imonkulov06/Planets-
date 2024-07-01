import React from 'react'
import './Jupiter.css'
import JupiterImg from "./images/jupiter.png";
import JupiterWikipediaIcon from "./images/wikipedia.png";

const Jupiter = () => {
  return (
    <div>
      <div className="jupiter">
                <div className="jupiter-container">
                    <div className="jupiter-main">
                        <div className="jupiter-img">
                            <img src={JupiterImg} />
                        </div>
                        <div className="jupiter-info">
                            <h1 className="jupiter-info-title">jupiter</h1>
                            <p className="jupiter-info-text">
                            Jupiter is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, jupiter carries the name of the Roman god of war and is often referred to as the "Red Planet".                            </p>
                            <div className="jupiter-source-wiki">
                                <p className="jupiter-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={JupiterWikipediaIcon} alt="" />
                            </div>
                            <div className="jupiter-info-options">
                                <div className="jupiter-info-option jupiter-overview">
                                    <p className="jupiter-info-optionNumber">1</p>
                                    <h1 className="jupiter-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="jupiter-info-option">
                                    <p className="jupiter-info-optionNumber">2</p>
                                    <h1 className="jupiter-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="jupiter-info-option">
                                    <p className="jupiter-info-optionNumber">3</p>
                                    <h1 className="jupiter-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jupiter-stats">
                        <div className="jupiter-stat">
                            <h1 className="jupiter-stat-title">ROTATION TIME</h1>
                            <p className="jupiter-stat-number">9.93 hours</p>
                        </div>
                        <div className="jupiter-stat">
                            <h1 className="jupiter-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="jupiter-stat-number">11.86 years</p>
                        </div>
                        <div className="jupiter-stat">
                            <h1 className="jupiter-stat-title">RADIUS</h1>
                            <p className="jupiter-stat-number">69,911 km</p>
                        </div>
                        <div className="jupiter-stat">
                            <h1 className="jupiter-stat-title">AVERAGE TEMP.</h1>
                            <p className="jupiter-stat-number">-108°c</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Jupiter