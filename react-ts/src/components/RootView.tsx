import React, { Component } from 'react'
import PokemonSearch from './PokemonSearch';



interface State  {
    count: Number,
}

export class RootView extends Component {
    state = {
        inputTextCount: 0
    }

    updateTextCount = (charCount: Number): void => {
        this.setState({inputTextCount: charCount})
    }
    render() {
        return (
            <div>
                <PokemonSearch name="Zubie Mon" numberOfPokemons={5} callback = {this.updateTextCount}/>
            </div>
        )
    }
}

export default RootView
