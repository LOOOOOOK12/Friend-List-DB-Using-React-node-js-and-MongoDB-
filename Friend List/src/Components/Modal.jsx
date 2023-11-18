import React from 'react'
import UpdateStyles from '../Styles/UpdateStyles'
import "../Styles/Modal.css"


export const Modal = ({onSubmit, onCancel}) => {
  return (
    <div className='modal-Container'>
        <div className="modal">
            <UpdateStyles>
                <form >
                <h1>Update Friend</h1>
                    <div className='Label'>
                        <label>Update name:</label>
                        <input type="text" />
                    </div>
                    <div className='Label'>
                        <label>Update age:</label>
                        <input type="text" />
                    </div>
                    <div className='Label'>
                        <label>Update Gender</label>
                        <input type="text" />
                    </div>
                    <div className='Label'>
                    <label>Update About</label>
                    <input type="text" />
                    </div>
                    <div className='buttons'>
                        <button className='update-Button' onClick={() => onSubmit()}>Update</button>
                        <button className='cancel-Button' onClick={() => onCancel()}>Cancel</button>
                    </div>
                    
                </form>
            </UpdateStyles>
        </div>
    </div>
  )
}
