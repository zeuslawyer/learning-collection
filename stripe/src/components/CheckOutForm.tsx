import React, {Component} from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

export interface Props extends ReactStripeElements.InjectedStripeProps {

}
interface State {
  complete: boolean
}

class CheckoutForm extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  testRoute = async () => {
    let response = await fetch("/test", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body : 'Zubin'
    })

    response = await response.json()

    console.log("HERE YOU Go ",  response);

    this.setState({
      complete: true
    })
  }
  async submit(ev: React.SyntheticEvent) {
    // @ts-ignore
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if (!token) throw new Error(" Information incomplete in form...")
    
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) {
      this.setState({complete: true})
    }
  }
  

  render() {
    if (this.state.complete) return <h1>Purchase Complete </h1>;

    return (
      <div className="checkout" style={{width: "50%", alignContent: "center"}}>
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
        <button onClick ={this.testRoute } style ={{backgroundColor: "green"}}>HIT ME</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);