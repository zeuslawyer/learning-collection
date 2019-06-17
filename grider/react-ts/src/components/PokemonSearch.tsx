import React, { Component } from 'react'
import Card from './Card'

interface Props {
    name: String,
    numberOfPokemons: Number,
    callback: Function
}

export class PokemonSearch extends Component<Props> {
  state ={
    input: ""
  }

  handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(
      {input: event.target.value}, 
      ()=>{
      this.props.callback(this.state.input.length)
      })
    
  }

  /** takes a Props interface and returns a string */
  getString = (props: Props): String => {
    return JSON.stringify(props, null, 2)
  }

  render() {
    console.log(this.state.input.length);
    return (
      <div>
        {`${this.props.name} has ${this.props.numberOfPokemons} pokemons!`}
        <hr />
        <div>
            {this.getString(this.props)}
        </div>
        <hr />
        <div>
          <input value = {this.state.input} onChange={event=>this.handleInput(event)}/>
          <Card displayText = {this.state.input} />
        </div>

      </div>
    )
  }
}

export default PokemonSearch
