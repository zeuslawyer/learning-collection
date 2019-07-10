import * as React from 'react';

interface State {
  [key: string]: string;
  name: string;
}
interface Props {
  onSubmit: (formValues: State) => void;
}
interface IFormEvent  {
  target: { name: string; value: string };
}

class InputForm extends React.PureComponent<Props, State> {
  state = {
    name: ''
  };

  handleChange = (e: IFormEvent) => {
    const { value } = e.target;
    this.setState({ name: value } as State);
  };
  
  render() {
    return (
      <form
        onSubmit={async e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }}
      >
        <h3>Create Blog</h3>
        <input
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type='submit'>save</button>
      </form>
    );
  }
}

export const Form = InputForm;
