import React, { useState } from 'react'
import axios from 'axios'
import CreateStyles from '../Styles/CreateStyles'

function Create() {
    const [name, setName]=useState();
    const [age, setAge]=useState();
    const [gender, setGender]=useState();
    const [about, setAbout]=useState();

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createFriend", {name, age, gender, about})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }


    return (
        <CreateStyles className='create-form'>
            <form onSubmit = {Submit}>
                <label>Enter Name:</label>
                <input type="text" onChange={(e)=> setName(e.target.value)}/>

                <label>Enter Age:</label>
                <input type="text" onChange={(e)=> setAge(e.target.value)}/>

                <label>Enter Gender:</label>
                <input type="text" onChange={(e)=> setGender(e.target.value)}/>

                <label>About Your Friend:</label>
                <input type="text" onChange={(e)=> setAbout(e.target.value)}/>

                <button type = "button "className="Submit">Add Friend</button>
            </form>
        </CreateStyles>
    )
}

export default Create