import './Modal.css';
import 'react-responsive-modal/styles.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ImagesMM from './ImagesMM';

function Modal(props) {
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey" />;
    const edit = <FontAwesomeIcon icon={faEdit} color="DarkGrey" />;
    const add = <FontAwesomeIcon icon={faPlusSquare} color="DarkGrey" />;
    const download = <FontAwesomeIcon icon={faArrowDown} color="DarkGrey" />;
    const deleteit = <FontAwesomeIcon icon={faTrashAlt} color="red" />;

    return (
      <>
        <div className="modal__container_main">
          <div className="row">
            <h3 className="modal__title_main">
              {props.countSelected}
              {' '}
              selected
            </h3>
            <a href="#" onClick={props.onRequestClose}>
              <h3 className="modal__title_main" id="clear_selection">Clear selection</h3>
            </a>
          </div>
          <div className="row" id="image_modal">
            { props.imgSelected.map((image) => (
              <ImagesMM
                url={image.photoUrl}
              />
              ))}
          </div>
          <div className="row bottom_options_modal">
            <a href="#" onClick={props.onEditRequest}>
              {' '}
              <h3 className="modal__title_main">
                {edit}
                {' '}
                Edit
              </h3>
            </a>
            <span className="space__modal_main" />
            <a href="#" onClick={props.onAddRequest}>
              <h3 className="modal__title_main">
                {add}
                {' '}
                Add to album
              </h3>
            </a>
            <span className="space__modal_main" />
            <a href="#" onClick={ () =>{
                    props.onDeleteRequest(props.key);}}>
              <h3 className="modal__title_main" id="delete_option">
                {deleteit}
                {' '}
                Delete
              </h3>
            </a>
          </div>
        </div>
      </>
  );
}

export default Modal;
