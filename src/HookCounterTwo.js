import React, { useState } from "react";

export const HookCounterTwo = () => {

    const [count, setCount] = useState(0);

    return(
        <div>
            Count : {count}
            <button onClick={() => { setCount(0)}}>Reset</button>
            <button onClick={() => { setCount(prevCount => prevCount+1)}}>Increment</button>
            <button onClick={() => { setCount(prevCount => prevCount-1)}}>Decrement</button>
        </div>
    );
}