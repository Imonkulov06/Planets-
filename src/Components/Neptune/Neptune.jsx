import React from "react";
import './Neptune.css'
import NeptuneImg from './images/neptune.png'
import NeptuneWIkipediaIcon from './images/wikipedia.png'

const Neptune = () => {
    return (
        <div>
            <div className="neptune">
                <div className="neptune-container">
                    <div className="neptune-main">
                        <div className="neptune-img">
                            <img src={NeptuneImg} />
                        </div>
                        <div className="neptune-info">
                            <h1 className="neptune-info-title">neptune</h1>
                            <p className="neptune-info-text">
                            Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.
                            </p>
                            <div className="neptune-source-wiki">
                                <p className="neptune-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>
                                <img src={NeptuneWIkipediaIcon} alt="" />
                            </div>
                            <div className="neptune-info-options">
                                <div className="neptune-info-option neptune-overview">
                                    <p className="neptune-info-optionNumber">
                                        1
                                    </p>
                                    <h1 className="neptune-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="neptune-info-option">
                                    <p className="neptune-info-optionNumber">
                                        2
                                    </p>
                                    <h1 className="neptune-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="neptune-info-option">
                                    <p className="neptune-info-optionNumber">
                                        3
                                    </p>
                                    <h1 className="neptune-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="neptune-stats">
                        <div className="neptune-stat">
                            <h1 className="neptune-stat-title">ROTATION TIME</h1>
                            <p className="neptune-stat-number">16.08 hours</p>
                        </div>
                        <div className="neptune-stat">
                            <h1 className="neptune-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="neptune-stat-number">164.79 years</p>
                        </div>
                        <div className="neptune-stat">
                            <h1 className="neptune-stat-title">RADIUS</h1>
                            <p className="neptune-stat-number">24,622 km</p>
                        </div>
                        <div className="neptune-stat">
                            <h1 className="neptune-stat-title">AVERAGE TEMP.</h1>
                            <p className="neptune-stat-number">-201°c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Neptune;
