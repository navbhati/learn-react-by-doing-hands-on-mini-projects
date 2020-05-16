import React from 'react';

function handelClick() {
    console.log('I was clicked');
}

function EventHandling() {
    return (
        <div className='eventHandling'>
            {/* <img onMouseOver={()=>console.log('Image Hovered!')} */}
            <img src="https://picsum.photos/500/200" alt="Random" />
            <br />
            <br />
            <button onClick={handelClick}>Click me!</button>
        </div>
    )
}

export default EventHandling