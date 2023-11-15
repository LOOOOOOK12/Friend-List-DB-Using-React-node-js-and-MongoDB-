import React, { useState } from 'react'
import axios from 'axios'
import CreateStyles from '../Styles/CreateStyles'

function Create() {
    const [friends, setFriends]=useState();
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {friends: friends})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <CreateStyles className='create-form'>
            <label>Enter Name:</label>
            <input type="text" onChange={(e)=> setFriends(e.target.value)}/>
            <label>Enter Age:</label>
            <input type="text" />
            <label>Enter Gender:</label>
            <input type="text" />
            <label>About:</label>
            <input type="text" />
            <button type = "button "className="Submit" onClick={handleAdd}>Add Friend</button>
        </CreateStyles>
    )
}

export default Create