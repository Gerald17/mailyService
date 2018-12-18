import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //debugger;
        return (
            <StripeCheckout
                name='PixelWand'
                description='Pay $15 for 15 credits' 
                image='https://stripe.com/img/documentation/checkout/marketplace.png' 
                currency='USD'
                amount={ 1500 } //ctvs
                token={ token => this.props.handleToken(token) }                
                stripeKey={ process.env.REACT_APP_STRIPE_KEY }
            />
        );
    }
}

function stateToProps({ auth }){
    return auth
  }  

export default connect(stateToProps, actions)(Payments);
