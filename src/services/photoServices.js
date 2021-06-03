import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

export default async function DeletePhoto (ids){
    try{
        // const response = await axios.delete( SERVER_URL+'photo/',ids);
        const response = await axios.delete(SERVER_URL+'photos/'+ids[0])
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

export async function PutPhoto (id, object){
    try{
        // const response = await axios.put(SERVER_URL+'photo', object)
        const response = await axios.put(SERVER_URL+'photos/'+id , object)
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

export async function UpdatePhotos (object){
  try{
      // const response = await axios.put(SERVER_URL+'photo', object)
      const response = await axios.put(SERVER_URL+'photos/', object)
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

export async function GetComments (id){
    try{
        // const response = await axios.get(SERVER_URL+'photo_id='+id+'comments')
        const response = await axios.get(SERVER_URL+'comments')
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

export async function GetPhotoById (id){
  try{
      // const response = await axios.get(SERVER_URL+'photo?photo_id='+id)
      const response = await axios.get(SERVER_URL+'photos/'+id)
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

export async function PostComments (id,object){
    try{
        // const response = await axios.post(SERVER_URL+'photo_id='+id+'comments',object)
        const response = await axios.post(SERVER_URL+'comments',object)
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

  export async function addPeopleTag (object)
  {
            try{
        const response = await axios.post(SERVER_URL+'photo/peopletag', object);

        
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

export async function addTag (object)
{
          try{
       const response = await axios.post(SERVER_URL+'photo/tag', object);
    
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

export async function PostPhoto (object){
  try{
      const response = await axios.post(SERVER_URL+'photos/',object)
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

export async function getExplorePhotos (){
  try{
    // const response = await axios.get( SERVER_URL+'user/photos');
    const response = await axios.get( SERVER_URL+'photos2');
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