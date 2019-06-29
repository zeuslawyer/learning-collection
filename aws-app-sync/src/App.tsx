import * as React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { createBlog } from './graphql/mutations';
import { Form } from './Components/Form';

export default class App extends React.PureComponent {
  state = {
    response: '',
    loading: false
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Connect mutation={graphqlOperation(createBlog)}>
          {({ mutation }: any) => (
            <Form
              onSubmit={async input => {
                this.setState({ loading: !this.state.loading });
                const response = await mutation({ input });
                this.setState({ response }, () =>
                  this.setState({ loading: !this.state.loading })
                );
              }}
            />
          )}
        </Connect>
        {this.state.loading && <div>...LOADING...</div>}
      </div>
    );
  }
}
