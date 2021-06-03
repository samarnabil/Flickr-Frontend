import React from "react"
import './Exploregrid.css'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


function Explorenav(props){

    const secondlayout = <FontAwesomeIcon icon={faSquare} color="DarkGrey" />
    const firstlayout =<FontAwesomeIcon icon={faThLarge} color="DarkGrey" />
    const share =<FontAwesomeIcon icon={faShare} color="DarkGrey"/>
    const navStyle={
        color:'white'
    };
  
    return(
        <>
        <div className="nav nav-tabs">
        <h3 className="explore-par" >Explore</h3>

            <li id="icon-space" className="first-icon" ><button title="Share externally">{share}</button><span className="share"> Share</span></li>
            
            <li id="icon-space"><Link  style={navStyle} to="/Explore"><button title="First layout">{firstlayout}</button></Link></li>
            <li id="icon-space"><button title="Second layout" onClick={ () =>{
                    props.onSlideshow();}}>{secondlayout}</button></li>
            
        </div>  
        </>
    );
}


export default Explorenav;