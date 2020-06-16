import React from 'react'
import Button from '@material-ui/core/Button';

export default function TeamForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (

        <form className='form-container' onSubmit={onSubmit}>
            

            <div className='form-group inputs'>
                <h4>Enter Team Information</h4>
                {/* Username Input */}
                <label className="left">Username: &nbsp;</label>
                <input className="bottom" type='text' name='username' value={values.username} onChange={onInputChange} maxLength='100' />
                {/* Email Input */}
                <label className="left" htmlFor='emailInput'>Email:&nbsp;</label>
                <input className="bottom" id='emailInput' type='email' name='email' value={values.email} onChange={onInputChange}/>
                {/* Dropdown Select */}
                <label className="left">Role:&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>--Select a Role--</option>
                        <option value='IOS Developer'>IOS Developer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='Web Developer'>Web Developer</option>
                    </select>
                </label>
            </div>
            <div className='form-group submit'>
              <button>Add Team Member</button>
            </div>
        </form>
    )
}