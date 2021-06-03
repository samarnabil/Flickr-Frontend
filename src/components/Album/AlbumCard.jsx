import React, {useState}from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {DeleteAlbum} from '../../services/albumServices' 
import $ from 'jquery'
import {Link} from "react-router-dom";

function AlbumCard(props){
    const navStyle={ color:'white'};
    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const open = <FontAwesomeIcon icon={faFolderOpen} color="White" />

    const [isUser , setIsUser] = useState([props.isUser])
    const [userId , setUserId] = useState(props.userId)

    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)


    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);
    }

    function confirmDelete(){
        //get user photos
        DeleteAlbum(idToDelete).then( response => {
            console.log(response);
        });
        setModalIsOpen(!isModalOpen);
    }


    return(
        <>
            <div className="album-overview" >
                <img src={props.coverUrl} alt="album cover"/>
                <div className="album-info">
                    <h1>{props.title}</h1>
                    <p> {props.numberOfPhotos} photos</p>
                   {isUser && <button  onClick={ () =>{ toggleModal(props.id);}}>{remove}</button>}
                <Link  style={navStyle} to={`/AlbumPage/${props.id}/${isUser}`}>
                    <button id="open-button" >{open}</button>
                 </Link>

                </div>
            </div>
        {isModalOpen && <DeleteModal 
                            onRequestClose={toggleModal} 
                            onDelete={confirmDelete} 
                            title = "Confirmation"
                            message = "Do you really want to delete this album? (Don't worry, none of the contents will be deleted)"
                            />
        }
        </>
    )

}

export default AlbumCard;