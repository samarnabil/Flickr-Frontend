import React, { useState ,useEffect} from "react"
import Comment from "./Comment"
import './CommentBox.css'
import {GetComments,PostComments} from "../../services/photoServices"

function CommentBox(props){
    const [comments , setComments ] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [placeholderText , setText] = useState("Add a comment about this photo");

    //get request
    useEffect( () =>{
        GetComments().then( response => {
            setComments(response.data);
        })
    },[comments])

    function handleComment(event){
        const toComment = event.target.value;
        setNewComment(toComment);
    }

    function postComment(){
        setText("Add a comment about this photo");
        console.log(props.photo_id)
        const object ={
            comment: newComment,
            user: {
              "Fname": "John",
              "Lname": "Smith",
              "id":"100"
            },
            createdAt: "2020-5-23",
            updatedAt: "2021-4-2"
        }
        //API
        PostComments(props.photo_id,object).then( response => {
            console.log(response);
        });
        document.getElementById('com').value = '';
    }

    return(
        <>
            <div className="comment-box">
                <div className="comments">
                {comments.map(comment => (
                    <Comment
                        Fname = {comment.user.Fname}
                        Lname = {comment.user.Lname}
                        body = {comment.comment}
                    />
                ))}
                </div><hr/>
                <div className="mycomment">
                    <textarea id="com" className="form-control" rows="2" placeholder={placeholderText} onChange={handleComment}/>
                    <button onClick={postComment}>Add comment</button>
                </div>
            </div>
        </>
    )

}

export default CommentBox;