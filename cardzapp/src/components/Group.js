import {React, useEffect} from 'react'

const Group = ({name, ids}) => {

    useEffect(() => {
        // Update the document title using the browser API
    });
    function dragElement() {
        const elmnt= document.getElementById('group');
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
          
        elmnt.onmousedown = dragMouseDown;
        
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
    }
    function raiseVoice(){
        console.log("hahaha");
    }
    
    
        
  return (
    <div>
        <div className='group' onMouseEnter={dragElement}>
            <div className='header'>{name}</div>
            <div className='box'></div>
        </div>
    </div>
  )
}

export default Group