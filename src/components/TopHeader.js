import React from 'react';
import logo from '../logo.svg';

const TopHeader = () => {
    return(
        <>
            <div className="top-header">
                <span> tel: 1-786-856-2018</span>
                <span> email: snjmedspa@gmail.com</span>
                <span> hours: Mon-Sat: 8am- 10pm</span>

                <img src={logo} height="50px" width="50px"/>
                <img src={logo} height="50px" width="50px"/>
                <img src={logo} height="50px" width="50px"/>
                <span> | </span>
                <img src={logo} height="50px" width="50px"/>

            </div>
        </>

    )
}

export default TopHeader