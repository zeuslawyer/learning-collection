import * as React from 'react';
import {injectStripe} from 'react-stripe-elements';

//https://github.com/stripe/react-stripe-elements#demo


export interface IAppProps {
}

export interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
