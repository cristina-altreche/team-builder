import React from 'react'

export default function TeamForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (

        <form>
            <div>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>
        </form>
    )
}