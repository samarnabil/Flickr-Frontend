import React,{useState,useEffect} from "react"
import axios from "axios"
import ExploreGrid from "./Explore_grid"
import Explorenav from "./Explorenav"
import Exploresub_nav from "./Exploresub_nav"
import Exploreslideshow from "./Exploreslideshow"
import {getExplorePhotos} from "../../services/photoServices"
import configData from "../../config/development.json"
import GetUserPhotos from "../../services/userServices"
import Header from "../navbar/mainNav"
import { Link , Route, useParams } from 'react-router-dom'
const SERVER_URL = configData.SERVER_URL ;

export default function Pictures() {
  
      const [photos2, setPhotos] = useState([]);
      useEffect( () =>{
        
        getExplorePhotos().then( response => {

            setPhotos(response.data);
        })
      },[photos2])
      
    const [isModalOpen, setModalIsOpen] = useState(false);
 
    const navStyle={
      color:'white'
  };
    const [isPhoto, setPhoto] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
        console.log("l modal fata7")

    }
    let strId;
    let isPhotoSelected;
    function showPhoto(id){
        console.log("PhotoStream",id);
        isPhotoSelected=id;
        setPhoto(true);
        console.log("after click",isPhotoSelected);
        strId=isPhotoSelected.toString();
        console.log("sent id str",strId);
    }
    return (
      <>
      <Header isLogged={true}/>
      <div className="Explore-body">
      
      <Explorenav 
            onSlideshow={toggleModal}
           viewMode = {false}
        />
        <Exploresub_nav/>

      <div className="grid">
      {photos2.map(photo => (
          <ExploreGrid
          id = {photo._id}
          url ={photo.photoUrl} 
          title ={photo.title} 
          username={photo.ownerId.UserName}
          numberOfFavs = {photo.Fav.length}
         numberOfComments ={photo.comments.length}
         comments={photo.comments}
           onOpenRequest={showPhoto}
          />
      ))}
      <div className="placeholder"></div>
      </div>
      <main>
        {isModalOpen && <Exploreslideshow onRequestClose={toggleModal} />}
        </main>
      </div>
      </>
 ) 
 }
