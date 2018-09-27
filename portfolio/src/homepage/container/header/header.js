import React from 'react';
import Links from './links/links';

import './header.css';

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">PS</h1>
                <div className='App-links'>
                    <Links />
                </div>
            </header>
        </div>
    )
}

export default Header;

