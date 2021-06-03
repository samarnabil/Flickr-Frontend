import React,{useState,useEffect} from 'react';
import './followingFollowers.css';
import defaultProfile from '../../img/deefault.jpg';
import Header from '../navbar/mainNav';
import Footer from '../navbar/footer'
import {GetUserFollowers} from '../../services/userServices'
import axios from "axios"
const endpoint = 'http://localhost:3001/'

export default function Followers(props){

     //Get photos
        const [followers, setFollowers] = useState([]);

        useEffect(() => {
            GetUserFollowers().then( response => {
            setFollowers(response.data);
        })
    },[]);

    return(
        <div>
            <Header isLogged={true}/>
            <div className="flwAndFlowing">
            <div className="picAndSelect">
                <div className="imgg"></div>
                <div className="listAndTitle">
                    <h3>People following you</h3>
                    <ul className="NavbarAndheaderul">
                        <li><a>photos from</a></li>
                        <li><a>photos of</a></li>
                        <li><a>list</a></li>
                    </ul>
                </div>
            </div>
            <div className="searchFeatures">
                <span>show :</span>
                <select id="sortForm" className="form-select" aria-label="Default select example">
                <option defaultValue>everyone</option>
                <option value="1">Following</option>
                <option value="2">Freinds</option>
                <option value="3">Family</option>
                <option value="4">Freinds and Family</option>
                </select>
                <p>or</p>
                <span>Search :</span>
                <input id="searchForm" className="form-control form-control-sml" type="text" placeholder="screen name,real name or email" aria-label=".form-control-sm example"></input>
                <p>or</p>
                <a>who is following you?</a>
            </div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">public Photos</th>
                <th scope="col">Last Upload</th>
                <th scope="col">You list them as</th>
                </tr>
            </thead>
            <tbody>
            {followers.map(user => (
                <tr>
                <th scope="row"><img src={user.avatar}></img> {user.Fname} {user.Lname}</th>
                <td>{user.Photos}</td>
                <td>{user.UserName}</td>
                <td>user.Email</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <Footer/>
        </div>
    )
}