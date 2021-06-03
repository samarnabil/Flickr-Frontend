import React from "react"
import './DeleteModal.css'

function Modal(props){

    return (
        <div className="modal__backdrop" >
            <div className="modal__container">
                <span className="close" onClick={props.onRequestClose}>&times;</span>
                <h3 className="modal__title">{props.title}</h3>
                <p>
                {props.message}
                </p>
                <button id="confirm" type="button" onClick={ () =>{
                    props.onDelete();}}>
                    Confirm
                </button>
                <button id="cancel" type="button" onClick={props.onRequestClose}>
                    Cancel
                </button>

            </div>
        </div>
    );


}

export default Modal;