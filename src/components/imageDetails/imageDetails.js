import React,{useState,useEffect}  from 'react'
import '../../fonts/font/flaticon.css'
import './imageDetails.css'
import defaultProfile from '../../img/deefault.jpg';
import Footer from '../navbar/footer'
import t1 from '../../img/img/dBackground.jpg';
import t2 from '../../img/img/ddBackground.jpg'
import ViewedImage from './ViewedImage'
import ShownImageComments from './ShownImageComments'
import {GetUserPhotos} from "../../services/userServices"
import GetPeoplePhotos from "../../services/peopleServices"
import {GetPhotoById,GetComments,PostComments} from "../../services/photoServices"
import Header from '../navbar/mainNav';
import axios from "axios";
import { Link,useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ImageDetails(props){
    const {id}=useParams();
    const {userId} = useParams();
    const path = props.location.pathname;
    const [images, setPhotos] = useState([]);
    const [image, setImage] = useState("");
    const [discription, setDiscription] = useState("");
    const [titile, setTitle] = useState("");
    const [comments, setComments] = useState([]);
    const [numOfFavs, setNumOfFavs] = useState([]);
    const [datOfUpdate, setDatOfUpdate] = useState([]);
    const [newComment, setNewComment] = useState();
    const addComment = e => setNewComment(e.target.value);
    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    //get request
    useEffect( () =>{
     if(userId){
        //get user photos
        GetUserPhotos().then( response => {
            setUserPhotos(response.data);
            console.log(response)
        })
     }else{
        //get people photos by userId
        GetPeoplePhotos(userId).then( response => {
            setPeoplePhotos(response.data);
        })
     }


    //get photo by id
    GetPhotoById(id).then( response => {
        setImage(response.data.photoUrl);
        setDiscription(response.data.description);
        setTitle(response.data.title);
        // setNumOfFavs(response.data.Fav.length);
        setNumOfFavs(response.data.num_favs);
        setDatOfUpdate(response.data.UpdatedAt);
    })

    //get comments
    GetComments().then( response => {
        setComments(response.data);
        console.log(response.data);
    })

  },[])

    /////////////////////////////////////////API///////////////////////////////
    function postTnewMessage(){
        const sentComment={ 
            comment: newComment
        }
        PostComments(id,sentComment).then( response => {
            console.log(response);
        });
    }

    console.log(image);
    return(
        <div className="imagePreview">
            <Header isLogged={true}/>
            <div className="showedImage">
            <div id="carouselExampleControls" className="carousel slide"  data-bs-interval="false">
            <div className="carousel-inner">
            <div className="carousel-item active adjustCarousel-item">
                <div className="imageSlide">
                    <img src={image} alt=""></img>
                </div>
            </div>
            {userPhotos.map(photo=>(<ViewedImage url={photo.photoUrl}/>))} 
                </div>
                <button  className="carousel-control-prev adjustbutton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next adjustbutton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
                </div>
        </div>
        <div className="restPhotoDetails container">
            <div className="discriptionAndComments">
                <h3>{titile}</h3>
                <p>{discription}</p>
                {comments.map(comnt=>(<ShownImageComments cmntText={comnt.comment} commentOwnerFname={comnt.user.Fname} commentOwnerLname={comnt.user.Lname}/>))} 
                <div className="commentBoxImageDetails">
                    <input type="text" id="tag" name="text" onChange={addComment}/>
                    {newComment && <button onClick={postTnewMessage()}>comment</button>}
                </div>
                
            </div>
            <div className="photoInteractions">
                <div>
                    <h4>{numOfFavs}</h4>
                    <span>Favs</span>
                </div>
                <div>
                    <h4>{comments.length}</h4>
                    <span>comments</span>
                </div>
                <span>Updated on {datOfUpdate}</span>
            </div>
        </div>
        <Footer/>
        </div>
    );
}