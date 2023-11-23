import React, { useState, useEffect } from "react";
import UpdateStyles from '../Styles/UpdateStyles';
import "../Styles/Modal.css";
import axios from 'axios';

export const Modal = ({ friend, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        about: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        setFormData({
            name: friend.name,
            age: friend.age,
            gender: friend.gender,
            about: friend.about,
        });
    }, [friend]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = () => {
        
        // kung warang laog gabos
        if (!formData.name || !formData.age || !formData.gender || !formData.about) {
            setError('All fields are required.');
            return;
        }

        // kung may letter sa age
        if (!/^\d+$/.test(formData.age)) {
            setError('Age should contain only numbers.');
            return;
        }

        // kung su name may number
        if (!/^[a-zA-Z]+$/.test(formData.name)) {
            setError('name should contain only letters!');
            return;
            }
        
        //kung su gender may number 
        if (!/^[a-zA-Z]+$/.test(formData.gender)) {
            setError('Gender should contain only letters!');
            return;
            }   

        setError('');

        axios
            .put(`http://localhost:3001/updateFriend/${friend._id}`, formData)
            .then((res) => {
                console.log(res);
                onSubmit(formData);
                onCancel();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='modal-Container'>
            <div className="modal">
                <UpdateStyles>
                    <form>
                        <h1>Update Friend</h1>
                        {error && <div style={{ color: '#fa2222' }}>{error}</div>}
                        <div className='Label'>
                            <label>Update name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className='Label'>
                            <label>Update age:</label>
                            <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
                        </div>
                        <div className='Label'>
                            <label>Update Gender</label>
                            <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
                        </div>
                        <div className='Label'>
                            <label>Update About</label>
                            <input type="text" name="about" value={formData.about} onChange={handleInputChange} />
                        </div>
                        <div className='buttons'>
                            <button className='update-Button' type="button" onClick={handleUpdate}>
                                Update
                            </button>
                            <button className='cancel-Button' onClick={() => onCancel()}>Cancel</button>
                        </div>
                    </form>
                </UpdateStyles>
            </div>
        </div>
    );
};
