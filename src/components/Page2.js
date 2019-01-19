import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Page2 = () => {
	return(
		<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Link to='/'><button>Page1</button></Link>
          <Link to='/page2'><button className="disabled">Page2</button></Link>
          <Link to='/page3'><button>Page3</button></Link>
        </div>
	);
}

export default Page2;