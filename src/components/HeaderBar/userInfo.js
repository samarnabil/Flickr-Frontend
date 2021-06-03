import React,{useState,useEffect} from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import defaultProfile from '../../img/deefault.jpg';
import Header from '../navbar/mainNav'
import Photostream from '../photostream/Photostream'
import CameraRoll from '../CameraRoll/CamreRoll'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link , Route, useParams } from 'react-router-dom'
import GetPeoplePhotos,{GetPeopleByIdentefier} from "../../services/peopleServices"
import Faves from '../Faves/Faves';
import AlbumPreview from '../Album/AlbumPreview'
import {GetUser,GetUserPhotos,UpdateUser,checkUserByIdentifier} from "../../services/userServices"
import GroupPhotos from "../GroupPhotos/GroupPhotos"


export default function Userinfo(props){

    const path = props.location.pathname;
    const index = path.split('/');
    const id = index[2];

    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);
    const [userId , setUserId] = useState(0)
    const [userInfo, setUserInfo] = useState([]);
    const [isUser , setIsUser] = useState(true);
    const [userName , setUserName] = useState('');

    //get request
    useEffect( () =>{
        //get user
        GetUser().then( response => {
            setUserInfo(response.data);
        })
        //get user photos
        GetUserPhotos().then( response => {
            setUserPhotos(response.data);
        })
        //get people photos by userId
        GetPeoplePhotos(userId).then( response => {
            setPeoplePhotos(response.data);
        })
    },[])
    // },[userInfo,userPhotos])


    const [isPhotoStream,setPhotoStream] = useState(true);
    const [isCameraRoll,setCameraRoll] = useState(false);
    const [isAbout,setAbout] = useState(false);
    const [isFaves,setFaves] = useState(false);
    const [isAlbums,setAlbums] = useState(false);
    const [isGallery,setGallery] = useState(false);
    const [isGroup,setGroup] = useState(false);
    const [isStats,setStats] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState([]);
    const [avatarBackground, setAvatarBackground] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    //Initially not following the other user
    const [isFollowing,setFollowing]=useState(false);
    const plusIcon = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;


    function changeSelection(newimageUrl) {
        setSelectedPhoto(newimageUrl);
        console.log("ana fe el changeSelection");
        if(avatarBackground===1){
            const newUserInfo={
                Fname: "ay7aga",
                Lname: "ay7aga",
                Following: 150,
                Followers: 100,
                views: 70,
                Date_joined: "2021-05-30",
                Email: "emal@gmail",
                Photo: 0,
                UserName: "FaraMostafa",
                Avatar: "https://picsum.photos/500/300?random=1",
                BackGround: newimageUrl,
                About: {
                Description: "string",
                Hometown: "string",
                Occupation: "string",
                CurrentCity: "string"
                }
            }
            UpdateUser(newUserInfo).then(response=>{
                console.log("response.data",response.data);
                GetUser();
            })
        }
        else{
            const newUserInfo={
                Fname: "string",
                Lname: "string",
                Following: 150,
                Followers: 100,
                views: 70,
                Date_joined: "2021-05-30",
                Email: "emal@gmail",
                Photo: 0,
                UserName: "FaraMostafa",
                Avatar: newimageUrl,
                BackGround: "https://picsum.photos/500/300?random=1",
                About: {
                Description: "string",
                Hometown: "string",
                Occupation: "string",
                CurrentCity: "string"
                }
            }
            UpdateUser(newUserInfo).then(response=>{
                console.log(response.data);
                GetUser();
            })
        }
    }

    function closeEdit(){
        setModalOpen(false);

    }
    function showEdit(num){
        setModalOpen(true);
        setAvatarBackground(num);

    }

    function postFollowRequest() {
        // const response = await axios.post( endpoint+'user',props);
        // if(response.status===200){
        //     const response2 = await axios.get( endpoint+'photo/photos_id?='+props);
        // }
    }

    function updateStatAbout(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(true);
        setFaves(isFaves && !isGallery);
        setGallery(isGallery && !isFaves);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    function updateStatPhotStream(){
        setPhotoStream(true);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    function updateStatCameraRoll(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(true);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    function updateStatAlbum(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(true);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    function updateStatFaves(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(true);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    function updateStatGroup(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(true);
        setStats(isStats && !isStats);
    }
    const navStyle={
        color:'white'
    };


    return(
        
        <div>
            <Header isLogged={true}/>
            <div>
                <div className="uName" style={{backgroundImage: `url(${userInfo.BackGround})`}}>
                    <div className="overlay1">
                        {isUser && <i className="flaticon-edit" onClick={()=>{showEdit(1)}}></i>}
                        <div className="userInfo">
                            <div className="profImg" onClick={()=>{showEdit(2)}} style={{backgroundImage: `url(${userInfo.Avatar})`}}></div>
                            <div className="nameAndInfo">
                                <h1>{userInfo.Fname} {userInfo.Lname}</h1>
                                {isFollowing &&<button className="followButton" onClick={postFollowRequest()}>{plusIcon} Follow</button>}
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>{userInfo.UserName}</p>
                                        <ul className="NavbarAndheaderul">
                                            <li><Link  style={navStyle} to="/Followers">{userInfo.Followers} followers</Link></li>
                                            <li><Link  style={navStyle} to="/FollwingFollowers">{userInfo.Following} following</Link></li>
                                            {/* <li><Link  style={navStyle} to={`/FollwingFollowers/${props}/${id}`}>{userInfo.Following} following</Link></li> */}
                                        </ul>
                                    </div>
                                    <div className="joined">
                                        <p>{userInfo.Photo} Photos</p>
                                        <p>Joined {userInfo.Date_joined}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navAndSearch extraPadding">
                    <ul className="editNav NavbarAndheaderul">
                        <li className="mainHeadeNavCoices" className={isAbout && "defaultSelect" }  onClick={updateStatAbout}>About</li>
                        <li className=" mainHeadeNavCoices " className={isPhotoStream && "defaultSelect"} onClick={updateStatPhotStream}>Photostream</li>
                        <li className=" mainHeadeNavCoices" className={isAlbums && "defaultSelect"}  onClick={updateStatAlbum}>Albums</li>
                        <li className=" mainHeadeNavCoices" className={isFaves && "defaultSelect"}  onClick={updateStatFaves}>Favs</li>
                        <li className=" mainHeadeNavCoices" className={isGroup && "defaultSelect"}  onClick={updateStatGroup}>Groups</li>
                        {isUser && <li className=" mainHeadeNavCoices" className={isCameraRoll && "defaultSelect"}  onClick={updateStatCameraRoll}>Camera Roll</li>}
                    </ul>
                </div>
            </div>
            <div>
                {isPhotoStream && <Photostream isUser={isUser} userId={id}/>}
                {isCameraRoll && <CameraRoll/>}
                {isFaves && <Faves isUser={isUser} userId={id} userName={userName}/>}
                {isAlbums && <AlbumPreview isUser={isUser} userId={id} userName={userName}/>}
            </div>
        {isModalOpen && <div className="modal-container">
                <div className="overlay2"></div>
                <div className="modal-body">
                    <div className="navAndSearch">
                        <ul className="editNav NavbarAndheaderul">
                            <li className="defaultSelect mainHeadeNavCoices2">Photostream</li>
                            <li className=" mainHeadeNavCoices2">Albums</li>
                            <li className=" mainHeadeNavCoices2">Upload</li>
                        </ul>
                        <div className="searchAndClose">
                        <div className="searchBox2">
                            <button className="searchBtn">
                                <i className="flaticon-search"></i>
                            </button>
                            <input type="text" placeholder="Photos, People or Groups   "/>
                        </div>
                        <i className="flaticon-close" onClick={closeEdit}></i>
                        </div>
                    </div>
                    <div className="showPicInItems">
                    {userPhotos.map(photo=>(<img onClick={()=>{setSelectedPhoto(photo.photoUrl)}} src={photo.photoUrl}/>))}
                    </div>
                    <div className="slctBtn">
                        <button onClick={()=>changeSelection(selectedPhoto)}>select</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}
