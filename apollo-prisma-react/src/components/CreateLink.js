import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export class CreateLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: ''
    };
  }

  handleSubmit = () => {
    throw Error('Not implemented yet...');
  };

  render() {
    return (
      <div>
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type='text'
            placeholder='A description for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{
            description: this.state.description,
            url: this.state.url
          }}
        >
          {PostMutation => <button onClick={PostMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
