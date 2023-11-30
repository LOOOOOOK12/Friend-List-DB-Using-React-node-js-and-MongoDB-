import React, { useEffect, useState } from 'react';
import Create from './Components/Create';
import HomeStyles from './Styles/HomeStyles';
import { Modal } from './Components/Modal';
import axios from 'axios';

function Home() {
    const [friends, setFriends] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFriendId, setSelectedFriendId] = useState(null);

    const handleButtonClick = (id) => {
        setSelectedFriendId(id);
        setModalOpen(true);
    };

    const deleteFriend = (id) => {
        axios
        .delete('http://localhost:3001/deleteFriend/' + id)
        .then((res) => {
            console.log(res);
            window.location.reload();
        })
        .catch((err) => console.log(err));
    };

    const handleModalSubmit = (updatedFriendData) => {
        
        setFriends((prevFriends) =>
            prevFriends.map((friend) =>
                friend._id === selectedFriendId ? { ...friend, ...updatedFriendData } : friend
            )
            );
            setModalOpen(false);
        };
    

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then((result) => setFriends(result.data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <HomeStyles>
        <h1>Friend List!!!</h1>
        <p>Add your friends here and never forget about them!!!</p>
        <Create setFriends={setFriends} />
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
            {friends.map((friend) => {
                return (
                <tr key={friend._id}>
                    <td>{friend.name}</td>
                    <td>{friend.age}</td>
                    <td>{friend.gender}</td>
                    <td>{friend.about}</td>
                    <td>
                    <button className='Edit' onClick={() => handleButtonClick(friend._id)}>
                        Edit
                    </button>
                    {modalOpen && selectedFriendId && (
                        <Modal
                        friend={friends.find((friend) => friend._id === selectedFriendId)}
                        onSubmit={handleModalSubmit}
                        onCancel={() => setModalOpen(false)}
                        />
                    )}
                    <button className='Delete' onClick={() => deleteFriend(friend._id)}>
                        Delete
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        
        </HomeStyles>
    );
    }

export default Home;
