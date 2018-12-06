import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Header extends Component {
    
  renderContent() {
    const auth = this.props.auth;
    switch (auth) {
      case null:  
        return
      case false:  
          return (              
            <a href='/auth/google' className='button is-primary'>
                Google Login
            </a>
          )
      default:
         return (
             <React.Fragment>
                <h5>Bienvenido</h5> | 
                <a href='/api/logout'>Logout</a>
            </React.Fragment>
            )
    }
  }
  
    render() { 
        const auth = this.props.auth;
        return ( 
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>                
                <Link className='navbar-item' to={auth ? '/dashboard' : '/'}>
                    <img alt='bulma logo' src='https://bulma.io/images/bulma-logo.png' width='112' height='28'/>
                </Link>            

                <div role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </div>
            </div>
            
            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            { this.renderContent() }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
         );
    }
}
 
function mapStateToProps({ auth }){
    return auth
  }
  
  export default connect(mapStateToProps, actions)(Header);