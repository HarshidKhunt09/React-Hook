import React, { useEffect, useRef } from 'react'

export const FocusInput = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}
