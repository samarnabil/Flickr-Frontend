import React, { useState, useEffect } from 'react'
import '../../fonts/font/flaticon.css'
import './Upload.css'
import flickrPhoto from '../../img/flickr.jpg'
import {PostPhoto} from '../../services/photoServices'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
const endpoint = 'http://localhost:3001/'

export default function Upload(props){

    

    const navStyle={
        color:'black'
    };

    //////////////////////////post now////////////////////////////////////////////////

    const [image, setImage] = useState("");
    const onchange = e => setImage(URL.createObjectURL(e.target.files[0]));

    const [tag, setTag] = useState();
    const addtag = e => setTag(e.target.value);
    console.log(tag);

    const plus = <FontAwesomeIcon icon={faPlusCircle} color="DarkGrey" />;

    const addImageToCameraroll = async () => {
        console.log("yalahwaaaiii");
        console.log(image);
        const newImage = {
            photoUrl:image,
            ownerId: 0,
            Fav: [
                0
            ],
            comments: [
                0
            ],
            title: 1235,
            privacy: "private",
            description: "cats",
            tags: [
            ],
            peopleTags: [
                {
                tagging: "string",
                tagged: [
                ]
                }
            ],
            createdAt: "2021-05-30",
            UpdatedAt: "2021-05-30"
        };
        console.log("status1");
        PostPhoto(newImage).then(response=>{
            console.log(response.data);
        })
    };

    return(
        <div className="uploadNavbar">
            <nav className="navbar fix_nav">
            <div className="container-fluid">
            <div className="logoPlusNav">
            <Link className="uploadLink" style={navStyle} to="/user">
                <a className="flickLogoName" href="#top">
                    <img src={flickrPhoto} alt="flickrLogo"></img>
                </a>
            </Link>
            <Link  style={navStyle} to="/">
                <span>Your Photostream</span>
            </Link>
            {image && <Link style={navStyle} to="/user"><button className="postPhoto" onClick={addImageToCameraroll}>{plus}Add</button></Link>}
            </div>
            </div>
            </nav>
            <div className="uploadText">
                {!image && <div><h3>You can upload 1000 more photos and videos</h3>
                <p>Drag & drop photos here</p>
                <p>or</p></div>}
                <div>
                <p><input type="file"  accept="image/*" name="image" id="file"  onChange={onchange} /></p>
                <p><label for="file" >Upload Image</label></p>
                <p><img id="output" width="200" /></p>
                {image && <img src={image} alt="The current file" id="selectedImg" />}
                {image && <form>
                    <label for="tag">Add tag:</label><br/>
                    <input type="text" id="tag" name="text" onChange={addtag}/><br/>
                </form>}
                </div>
            </div>
        </div>
    );
    
}