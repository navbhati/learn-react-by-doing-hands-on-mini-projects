import React from 'react';

function FormsComponent(props) {
    return (
        <div style={{ marginBottom: '1em', padding: '1em 2em', backgroundColor: '#f7d559' }}>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.firstName}
                    name="firstName"
                    onChange={props.handleChange} />
                <br />
                <br />
                <input
                    type="text"
                    value={props.lastName}
                    name="lastName"
                    onChange={props.handleChange} />
                <br />

                <br />
                <textarea name="" value={"Please add some text here..."} id="" cols="80" rows="10" onChange={props.handleChange} />

                <br />
                <label>
                    <input
                        name="isChecked"
                        type="checkbox"
                        checked={props.isChecked}
                        onChange={props.handleChange} />
                            Is checked?
                    </label>

                <br />
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="male"
                        checked={props.gender === 'male'}
                        onChange={props.handleChange} />
                            Male
                    </label>

                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="female"
                        checked={props.gender === 'female'}
                        onChange={props.handleChange} />
                            Female
                    </label>

                <br />
                <label>Favorite Color:</label>
                <select
                    name="favColor"
                    onChange={props.handleChange}
                    value={props.favColor}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="black">Black</option>
                </select>
                <br />
                <button>Submit</button>
            </form>

            <p>{props.firstName} {props.lastName}</p>
            <h4>You are a {props.gender}</h4>
            <h4>Your favorite color is {props.favColor}</h4>
        </div>
    )
}

export default FormsComponent