import React from 'react';
import ContactInfo from './contactInfo/contactInfo';

import './ContactMe.css';
import Image from '../../../../../imgs/mnt.jpg';


const ContactMe = () => {
    return (
        <div className='contactAlign'>
            <div className='contactImage'>
                <img src={Image} alt='image' />
            </div>
            <ContactInfo />
            <div className='callback'>
                <p>
                    I am best reached by Email but I will respond back to calls and text. Just make sure to leave your name, and reason so I can know when to best call you back.
                </p>
            </div>
        </div>
    );
}

export default ContactMe;