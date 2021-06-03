import React,{useEffect, useState} from "react"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faLock,faEye,faStar,faComment,faUnlock} from '@fortawesome/free-solid-svg-icons'
import {PutPhoto} from "../../services/photoServices"


function Card(props){

    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey"/>
    const unlock = <FontAwesomeIcon icon={faUnlock} color="DarkGrey"/>
    const fav = <FontAwesomeIcon icon={faStar} color="DarkGrey"/>
    const comment = <FontAwesomeIcon icon={faComment} color="DarkGrey"/>

    const [isEditable,setEdit] = useState(false);
    const [inputTitle, setInputTitle] = useState(props.title);
    const [inputDescription , setInputDescription] = useState(props.description);
    const [privacy , setPrivacy] = useState(props.privacy);
    const [isPublic , setIsPublic] = useState (false);


    function handleTitleChange(event) {
        const newTitle = event.target.value;
        setInputTitle(newTitle);
    }

    function handleDescriptionChange(event) {
        const newDescription  = event.target.value;
        setInputDescription(newDescription);
    }

    function changeToPublic(){
        setPrivacy('public');
        console.log(privacy);
        const object ={
            "photoUrl": props.url,
            "ownerId": props.ownerId,
            "num_favs": props.numberOfFavs,
            "comments": [0,1,2,3],
            "title": inputTitle,
            "privacy": privacy,
            "description": inputDescription,
            "createdAt": "2021-05-29",
            "UpdatedAt": "2021-05-29"
        }
        //API
        PutPhoto(props.id,object).then( response => {
            console.log(response);
        });
    }

    function changeToPrivate(){
        setPrivacy('private');
      const object ={
          "photoUrl": props.url,
          "ownerId": props.ownerId,
          "num_favs": props.numberOfFavs,
          "comments": [0,1,2,3],
          "title": inputTitle,
          "privacy": privacy,
          "description": inputDescription,
          "createdAt": "2021-05-29",
          "UpdatedAt": "2021-05-29"
      }
      //API
      PutPhoto(props.id,object).then( response => {
          console.log(response);
      });
    }

    function changeLayout(){ 
        setEdit(!isEditable);
    }


    function confirmEdit(){
        const object =       {
            "photoUrl": props.url,
            "ownerId": props.ownerId,
            "num_favs": props.numberOfFavs,
            "comments": [0,1,2,3],
            "title": inputTitle,
            "privacy": privacy,
            "description": inputDescription,
            "createdAt": "2021-05-29",
            "UpdatedAt": "2021-05-29"
        }
        //API
        PutPhoto(props.id,object).then( response => {
            console.log(response);
        });
        changeLayout();
    }


    return(
        <>
        
        <div className="card">
            <img src={props.url} alt=""  />
            <button className="button"
                onClick={ () =>{
                    props.onDelete(props.id);}}
            >{remove}</button>
            {!isEditable? 
            <>
                <div className="interaction-bar" onClick={changeLayout}>
                    <div className="title-bar">
                    <h1>{props.title}</h1> 
                    <p>{props.description}</p>
                    </div>
                </div> 
                
                <ul  className="tools">
                    <li className="dropdown">
                            <button className="bttn bttn-secondary dropdown-toggle" type="button" id="dropdownMenuButton privacy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {isPublic? unlock :lock}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li onClick={changeToPublic}><a className="dropdown-item" href="#">Public</a></li>
                                <li onClick={changeToPrivate}><a className="dropdown-item" href="#">Private</a></li>
                            </ul>
                    </li>
                    <div id="info">
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                    </div>
                </ul>
            </>
                
            :
            <>
            <div className="new-interaction-bar">
                    <div id="input-format">
                        <div className="form-group" >
                            <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" rows="3"  onChange={handleDescriptionChange} value={inputDescription}></textarea> 
                        </div>
                    </div>
                    <button onClick={confirmEdit}>Done</button>
            </div>

            </>
            }


        </div>

    </>
    )
}

export default Card;