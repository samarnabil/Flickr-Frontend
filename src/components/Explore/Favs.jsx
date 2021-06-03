import React, { useState ,useEffect} from "react"
import ShowFavs from "./ShowFavs"
import './Commentstyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {GetComments,PostComments} from "../../services/photoServices"
import GetPeopleFavs from "../../services/peopleServices"
function Comments(props){
    const [photos2 , setComments ] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [placeholderText , setText] = useState("Add a comment about this photo");

    //get request
    useEffect( () =>{
        GetPeopleFavs().then( response => {
            setComments(response.data);
            console.log(props.comments);
        })
    },[photos2])

    function handleComment(event){
        const toComment = event.target.value;
        setNewComment(toComment);
    }

    return(
        <>
            <div className="fav-box">
                <div className="favs">
                {photos2.map(photos2 => photos2.Fav.map(photo => (
                    <ShowFavs
                        Fname = {photo.UserName}
                        Pic={photo.Avatar}
                    />
                )))}
                </div>
            
            </div>
        </>
    )

}

export default Comments;