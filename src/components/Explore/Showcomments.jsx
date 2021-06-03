import React,{useState,useEffect} from "react"
import Commentstyles from "./Commentstyles.css"
import ExploreGrid from "./Explore_grid"
import axios from "axios"
import defaultProfile from '../../img/deefault.jpg';
import Comments from "./Comments"
import '../navbar/mainNav.css'
import '../../fonts/font/flaticon.css'

function Showcomments(props){
   const  defaultProfile= "https://picsum.photos/2";
    return(
        <div className="users-comments">
       
		
       <div class="right-hold">
    
    <a href="#" ><span className="image"><img   alt = "Avatar" src={props.Pic}/></span>
	</a>
	</div>
	<div className="Namee" id="blueCommentColor"><a href="#"><span>{props.Fname}</span></a></div>
    
    <div className="body"> <p>{props.body}</p></div>
 
</div>
    )
}

export default Showcomments;