import React from 'react';
import './ImagesCR.css';

const ImagesCR = (props) => {
  
  const { url, image, onEdit } = props;
  return (
    <>
      <div className="column_adj">
        <img className="img-responsive" id="content" src={url} alt="image_flickr" onClick={(event) => onEdit(event, image)} />
      </div>
    </>
  );
};

export default ImagesCR;
