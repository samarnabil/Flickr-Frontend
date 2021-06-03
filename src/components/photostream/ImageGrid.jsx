import React,{useState} from "react"
import CommentBox from "../Comments/CommentBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faPlusSquare,faComment,faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {PostUserFavs,DeleteUserFavs} from '../../services/userServices'


function ImageGrid(props){

    const fav = <FontAwesomeIcon icon={faStar} color="white"/>
    const addTo = <FontAwesomeIcon icon={faPlusSquare} color="white"/>
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>
    const open = <FontAwesomeIcon icon={faFolderOpen} color="white" />
    const navStyle={color:'white'};
    const [isUser, setIsUser] = useState(props.viewMode);
    const [isFav , setIsFav] = useState(props.favMode);
    // overlay
    const [isMousedOver, setMouseOver] = useState(false);
    //Comment Box
    const [isComment, setIsComment] = useState(false);

    function setItemRatio() {
        this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth)    
    }

    function waitForLoad(){
        this.addEventListener('load', setItemRatio)
    }

    function handleMouseOver() {
        setMouseOver(true);
    }
    
    function handleMouseOut() {
        setMouseOver(false);
    }

    function openCommentBox(){
        setIsComment(!isComment);
    }

    //add or remove from fav
    function addToFav(){
        console.log(props.id);
        //api
        const object={
            "photoUrl": "https://picsum.photos/200/200?random=2",
            "title": "added Fav",
            "descript": "description",
            "Fav": [],
            "privacy": "public",
            "tags": [],
            "ownerId": 0,
            "peopleTags": [],
            "comments": 78,
            "Favs": 60,
            "Username": "username",
            "Name": "Samar Nabil"
        }
        PostUserFavs(props.id,object).then( response => {
            console.log(response);
            if(response.status === 500){
                DeleteUserFavs(props.id).then( response => {
                    console.log(response);
                })
            }
        })
    }

    function deleteFav(){
        DeleteUserFavs(props.id).then( response => {
            console.log(response);
        })
    }

    return(
        <>
            <div className="item">
           <Link to={`/imagedetails/${props.id}/${props.ownerId}`}> <button className="open-photo">{open}</button></Link>
                <img 
                src={props.url} 
                onLoad={event => (
                    event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
                )}
                alt={props.title}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                />
                <div className="shadow-overlay" style={{display: isMousedOver || isComment?"block":"none"}}
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}>
                    <h1>{props.title}</h1>
                    <ul  className="tools">
                        <li><a href="#" id="para">by {props.ownerName}</a></li>
                        <div id="info">
                            <li>{addTo}</li>
                            <li  onClick={openCommentBox}> {comment} {props.numberOfComments}</li>
                            {isUser?
                                <>
                                {isFav? <li onClick={deleteFav}>{fav} {props.numberOfFavs}</li>:<li> {fav} {props.numberOfFavs}</li>}
                                </>
                            :
                                <> 
                                {isFav&&<li onClick={addToFav}>{fav} {props.numberOfFavs}</li>}
                                </>
                            }
                        </div>   
                    </ul>
                    {isComment && <CommentBox numberOfComments= {props.numberOfComments} photo_id={props.id} onClick={openCommentBox}/>}
                </div>
            </div> 
        </>
    )
}

export default ImageGrid;