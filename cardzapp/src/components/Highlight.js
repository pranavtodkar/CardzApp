import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
// import Draggable from "./Draggable";

const Highlight = ({text,name,tag}) => {
    
    function removeTag() {
        document.getElementById('tag').classList.remove("badge");
        document.getElementById('tag').classList.remove("badge-pill");
        document.getElementById('tag').classList.remove("badge-primary");
    }
    function showMenu(){
        console.log("hovered");

    }
  return (
    <div className='highlight' style={{backgroundColor: "red"}}  onMouseEnter={showMenu}>
        <div className='tag badge badge-pill badge-primary' id='tag'>{tag}</div>
        <div className='text' id='text'>{text}</div>
        <div className='name' id='name'>{name}</div>
        <div className='delete'></div>

        
        {/* <Draggable/> */}
    </div>
  )
}

export default Highlight