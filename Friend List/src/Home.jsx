import React, {useEffect, useState} from 'react'
import Create from './Components/Create'
import HomeStyles from './Styles/HomeStyles'
import axios from 'axios'

function Home() {
    const [friend, setFriends] = useState([])
    

    // function deleteFriend(){
    //     alert("are you sure to remove your friend?");
    // }

    function editFriend(){
        alert("Edit")
    } 
    
    const deleteFriend = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/deleteFriend", { name, age, gender, about })
        .then(response => {
            props.setFriends(prevState => [...prevState, response.data])
        }).catch((error) => console.log(error))
    }

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setFriends(result.data))
        .catch(error => console.log(error))
    },[])

    return (
        <HomeStyles>
            <h1>Friend List!!!</h1>
            <p>Add your friends here and never forget about them!!!</p>
        <Create setFriends={setFriends}/>
        <table>
            <thead className='Thead'>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>About Your Friend:</th>
                </tr>
            </thead>
            <tbody>
                {
                    friend.map((friends) =>{
                    return<tr>
                                <td>{friends.name}</td>
                                <td>{friends.age}</td>
                                <td>{friends.gender}</td>
                                <td>{friends.about}</td>
                                <td>
                                    <button className='Edit' onClick={editFriend}>Edit</button>
                                    <button className='Delete' onClick={deleteFriend}>Delete</button>
                                </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </HomeStyles>
    )
}

export default Home