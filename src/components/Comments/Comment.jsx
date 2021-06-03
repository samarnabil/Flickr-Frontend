import React from "react"

function Comment(props){
    return(
        <>
        <div className="users-comments">
            <a href="#">{props.Fname} {props.Lname}</a>
            <p>{props.body}</p>
        </div>
        </>
    )
}

export default Comment;