import React from "react";
import './Uranus.css'
import UranusImg from './images/uranus.png'
import UranusWikipediaIcon from './images/wikipedia.png'

const Uranus = () => {
    return (
        <div>
            <div className="uranus">
                <div className="uranus-container">
                    <div className="uranus-main">
                        <div className="uranus-img">
                            <img src={UranusImg} />
                        </div>
                        <div className="uranus-info">
                            <h1 className="uranus-info-title">uranus</h1>
                            <p className="uranus-info-text">
                            Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
                            </p>
                            <div className="uranus-source-wiki">
                                <p className="uranus-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>
                                <img src={UranusWikipediaIcon} alt="" />
                            </div>
                            <div className="uranus-info-options">
                                <div className="uranus-info-option uranus-overview">
                                    <p className="uranus-info-optionNumber">
                                        1
                                    </p>
                                    <h1 className="uranus-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="uranus-info-option">
                                    <p className="uranus-info-optionNumber">
                                        2
                                    </p>
                                    <h1 className="uranus-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="uranus-info-option">
                                    <p className="uranus-info-optionNumber">
                                        3
                                    </p>
                                    <h1 className="uranus-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uranus-stats">
                        <div className="uranus-stat">
                            <h1 className="uranus-stat-title">ROTATION TIME</h1>
                            <p className="uranus-stat-number">17.2 hours</p>
                        </div>
                        <div className="uranus-stat">
                            <h1 className="uranus-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="uranus-stat-number">84 years</p>
                        </div>
                        <div className="uranus-stat">
                            <h1 className="uranus-stat-title">RADIUS</h1>
                            <p className="uranus-stat-number">25,362 km</p>
                        </div>
                        <div className="uranus-stat">
                            <h1 className="uranus-stat-title">AVERAGE TEMP.</h1>
                            <p className="uranus-stat-number">-195°c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uranus;
