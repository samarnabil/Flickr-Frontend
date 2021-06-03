import React from 'react'
import './footer.css'
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer(){
    const navStyle={
        color:'white'
    };
    return(
        <div className="footerMain">
            <div className="container">
            <div className="navbar navbarAdj">
                <ul className="rowAdj">
                <Link style={navStyle} to="/About">
                    <p>About</p>
                    </Link>
                    <Link style={navStyle} to="/">
                    <p>Home</p>
                    </Link>
                    <Link style={navStyle} to="/Jobs">
                    <p>Jobs</p>
                    </Link>
                    <Link style={navStyle} to="/Blog">
                    <p>Blog</p>
                    </Link>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Developers</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Guidelines</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Help</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Report Abuse</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Help form</a>
                </ul>
            </div>
            <div className="downFooter navbar  navbarAdj">
                <div className="rowAdj">
                    <p className="text-center">SmugMug+Flickr. Connecting people through photography.</p>
                    <div className="socialMedia">
                        <i className="flaticon-facebook"></i>
                        <i className="flaticon-twitter"></i>
                        <i className="flaticon-instagram"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}