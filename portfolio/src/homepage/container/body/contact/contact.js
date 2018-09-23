import React from 'react';
import Quote from './quote/quote';
import ContactMe from './contactMe/contactMe';

import './contact.css';

const Contact = () => {
    return (
        <div className="contactBody">
            <Quote />
            <ContactMe />
        </div>
    );
}

export default Contact;