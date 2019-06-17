import React from 'react'

interface Props {
    greeting: string
}

function random(props:Props) {
    return (
        <div style={{background: "blue"}}>
            Hey there, {props.greeting}
        </div>
    )
}

export default random
