import React, { useState, useEffect } from 'react';

export const EffectCounter = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Updating titles");
        document.title = `You Clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" 
            value={name} 
            onChange={(e) => { setName(e.target.value)}}
            />
            <button onClick={() => setCount(count+1)}>Click {count} times.</button>
        </div>
    )
}
