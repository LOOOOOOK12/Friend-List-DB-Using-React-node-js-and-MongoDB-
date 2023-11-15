import React, {useEffect, useState} from 'react'
import Create from './Components/Create'
import HomeStyles from './Styles/HomeStyles'
import axios from 'axios'

function Home() {
    const [friend, setFriends] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setFriends(result.data))
        .catch(error => console.log(error))
    },[])

    return (
        <HomeStyles>
            <h1>Friend List</h1>
        <Create/>
        <table>
            <thead className='Thead'>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>About</th>
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
                                    <button className='Edit'>Edit</button>
                                    <button className='Delete'>Delete</button>
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