import React from "react";
import './Earth.css'
import EarthImg from "./images/earth.png";
import EarthWikipediaIcon from "./images/wikipedia.png";

const Earth = () => {
    return (
        <div>
            <div className="earth">
                <div className="earth-container">
                    <div className="earth-main">
                        <div className="earth-img">
                            <img src={EarthImg} />
                        </div>
                        <div className="earth-info">
                            <h1 className="earth-info-title">earth</h1>
                            <p className="earth-info-text">
                            Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.
                            </p>
                            <div className="earth-source-wiki">
                                <p className="earth-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={EarthWikipediaIcon} alt="" />
                            </div>
                            <div className="earth-info-options">
                                <div className="earth-info-option earth-overview">
                                    <p className="earth-info-optionNumber">1</p>
                                    <h1 className="earth-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="earth-info-option">
                                    <p className="earth-info-optionNumber">2</p>
                                    <h1 className="earth-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="earth-info-option">
                                    <p className="earth-info-optionNumber">3</p>
                                    <h1 className="earth-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="earth-stats">
                        <div className="earth-stat">
                            <h1 className="earth-stat-title">ROTATION TIME</h1>
                            <p className="earth-stat-number">0.99 days</p>
                        </div>
                        <div className="earth-stat">
                            <h1 className="earth-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="earth-stat-number">365.26 DAYS</p>
                        </div>
                        <div className="earth-stat">
                            <h1 className="earth-stat-title">RADIUS</h1>
                            <p className="earth-stat-number">6,371 km</p>
                        </div>
                        <div className="earth-stat">
                            <h1 className="earth-stat-title">AVERAGE TEMP.</h1>
                            <p className="earth-stat-number">16°c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earth;
