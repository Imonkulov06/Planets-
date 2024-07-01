import React from 'react'
import './Venus.css'
import VenusImg from './images/venus.png'
import VenusWikipediaIcon from './images/wikipedia.png'

const Venus = () => {
  return (
    <div>
      <div className="venus">
                <div className="venus-container">
                    <div className="venus-main">
                        <div className="venus-img">
                            <img src={VenusImg} />
                        </div>
                        <div className="venus-info">
                            <h1 className="venus-info-title">venus</h1>
                            <p className="venus-info-text">
                            Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.
                            </p>
                            <div className="venus-source-wiki">
                                <p className="venus-info-source">
                                    Source : <span> Wikipedia</span>
                                </p>{" "}
                                <img src={VenusWikipediaIcon} alt="" />
                            </div>
                            <div className="venus-info-options">
                                <div className="venus-info-option overview">
                                    <p className="venus-info-optionNumber">
                                        1
                                    </p>
                                    <h1 className="venus-info-optionName">
                                        OVERVIEW
                                    </h1>
                                </div>
                                <div className="venus-info-option">
                                    <p className="venus-info-optionNumber">
                                        2
                                    </p>
                                    <h1 className="venus-info-optionName">
                                    Internal Structure
                                    </h1>
                                </div>
                                <div className="venus-info-option">
                                    <p className="venus-info-optionNumber">
                                        3
                                    </p>
                                    <h1 className="venus-info-optionName">
                                        Surface Geology
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="venus-stats">
                        <div className="venus-stat">
                            <h1 className="venus-stat-title">ROTATION TIME</h1>
                            <p className="venus-stat-number">243 days</p>
                        </div>
                        <div className="venus-stat">
                        <h1 className="venus-stat-title">REVOLUTION TIME</h1>
                            <p className="venus-stat-number">224.7 DAYS</p>
                        </div>
                        <div className="venus-stat">
                        <h1 className="venus-stat-title">RADIUS</h1>
                            <p className="venus-stat-number">6,051.8 km</p>
                        </div>
                        <div className="venus-stat">
                        <h1 className="venus-stat-title">AVERAGE TEMP.</h1>
                            <p className="venus-stat-number">471°c</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Venus