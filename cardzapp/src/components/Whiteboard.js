import {React, useState} from 'react'
import Highlight from './Highlight';
import Group from './Group';

const Whiteboard = () => {
    const [highlights, setHighlight] = useState([
        {
            id: 0,
            text: "HEllo this is teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest.",
            name: "User 1",
            tag: ""
        }
    ]);
    const [groups, setGroups] = useState([
        {
            name: "Pin Points",
            ids: []
        }
    ]);
  return (
    <div>
        <div className='btn btn-primary add'>Add</div>
        <div className='btn btn-primary create-bucket'>Create Bucket</div>
        Whiteboard
        {highlights.map((highlight)=>(
            <Highlight text={highlight.text} name={highlight.name} tag={highlight.tag}/>
        ))}
        {groups.map((group)=>(
            <Group name={group.name} />
        ))}

    </div>
  )
}

export default Whiteboard