import React, {useState} from 'react'
import Create from './Components/Create'
import HomeStyles from './Styles/HomeStyles'



function Home() {
    const [friends, setFriends] = useState([])

    return (
        <HomeStyles>
            <h1>Friend List</h1>
        <Create/>
        {
            friends.length === 0 
            ?
            <div>
                <h2>No Records</h2>
            </div> :
            friends.map(friend =>(
                <div>
                    {friend}
                </div>
            ))
        }
        </HomeStyles>
    )
}

export default Home