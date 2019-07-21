import React from 'react'

interface Props {
    sectionName: string
}

function SectionDivider(props:Props) {
    return (
        <div style={{background: "yellow"}}>
            Hey there, {props.sectionName}
        </div>
    )
}

export default SectionDivider
