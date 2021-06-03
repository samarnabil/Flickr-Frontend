import React, { useState ,useEffect} from "react"
import Showcomments from "./Showcomments"
import './Commentstyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {GetComments,PostComments} from "../../services/photoServices"
import defaultProfile from '../../img/deefault.jpg';
import axios from "axios"
function Comments(props){
    const [photos2 , setComments ] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [placeholderText , setText] = useState("Add a comment about this photo");

    //get request
    useEffect( () =>{
       
        GetComments().then( response => {
            setComments(response.data);
            console.log(props.comments);
        })
    },[photos2])

    function handleComment(event){
        const toComment = event.target.value;
        setNewComment(toComment);
    }

    function PostExploreComment(){
        setText("Add a comment about this photo");
        console.log(props.photo_id)
        const object ={
            comment: newComment,
            id: "0",
            user: {
                  "Fname": "John",
                  "Lname": "Smith",
                  "id": "100"
                },
                createdAt: "2020-5-23",
                updatedAt: "2021-4-2"
        
    
    }
                    
          
        //API
        PostComments(props._id,object).then( response => {
            console.log(response);
        });
        document.getElementById('com').value = '';
    }

    return(
        <>
            <div className="comment-box-explore">
                <div className="comments-explore">
                {photos2.map(photo => (
                    <Showcomments
                    
                        Fname = {photo.user.Fname+photo.user.Lname}
                        Pic={defaultProfile}
                     
                        body = {photo.comment}
                        
                    />
                ))}
               
                </div><hr/>
                <div className="mycomment">
                <div class="commentPic">
    
                <span><img   alt = "Avatar" src={defaultProfile}/></span>
	
	            </div>
                <div className="textArea"><span><textarea id="com" className="form-control" rows="2" placeholder={placeholderText} onChange={handleComment}/></span></div>
                
                    <button onClick={PostExploreComment}>Add comment</button>
                    
                </div>
            </div>
        </>
    )

}

export default Comments;