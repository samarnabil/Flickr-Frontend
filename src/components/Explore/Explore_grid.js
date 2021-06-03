import React,{useState} from "react"
import './Exploregrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import Comments from "./Comments"
import Favs from "./Favs"

function Explore_Grid(props){

    
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
//Comment Box
const [isComment, setIsComment] = useState(false);
const [isfav, setIsFav] = useState(false);

function openFavBox(){
    setIsFav(!isfav);
}
function openCommentBox(){
    setIsComment(!isComment);
}
function addToFav(){
    console.log(props.id);
    //api
}


    return(
        <>
            
            <div className="item " >
            <img 
            src={props.url} 
            onLoad={event => (
                event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
            )}
            alt={props.title}
            onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                
                />
                <div className="shadow-overlay" style={{display: isMousedOver || isComment || isfav?"block":"none"}}
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}>
                    <h1>{props.title}</h1>
                    <ul  className="tools">
                        <li><a href="#" id="para">by {props.username}</a></li>
                        <div id="info">
                            <li>{addTo}</li>
                            <li  onClick={openCommentBox}> {comment} {props.numberOfComments}</li>
                            <li onClick={openFavBox} > {fav} {props.numberOfFavs}</li> 
                           
                    </div> 
                  
                    </ul>
                    {isComment && <Comments numberOfComments= {props.numberOfComments} onClick={openCommentBox}/>}
                        {isfav && <Favs numberOfFavs= {props.numberOfFavs}  onClick={openFavBox}/>} 
                </div>
            </div> 

        </>

    )
}

export default Explore_Grid;