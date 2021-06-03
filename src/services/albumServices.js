import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

export default async function GetUserAlbums(){
    try{
        // const response = await axios.get( SERVER_URL+'/album');
        const response = await axios.get( SERVER_URL+'userAlbums');
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

export async function GetPeopleAlbums(userName){
    try{
        // const response = await axios.get( SERVER_URL+'/album/user?username='+userName);
        const response = await axios.get( SERVER_URL+'peopleAlbums');
       
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

export async function DeleteAlbum(id){
    try{
        // const response = await axios.get( SERVER_URL+'album?album_id='+id);
        const response = await axios.delete( SERVER_URL+'userAlbums/'+id);
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

export async function addPhotoToAlbum (id, object)
{
          try{
       //const response = await axios.post(endpoint+'album?album_id='+id, object);
      //const response = await axios.post(SERVER_URL+'album/'+id , object);
      const response = await axios.post(SERVER_URL+'userAlbums/'+id , object);
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

export async function deletePhotoFromAlbum (id,imgIdsToDelete)
{
    try{
       // const response = await axios.delete(endpoint+'album/photos?album_id='+id, imgIdsToDelete) ;
        const response = await axios.delete(SERVER_URL+'album/photos/'+id, imgIdsToDelete) ;
        
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

  export async function createAlbum (album){
    console.log(album);
    try{

        const response = await axios.post(SERVER_URL + 'album', album);
        
        return(response)
    }catch (error){
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
    }

    export async function GetAlbumById (album_id){
     
      try{
  
         
          // const response = await axios.get(SERVER_URL+'album?_id='+album_id,);
          const response = await axios.get(SERVER_URL+'userAlbums/'+album_id);
          return(response)
      }catch (error){
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
      }

      export async function UpdateAlbum (id, object){
        try{
            // const response = await axios.put(endpoint+'album?album_id='+id, object)
            //const response = await axios.put(SERVER_URL+'album/'+id , object)
            const response = await axios.put(SERVER_URL+'userAlbums/'+id , object);
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