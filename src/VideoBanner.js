import React from 'react';
import './VideoBanner.css';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info">
                <h1>End Wage Slavery</h1>
                <h4>
                    Millions of people use WageHunt to turn their ideas into reality.
                </h4>
                <button className="videoBanner__info--first">
                    Hire a Worker
                </button>
                <button className="videoBanner__info--second">
                    Earn Money
                </button>
            </div>

        </div>
    )
}

export default VideoBanner
