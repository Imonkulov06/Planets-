import React from "react";
import './Mercury.css'
import { Link } from "react-router-dom";

const MercuryInfoOptions = () => {
    return (
        <div>
            <div className="mercury-info-options">
                <Link to='mercury' className="mercury-info-option overview">
                    <p className="mercury-info-optionNumber">1</p>
                    <h1 className="mercury-info-optionName">OVERVIEW</h1>
                </Link>
                <Link to='mercury-internal' className="mercury-info-option">
                    <p className="mercury-info-optionNumber">2</p>
                    <h1 className="mercury-info-optionName">
                        Internal Structure
                    </h1>
                </Link>
                <Link to='mercury-surface' className="mercury-info-option">
                    <p className="mercury-info-optionNumber">3</p>
                    <h1 className="mercury-info-optionName">Surface Geology</h1>
                </Link>
            </div>
        </div>
    );
};

export default MercuryInfoOptions;
