import React from 'react';

const NavBar = () => {

    let scroll = (e) =>{
        console.log(e.target.innerText.toLowerCase())
        let services = document.querySelector(`.${e.target.innerText.toLowerCase()}`)
        services.scrollIntoView()
    }

    return(
        <>
            <div className="navbar">
                <a className="nav-link">HOME</a> 
                <a className="nav-link">ABOUT US</a> 
                <a className="nav-link" value={"services"} onClick={(e) => scroll(e)}>SERVICES</a> 
                <a className="nav-link">GALLERY</a> 
                <a className="nav-link">BLOG</a> 
                <a className="nav-link">BOOK APPOINTMENT</a> 
            </div>
        </>

    )
}

export default NavBar;