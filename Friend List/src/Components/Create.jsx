import React, { useState } from 'react';
import axios from 'axios';
import CreateStyles from '../Styles/CreateStyles';

function Create(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [about, setAbout] = useState('');
    const [error, setError] = useState('');

    const Submit = async (e) => {
        e.preventDefault();

        if (!name || !age || !gender || !about) {
        setError('All fields are required.');
        return;
        }

        
        if (!/^\d+$/.test(age)) {
            setError('Age should contain only numbers.');
            return;
        }

        if (!/^[a-zA-Z]+$/.test(age)) {
            setError('age should contain only letters.');
            return;
            }   
        setError('');

        axios
        .post('http://localhost:3001/createFriend', { name, age, gender, about })
        .then((response) => {
            props.setFriends((prevState) => [...prevState, response.data]);
            clearForm();
        })
        .catch((error) => console.log(error));
    };

    function clearForm() {
        setAbout('');
        setAge('');
        setGender('');
        setName('');
    }

    return (
        <CreateStyles className="create-form">
        <form>
            <div className='Error'>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
            <div className='Labels'>
                <div className="Label">
                <label>Enter Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="Label">
                <label>Enter Age:</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="Label">
                <label>Enter Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <div className="Label">
                <label>About Your Friend:</label>
                <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
                </div>

                <button type="button" className="Submit" onClick={Submit}>
                Add Friend
                </button>
            </div>
        </form>
        </CreateStyles>
    );
}

export default Create;