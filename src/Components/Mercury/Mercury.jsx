import React from "react";
import "./Mercury.css";
import MercuryImg from "./images/mercury.png";
import MercuryWikipediaIcon from "./images/wikipedia.png";

const Mercury = () => {
    return (
        <div>
            <div className="mercury">
                <div className="mercury-container">
                    <div className="mercury-main">
                        <div className="mercury-img">
                            <img src={MercuryImg} />
                        </div>
                        <div className="mercury-info">
                            <h1 className="mercury-info-title">MERCURY</h1>
                            <p className="mercury-info-text">
                                Mercury is the smallest planet in the Solar
                                System and the closest to the Sun. Its orbit
                                around the Sun takes 87.97 Earth days, the
                                shortest of all the Sun's planets. Mercury is
                                one of four terrestrial planets in the Solar
                                System, and is a rocky body like Earth.
                            </p>
                            <div className="mercury-source-wiki">
                                <p className="mercury-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={MercuryWikipediaIcon} alt="" />
                            </div>
                            <div className="mercury-info-options">
                                <div className="mercury-info-option overview">
                                    <p className="mercury-info-optionNumber">
                                        1
                                    </p>
                                    <h1 className="mercury-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="mercury-info-option">
                                    <p className="mercury-info-optionNumber">
                                        2
                                    </p>
                                    <h1 className="mercury-info-optionName">
                                    Internal Structure
                                    </h1>
                                </div>
                                <div className="mercury-info-option">
                                    <p className="mercury-info-optionNumber">
                                        3
                                    </p>
                                    <h1 className="mercury-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mercury-stats">
                        <div className="mercury-stat">
                            <h1 className="mercury-stat-title">ROTATION TIME</h1>
                            <p className="mercury-stat-number">58.6 days</p>
                        </div>
                        <div className="mercury-stat">
                        <h1 className="mercury-stat-title">REVOLUTION TIME</h1>
                            <p className="mercury-stat-number">87.97 DAYS</p>
                        </div>
                        <div className="mercury-stat">
                        <h1 className="mercury-stat-title">RADIUS</h1>
                            <p className="mercury-stat-number">2,439.7 km</p>
                        </div>
                        <div className="mercury-stat">
                        <h1 className="mercury-stat-title">AVERAGE TEMP.</h1>
                            <p className="mercury-stat-number">430°c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mercury;
