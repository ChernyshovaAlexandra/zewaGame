import React from 'react'
import zewa from "../../img/zewa.png";
import delo from "../../img/logoGame.png";


export const Nav = ({ logo }) => {
    return (
        <div className={`${logo ? '' : 'no-logo-left'} navigation-content`}>
            {logo && <div className="logotipy">
                <div className="logo-1"><img src={logo} alt="" /></div>
                <div className="logo-2"><img src={zewa} alt="" /></div>
            </div>}
            <div className="gameName"><img src={delo} alt="" /></div>
        </div>
    )
}