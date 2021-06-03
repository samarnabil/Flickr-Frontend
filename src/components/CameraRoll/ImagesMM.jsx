import React from 'react';
import './ImagesMM.css';

const ImagesMM = (props) => {
  const { url } = props;
  return (
    <>
      <div className="column_adj_modal">
        <img className="img-responsive" id="content_modal" src={url} alt="image_flickr" />
      </div>
    </>
  );
};
export default ImagesMM;
