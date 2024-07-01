import React from "react";
import './Saturn.css'
import SaturnImg from './images/saturn.svg'
import SaturnWikipediaIcon from './images/wikipedia.png'

const Saturn = () => {
    return (
        <div>
            <div className="saturn">
                <div className="saturn-container">
                    <div className="saturn-main">
                        <div className="saturn-img">
                            <img src={SaturnImg} />
                        </div>
                        <div className="saturn-info">
                            <h1 className="saturn-info-title">saturn</h1>
                            <p className="saturn-info-text">
                            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.
                            </p>
                            <div className="saturn-source-wiki">
                                <p className="saturn-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={SaturnWikipediaIcon} alt="" />
                            </div>
                            <div className="saturn-info-options">
                                <div className="saturn-info-option saturn-overview">
                                    <p className="saturn-info-optionNumber">
                                        1
                                    </p>
                                    <h1 className="saturn-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="saturn-info-option">
                                    <p className="saturn-info-optionNumber">
                                        2
                                    </p>
                                    <h1 className="saturn-info-optionName">
                                        Internal Structure
                                    </h1>
                                </div>
                                <div className="saturn-info-option">
                                    <p className="saturn-info-optionNumber">
                                        3
                                    </p>
                                    <h1 className="saturn-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="saturn-stats">
                        <div className="saturn-stat">
                            <h1 className="saturn-stat-title">
                                ROTATION TIME
                            </h1>
                            <p className="saturn-stat-number">10.8 hours</p>
                        </div>
                        <div className="saturn-stat">
                            <h1 className="saturn-stat-title">
                                REVOLUTION TIME
                            </h1>
                            <p className="saturn-stat-number">29.46 years</p>
                        </div>
                        <div className="saturn-stat">
                            <h1 className="saturn-stat-title">RADIUS</h1>
                            <p className="saturn-stat-number">58,232 km</p>
                        </div>
                        <div className="saturn-stat">
                            <h1 className="saturn-stat-title">
                                AVERAGE TEMP.
                            </h1>
                            <p className="saturn-stat-number">-138°c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Saturn;
