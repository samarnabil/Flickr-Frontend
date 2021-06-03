import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

// axios.defaults.headers.common['header1'] = 'value' // for all requests
// const token = '..your token..'
// let config = {
//     headers: {
//       token: 'value',
//     }
//   }
//   {headers:{ 'Authorization': `Basic ${token}`}}

//User
export default async function UserLogin(object){
  try{
      // const response = await axios.post( SERVER_URL+'user/login',object);
      const response = await axios.get( SERVER_URL+'user?id='+0);
      //Success
      return(response)
  } catch (error){
      if (error.response){
      /*
      * The request was made and the server responded with a
      * status code that falls out of the range of 2xx
      */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      return(error.response.data)
      } else if (error.request){
        /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//sign up
export async function PostUser (object){
  try{
      const response = await axios.post( SERVER_URL+'user',object);
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return(error.response);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//check
export async function checkUserByIdentifier(id){
  try{
      const response = await axios.get( SERVER_URL+'user/check?peopleid='+id);
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};


export async function GetUserPhotos (){
    try{
        // const response = await axios.get( SERVER_URL+'user/photos');
        const response = await axios.get( SERVER_URL+'photos');
        //Success
        return(response)
    } catch (error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request){
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error);
    }
};

export async function GetUser(){
  try{
      // const response = await axios.get( SERVER_URL+'user');
      const response = await axios.get( SERVER_URL+'user');
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

// Favs
export async function GetUserFavs(){
  try{
      // const response = await axios.get( SERVER_URL+'user/fav');
      const response = await axios.get( SERVER_URL+'userFav');
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

export async function PostUserFavs(id,object){
  try{
      // const response = await axios.post( SERVER_URL+'favs',id);
      const response = await axios.post( SERVER_URL+'userFav',object);
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

export async function DeleteUserFavs(id){
  try{
      // const response = await axios.delete( SERVER_URL+'favs?photo_id='+id);
      const response = await axios.delete( SERVER_URL+'userFav/'+id);
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//Following

export async function GetUserFollowing(){
  try{
      // const response = await axios.get( SERVER_URL+'user/following');
      const response = await axios.get( SERVER_URL+'following');
      //Success
      return(response)
      
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//Following

export async function GetUserFollowers(){
  try{
      // const response = await axios.get( SERVER_URL+'user/following');
      const response = await axios.get( SERVER_URL+'followers');
      //Success
      return(response)
      
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//check user

export async function GetUserCheck(id){
  try{
      //const response = await axios.get( endpoint+'user/check/peopleid?='+props);
      const response = await axios.get( SERVER_URL+'user?id=',id);
      //Success
      return(response)
      
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//Update User
export async function UpdateUser(data){
  try{
      //const response = await axios.put(endpoint + "user" , data);
      const response = await axios.put( SERVER_URL+'user',data);
      //Success
      return(response)
      
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};