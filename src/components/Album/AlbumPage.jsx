import React, { useState , useEffect } from 'react';
import axios from "axios"
import ImageGrid from "../photostream/ImageGrid"
import '../photostream/ImageGrid.css'
import './AlbumPage.css'
import './AlbumCoverPhoto'
import './AlbumCoverPhoto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AlbumCoverPhoto from './AlbumCoverPhoto';
import Header from '../navbar/mainNav'
import {GetAlbumById} from '../../services/albumServices'
import { Link } from 'react-router-dom';

function AlbumPage(props) {


    const path = props.location.pathname;
    var index = path.split('/');
    const album_id= index[2];
    const isUser = index[3];
    const [album,setAlbum] =useState();
    const [isUndefined, setUndefined] = useState(true);

  //This function is called whenever this album page is opened
  //It gets the details of the selected album and set the const album with these details 

   //get request
   useEffect( () =>{
    //get user photos
    GetAlbumById(album_id).then( response => {
        setAlbum(response.data);
        console.log(album);
        //validate  API response
        console.log(isUndefined);
        if(album == undefined)
        {
          setUndefined(true);   
        }
        else{
          setUndefined(false);
        }
    }) 
 },[album])


 let isPhotoSelected;
 function showPhoto(id){
     console.log("PhotoStream",id);
     isPhotoSelected=id;
     console.log("after click",isPhotoSelected);  
 }


 const navStyle={color:'black'};
  const back = <FontAwesomeIcon icon={faArrowLeft} color="black"/>

  return (
      <>
      <Header isLogged={true}/>
      <div className="AlbumPage-body">

      <Link to='/user' style={navStyle} >
        <a href="#" id="backAlbum">{back } Back to albums list</a>
        </Link>

      {/* { album.map(album=>  */}
      {/* to validate API response */}
       { !isUndefined && <AlbumCoverPhoto 
        coverPhoto = {album.coverPhoto.photoUrl}
        title = {album.title}
        description = {album.description}
        photos = {album.photos}
        ownerFname ={album.ownerId.Fname}
        ownerLname ={album.ownerId.Lname}
        album_id = {album_id}
        isUser={isUser}
        />
       }
        {/* )} */}
        
         {/* to validate API response */}
       { !isUndefined &&<div className="grid" id="album">
        {/* {album.map(album =>  */}
        { album.photos.map(photo => (
            <ImageGrid
            id = {photo.id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = {photo.description}
            date = {photo.createdAt}
            privacy = {photo.privacy}
            ownerName = {album.ownerId.Fname}
            ownerId = {photo.ownerId._id}
            numberOfFavs = {photo.Fav.length}
            numberOfComments ={photo.comments.length}
            viewMode = {false}
            favMode = {true}
             onOpenRequest={showPhoto}
            />

        )
        )}
        <div className="placeholder"></div>
        </div>}
        </div>

      </>
    );
}

export default AlbumPage;