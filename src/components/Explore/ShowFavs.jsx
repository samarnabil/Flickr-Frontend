import React,{useState,useEffect} from "react"
import Commentstyles from "./Commentstyles.css"
import ExploreGrid from "./Explore_grid"
import axios from "axios"
import Comments from "./Comments"


function ShowFavs(props){
   const  defaultProfile= "https://picsum.photos/2";
    return(
        <div className="users-comments">
        <div class="right-hold">
    
    <a href="#"><span className="image"><img   alt = "Avatar" src={props.Pic}/></span>
	</a>
	</div>
	<div className="Namee"><a href="#"><span className="userName">{props.Fname}</span></a></div>
    </div>
    )
}

export default ShowFavs;