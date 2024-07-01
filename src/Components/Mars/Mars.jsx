import React from 'react'
import './Mars.css'
import MarsImg from "./images/mars.png";
import MarsWikipediaIcon from "./images/wikipedia.png";

const Mars = () => {
  return (
    <div>
      <div className="mars">
                <div className="mars-container">
                    <div className="mars-main">
                        <div className="mars-img">
                            <img src={MarsImg} />
                        </div>
                        <div className="mars-info">
                            <h1 className="mars-info-title">mars</h1>
                            <p className="mars-info-text">
                            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".                            </p>
                            <div className="mars-source-wiki">
                                <p className="mars-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={MarsWikipediaIcon} alt="" />
                            </div>
                            <div className="mars-info-options">
                                <div className="mars-info-option mars-overview">
                                    <p className="mars-info-optionNumber">1</p>
                                    <h1 className="mars-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="mars-info-option">
                                    <p className="mars-info-optionNumber">2</p>
                                    <h1 className="mars-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="mars-info-option">
                                    <p className="mars-info-optionNumber">3</p>
                                    <h1 className="mars-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mars-stats">
                        <div className="mars-stat">
                            <h1 className="mars-stat-title">ROTATION TIME</h1>
                            <p className="mars-stat-number">1.03 days</p>
                        </div>
                        <div className="mars-stat">
                            <h1 className="mars-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="mars-stat-number">1.88 years</p>
                        </div>
                        <div className="mars-stat">
                            <h1 className="mars-stat-title">RADIUS</h1>
                            <p className="mars-stat-number">3,389.5 km</p>
                        </div>
                        <div className="mars-stat">
                            <h1 className="mars-stat-title">AVERAGE TEMP.</h1>
                            <p className="mars-stat-number">-28°c</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Mars