import React from 'react'
import UpdateStyles from '../Styles/UpdateStyles'

function Update() {
    return (
        <UpdateStyles>
            <form>
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
                <button className='update-Button'>Update</button>
            </form>
        </UpdateStyles>
    )
}

export default Update