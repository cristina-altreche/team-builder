import React from 'react'

export default function TeamForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (

        <form>
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Enter Team information</h4>
                {/* Username Input */}
                <label>Username: &nbsp;</label>
                <input type='text' name='username' value={values.username} onChange={onInputChange} maxLength='100' />
                {/* Email Input */}
                <label htmlFor='emailInput'>Email:&nbsp;</label>
                <input id='emailInput' type='email' name='email' value={values.email} onChange={onInputChange}/>
                {/* Dropdown Select */}
                <label>Role:&nbsp;
                    <select name='role' onChange={onInputChange}>
                        <option value=''>--Select a Role--</option>
                        <option value='IOS Developer'>IOS Developer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='Web Developer'>Web Developer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}