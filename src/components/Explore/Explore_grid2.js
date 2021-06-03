import React,{useState} from "react"
import './Exploregrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

function Explore_Grid2(props){

    
    const fav = <FontAwesomeIcon icon={faStar} color="white"/>
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>
    const addTo = <FontAwesomeIcon icon={faPlusSquare} color="white"/>

    function setItemRatio() {
        this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth);
        
    }

    function waitForLoad(){
        this.addEventListener('load', setItemRatio)
    }

    // overlay
    const [isMousedOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        console.log(props.ownerName)
        setMouseOver(true);
      }
    
    function handleMouseOut() {
        setMouseOver(false);
    }

    console.log(props.title)


    return(
        <>
            
            <div className="item ">
            <img 
            src={props.url} 
            onLoad={event => (
                event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
            )}
            alt={props.title}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            />
            {isMousedOver &&
            <> 
                <div className="shadow-overlay">
                    <h1>{props.title}</h1>
                    <ul  className="tools">
                    <li><a href="#" id="para">by {props.ownerName}</a></li>
                    <div id="info">
                        <li>{addTo}</li>
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                    </div>
                    </ul>

                </div>
            </>}
            </div>

        </>

    )
}

export default Explore_Grid2;