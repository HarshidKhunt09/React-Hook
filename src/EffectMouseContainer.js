import React, { useState } from 'react'
import { EffectMouse } from './EffectMouse'

export const EffectMouseContainer = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => { setDisplay(!display) }}>Toggle Display</button>
            { display && <EffectMouse />}
        </div>
    )
}
