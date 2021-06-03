import React, {useState} from 'react'
import './mainNav.css'
import '../../fonts/font/flaticon.css'
import flickrLogo from '../../img/flickr.png'
import {toggleNav} from './navBar.js'
import {toogleMobileSearchBox} from './navBar.js'
import {readjustHeader} from './navBar.js'
import defaultProfile from '../../img/deefault.jpg';
import { Link,Route } from 'react-router-dom'
export default function Header(props){
    //
    const [searchText,setSearchText]=useState();
    const showDropDown = e => setSearchText(e.target.value);
    function checkSize(){
        if(window.innerWidth>1080){
            readjustHeader();
        }
    }
    const navStyle={
        color:'white'
    };

    const [isLogged, setLogged] = useState(props.isLogged)


    function logOut(){
        delete localStorage.token;
        setLogged(false)

    }
    
    window.addEventListener('resize',checkSize);
    return(
            <div>
        <nav className="navbar fix_nav">
        <div className="container">
            <div className="logoPlusNav">
            <span className="menuIcon" onClick={()=>toggleNav()}>
                <span className="line1 hiddenIconbars"></span>
                <span className="line2 hiddenIconbars"></span>
                <span className="line3 hiddenIconbars"></span>
            </span>
            <Link style={navStyle} to="/user"><div className="flickLogoName" href="#top">
            <img src={flickrLogo} alt="flickrLogo"></img>
            <h3>flickr</h3>
            </div></Link>
            {isLogged && <>
            <ul className="headSubMenu NavbarAndheaderul">
                <li  className="mainHeaderTags youTag" ><Link style={navStyle} to="/user">You</Link>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">About</a>
                    </li>
                    <li>
                        <Link  style={navStyle} to="/user"><p id="linkedParagraph">Photostream</p></Link>
                    </li>
                    <li>
                        <a href="#top">Albums</a>
                    </li>
                    <li>
                        <a href="#top">Favs</a>
                    </li>
                    <li>
                        <a href="#top">Gallery</a>
                    </li>
                    <li>
                        <a href="#top">Groups</a>
                    </li>
                    <li>
                        <a href="#top">CameraRoll</a>
                    </li>
                </ul>
                </li>
                <li  className="mainHeaderTags youTag"><Link style={navStyle} to="/Explore">Explore</Link>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">Recent Photos</a>
                    </li>
                    <li>
                        <a href="#top">Trending</a>
                    </li>
                </ul>
                </li>
                <li  className="mainHeaderTags youTag"><a className="active" href="#top">Prints</a>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">prints & wall arts</a>
                    </li>
                </ul>
                </li>
            </ul></>}
            </div>
            {isLogged && <>
            <div className="searchBox hiddenIconSearch biggerBox youTag">
                    <button className="searchBtn">
                        <i className="flaticon-search"></i>
                    </button>
                    <input onChange={showDropDown} type="text" placeholder="Photos, People or Groups   "/>
                    {searchText && <ul className="subMenuYouContent adjustedFoeSearch" >
                    <li>
                        <a href="#top">Search photos</a>
                    </li>
                    <li>
                        <a>Search people</a>
                    </li>
                    <li>
                        <a href="#top">Search group</a>
                    </li>
                </ul>}
            </div>
            <div className="searchNotifivationUpload  youTag">
                <div className="searchBox">
                    <button className="searchBtn">
                        <i className="flaticon-search"></i>
                    </button>
                    <input onChange={showDropDown} type="text" placeholder="Photos, People or Groups   "/>
                    {searchText && <ul className="subMenuYouContent adjustedFoeSearch" >
                    <li>
                        <a href="#top">Search photos</a>
                    </li>
                    <li>
                        <a>Search people</a>
                    </li>
                    <li>
                        <a href="#top">Search group</a>
                    </li>
                </ul>}
                </div>
                <i className="flaticon-close hiddenIconSearch" onClick={()=>toogleMobileSearchBox()}></i>
                <i className="flaticon-search coreSearch hiddenIcon" onClick={()=>toogleMobileSearchBox()}></i>
                <Link style={navStyle} to="/"><button className="logOut" onClick={logOut}>Logout</button></Link>
                <Route style={navStyle} to="/upload"><i className="flaticon-cloud-computing"></i></Route>
                <i className="flaticon-bell"></i>
                <img src={defaultProfile} alt="defaultProfilePicture" className="sideProfilePic"></img>
            </div></>}
        </div>
    </nav>
    <div className="hiddenHeaderList">
        <ul className="NavbarAndheaderul">
            <li>
                <a href="#top">About</a>
            </li>
            <li>
                <a href="#top">Photostream</a>
            </li>
            <li>
                <a href="#top">Albums</a>
            </li>
            <li>
                <a href="#top">Favs</a>
            </li>
            <li>
                <a href="#top">Recent Photos</a>
            </li>
            <li>
                <a href="#top">Trending</a>
            </li>
            <li>
                <a href="#top">prints & wall arts</a>
            </li>
        </ul>
    </div>
    </div>
    );
}