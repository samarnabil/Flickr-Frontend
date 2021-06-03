import React,{useState} from 'react'
function PhotosToAdd(props){

    const [isHovered,setHover] = useState(false);
    const [isClicked,setClicked] = useState(false);

    function toggleHover(){
        setHover(!isHovered);
    }

    function toggleClick(){
        console.log('count=',props.size);
        if (isClicked === false){
            if (props.size < 6){
                props.onAdd(props.id,props.url);
                setClicked(!isClicked);
            }
            else{
                setClicked(false);
                props.onError();
            }
        }
        else{
            //remove from array 
            props.onRemove(props.id,props.url);
            setClicked(!isClicked);
        }
    }

    return(
        <>
        {!isClicked?
            <>
            {!isHovered?
            <img src={props.url}
                onMouseOver = {toggleHover}
                onMouseOut = {toggleHover}
                onClick ={toggleClick}
                alt=""
            />
            :
            <img src={props.url} style={{borderColor: '#ff0084'}}
                onMouseOver = {toggleHover}
                onMouseOut = {toggleHover}
                onClick ={toggleClick}
                alt=""
            />}
            </>
            :
            <>
            <img src={props.url} style={{borderColor: '#ff0084'}}
                onClick ={toggleClick}
                alt="" />
            </>}
        </>
    )
}

export default PhotosToAdd;