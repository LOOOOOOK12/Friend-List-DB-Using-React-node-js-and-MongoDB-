import React, {useEffect, useState} from 'react'
import Create from './Components/Create'
import HomeStyles from './Styles/HomeStyles'
import {Modal} from './Components/Modal'
import axios from 'axios'

function Home() {
    const [friend, setFriends] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    const handleButtonClick =() =>{
        setModalOpen(false)
    }

    const deleteFriend = (id) => {
        axios.delete('http://localhost:3001/deleteFriend/' + id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
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
                    return<tr key ={friend._id}>
                                <td>{friends.name}</td>
                                <td>{friends.age}</td>
                                <td>{friends.gender}</td>
                                <td>{friends.about}</td>
                                <td>
                                    <button className='Edit' onClick={() => setModalOpen(true)}>Edit</button>
                                        {modalOpen && <Modal/>}
                                    <button className='Delete' onClick={(e) => deleteFriend(friends._id)}>Delete</button>
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