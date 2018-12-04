import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">                
                <a class="navbar-item" href="https://bulma.io">
                    <img alt="bulma logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
            </div>
        </nav>
         );
    }
}
 
export default Header;