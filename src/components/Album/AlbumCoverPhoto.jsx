import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {UpdateAlbum} from '../../services/albumServices';

function AlbumCoverPhoto(props) {

const { coverPhoto, title, description , photos , album_id , ownerFname ,ownerLname, isUser } = props;
const pen =  <FontAwesomeIcon icon={faPen} color="white" size="1x" />;

const countPhotos=photos.length;

  //new titles and description
  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription , setInputDescription] = useState(description);
  const [isChanged, setIsChanged] = useState (false);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    setIsChanged(true);
    console.log(inputTitle);
  }

  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    setIsChanged(true);
    console.log(inputDescription);
    if(newDescription==="")
    {
        setInputDescription("Click here to enter a description for this album");
    }
  }
  const albumUpdated ={
    "title": inputTitle,
    "description":inputDescription,
  };

    function Update(){

      UpdateAlbum (album_id, albumUpdated).then( response => {
        console.log(response.status);
    })  
        setIsChanged(false);
    };


return (
    <>
   <div className="coverPhoto" style={{backgroundImage: `url(${coverPhoto})`}}>
       <div className="overlayAlbum">
                <div className="spaceAlbumHeader">
                    {isUser&&<div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                                <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3"  onChange={handleDescriptionChange}>{inputDescription}</textarea> 
                            </div>
                        </div>

                    </div>}
                    {!isUser&&<div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                                <input type="text" className="form-control"  value={inputTitle} disabled></input> 
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3"disabled >{inputDescription}</textarea> 
                            </div>
                        </div>

                    </div>}
                    {
                        isChanged&&<button className="doneEdit"onClick={Update}>Done</button> 
                    }  

               </div>
               <h5 className="countPhotos">
                {countPhotos}
               {' '}
                photos</h5>
            <h5 className="userName"> 
                <a class="userName" href="/#">
                        By:
                        {' '}
                        {ownerFname}
                        {' '}
                        {ownerLname}
                </a>
            </h5>
        </div>
   </div>
    </>
  );
}

export default AlbumCoverPhoto;