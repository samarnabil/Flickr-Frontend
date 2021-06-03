import React, { useState , useEffect } from 'react';
import _, { filter, map, set } from 'lodash';
import moment from 'moment';
import ImagesCR from './ImagesCR';
import Modal from './Modal';
import EditModal from './EditModal';
import AddModal from './AddModal';
import SideNavBar from './SideNavBar';
import DeleteModal from '../DeleteModal/DeleteModal'
import {GetUserPhotos} from "../../services/userServices"
import DeletePhoto from "../../services/photoServices"
import './CamreRoll.css';
import './EditModal.css';
import './AddModal.css';
import CreateNewAlbumModal from './CreateNewAlbumModal';

function CamreRoll() {
  
  //Get photos
  const [images, setImages] = useState([]);

  useEffect( () =>{
    //get user photos
    GetUserPhotos().then( response => {
      setImages(response.data);
    })

  },[])
  //  },[images])

  
  const sortedImagesUploaded = images.slice().sort((a, b) => b.createdAt - a.createdAt);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [toEdit, setToEdit] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isCreateAlbumOpen , setCreateAlbumOpen] = useState(false);
  const [idToDelete,setID]=useState(0);
  const [imgDated, setimgDated] = useState([]);
  const [toEditIds, setToEditIds] = useState([]);

  
  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };
  const toggleCreateAlbum = () => {
    setCreateAlbumOpen(!isCreateAlbumOpen);
  };

  const toggleDelete = (id) => {
    setDeleteOpen(!isDeleteOpen);
    setID(id);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };
  const closeMainModal = () => {
    setModalIsOpen(!isModalOpen);
    setCount(0);
    setToEdit([]);
    // should alse clear the count and clear the to Edit array
  };



  const monthName = (item) => moment(item.createdAt, 'YYYY-MM-DD').format('DD MMMM YYYY');
  // function to check if this image was already selected or a newly selected one
  function containsObject(obj, list) {
    // return list.some((elem) => elem._id === obj._id);
    return list.some((elem) => elem.id === obj.id);
  }
  // to delete the element if unselected
  function handleDelete(obj, list) {
    const listClone = [...list];
    const index = listClone.indexOf(obj);
    // Edit
    return listClone.splice(index, 1);
  }

  function handleIncrement(c) {
    return c + 1;
  }
  function handleDecrement(c) {
    return c - 1;
  }

  // to toggle the modal .. if open then close and vice versa
  const toggleModal = (e, imgObj) => {
    // if count was initially 0 .. this the first image to be selected .. open modal
    let countCopy = count;
    console.log(countCopy);
    if (!countCopy) {

      setToEdit([]);
      setToEditIds([]);

      if (!isModalOpen) {

        setModalIsOpen(!isModalOpen);

        setToEdit((prevItems) => [...prevItems, imgObj]);
        //setToEditIds((prevItems)=>[...prevItems,imgObj._id]);
        setToEditIds((prevItems)=>[...prevItems,imgObj.id]);

        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
        console.log(countCopy);
        // we now checked if the image was already selected .. unselect it.. count --
        // if no image left close modal
      } else {
        // setModalIsOpen(false);
        setModalIsOpen(!isModalOpen);
      }
    } else {
      const isHere = containsObject(imgObj, toEdit);
      
      console.log(isHere);
      if (!isHere) {

        setToEdit((prevItems) => [...prevItems, imgObj]);
               //setToEditIds((prevItems)=>[...prevItems,imgObj._id]);
               setToEditIds((prevItems)=>[...prevItems,imgObj.id]);

        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      if (isHere) {

        setToEdit(handleDelete(imgObj, toEdit));
       // setToEditIds(handleDelete(imgObj._id, toEditIds));
       setToEditIds(handleDelete(imgObj.id, toEditIds));

        countCopy = handleDecrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      // we now checked if the image was already selected .. unselect it.. count --
      // if no image left close modal
      console.log(toEdit);
      console.log(toEditIds);

      if (!countCopy) {
     
        setToEdit([]);
        setToEditIds([]);

        setModalIsOpen(!isModalOpen);
      }
    }

        };

        const grouped = _.groupBy(sortedImagesUploaded, 'createdAt');
        const keys = Object.keys(grouped);
        const values = Object.values(grouped);
        const tempImgDated = [];

        useState(() => { for (let i = 0; i < keys.length; i += 1)
    {
      const imgCorresponding = values[i];
      tempImgDated.push(<div><h6>{keys[i]}</h6></div>);
      tempImgDated.push(
        imgCorresponding.map((image) => (
            <ImagesCR
              key={image.id}
              Url={image.Url}
              image={image}
              onEdit={toggleModal}
              id={0}
            />
        )),
      );
      tempImgDated.push(<br />);
      setimgDated([...imgDated, ...tempImgDated]);
    } });

  
const photoIdsDelete = {
  "photos": toEditIds,
}

  function confirmDelete(){
    DeletePhoto(photoIdsDelete).then( response => {
        console.log(response);
    });
    //close delete modal
    toggleModal(idToDelete); 
}


  return (

    <>

      <ul id="topNavbar" className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu" />
          </li>

        </div>
      </ul>
      {/* <SideNavBar /> */}
    <div className="sidephoto">
        <SideNavBar />
        <div className="row">
          <div className=" container_body">

            { sortedImagesUploaded.map((image) => (
              <ImagesCR
               // key={image._id}
                key={image.id}
                url={image.photoUrl}
                image={image}
                onEdit={toggleModal}
              />

            )) }
      {/* <div> */}
        {/* {imgDated} */}
      {/* </div> */}
      </div>

        </div>

      </div>
          <main className="main_Modal">
            {isModalOpen && (
            <Modal
              onRequestClose={closeMainModal}
              onEditRequest={toggleEditModal}
              onAddRequest={toggleAddModal}
              onDeleteRequest={toggleDelete}
              imgSelected={toEdit}
              countSelected={count}
              id={0}
            />
            )}
          </main>

      <main className="main_edit">
        {isEditModalOpen && (
        <EditModal
          onRequestEditClose={toggleEditModal}
          imgEdit={toEdit}
          imgEditIds= {toEditIds}
          countEdit={count}
        />
        )}
      </main>
      <main className="main_edit">
        {isAddModalOpen && (
        <AddModal
          onRequestAddClose={toggleAddModal}
          onRequestCreate={toggleCreateAlbum}
          imgAdd={toEdit}
          imgAddIds= {toEditIds}
          countAdd={count}
            
        />
        )}
      </main>
      <main>
        {isDeleteOpen && (
        <DeleteModal
          onRequestClose={toggleDelete}
          onDelete={confirmDelete}
          title = "Delete photos ?"
          message = "You cannot reverse this action. Are you sure you want to permanently delete this photo?"
        />
        )}
      </main>



      <main>
        {isCreateAlbumOpen && (
        <CreateNewAlbumModal
          onRequestCreateClose={toggleCreateAlbum}
          imgIdsCreateAlbum={toEditIds}
          
        />
        )}
      </main>

    </>
  );
}

export default CamreRoll;
