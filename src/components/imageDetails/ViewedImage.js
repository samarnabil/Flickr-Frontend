import React from 'react';

export default  function ViewedImage(props){
    return(
        <div className="carousel-item adjustCarousel-item">
        <div className="imageSlide">
            <img src={props.url} alt=""></img>
        </div>
        </div>
    )
}