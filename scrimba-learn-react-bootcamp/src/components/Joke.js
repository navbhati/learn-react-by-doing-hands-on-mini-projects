import React from 'react';

function Joke(props) {
    console.log(props.jokes);

    return (
        <ul className='jokes'>
            {
                props.jokes.map(j =>
                    <li>
                        <h3> Joke: {j.joke}</h3>
                        <p style={{ display: j.punchline ? 'block' : 'none' }}>Punchline: {j.punchline}</p>
                    </li>)
            }
        </ul>
    )
}

export default Joke 