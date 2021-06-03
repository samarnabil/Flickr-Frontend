import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faSearch,faTv,faShare} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


function NavBar(props){

    const pen = <FontAwesomeIcon icon={faPen} color="DarkGrey"/>
    const search = <FontAwesomeIcon icon={faSearch} color="DarkGrey"/>
    const tv =<FontAwesomeIcon icon={faTv} color="DarkGrey"/>
    const share =<FontAwesomeIcon icon={faShare} color="DarkGrey"/>
    const navStyle={
        color:'white'
    };

    return(
        <>
        <ul className="nav nav-tabs">
        { props.viewMode &&
            <li className="nav-item dropdown mr-auto" >
                <a className="dropdown-toggle text-secondary"  data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Public view<span className="caret"></span></a>
                <ul className="dropdown-menu">
                <li id="li"><a className="text-secondary"  href="#">Public view</a></li>
                <li id="li"><a className="text-secondary"  href="#">Friend view</a></li>
                <li id="li"><a className="text-secondary"  href="#">View all</a></li>
                </ul>
            </li>}
            { props.viewMode? 
            <>
            <li className="ml-auto"  id="icon-space"><Link  style={navStyle} to="/EditInfo"><button title="Edit photo info">{pen}</button></Link></li>
            <li id="icon-space"><button title="Search photostream">{search}</button></li>
            <li id="icon-space"><button title="Toggle slideshow" >{tv}</button></li>
            <li id="icon-space"><button title="Share photostream">{share}</button></li> </> 
            :
            <>
            <li className="ml-auto" id="icon-space"><button title="Search photostream">{search}</button></li>
            <li id="icon-space"><button title="Toggle slideshow">{tv}</button></li>
            <li id="icon-space"><button title="Share photostream">{share}</button></li>
            </>
            }
        </ul>  
        </>
    );
}


export default NavBar;