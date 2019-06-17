import React, { Component } from 'react'

interface Props {
    displayText: String,
}
 class Card extends Component<Props> {
    render() {
        return (
            <div>
                <h3>This is a card</h3>
                   <p>Input: "{this.props.displayText}" has {this.props.displayText.length} characters</p> 
            </div>
        )
    }
}

export default Card
