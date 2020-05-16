import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function ChangeStates() {

    const [count, setCount] = useState(0)
    const [inter, setInter] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    useEffect(()=>{
        setInterval(()=>{
            setInter(pCount => pCount + 1)
        }, 1000)
    },[])

    return (
        <div style={{ margin: '3em' }}>
            <h1 style={{ color: color }}>{count}</h1>
            <h1 style={{ color: color }}>{inter}</h1>
            <button onClick={increment}>Count Up</button>
            <button onClick={() => { setCount(prevCount => prevCount - 1) }}>Count Down</button>
        </div>
    )
}

export default ChangeStates