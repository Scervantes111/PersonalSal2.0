import React from 'react';
import AboutMe from './aboutme/aboutme';
import Skills from './skills/skills';
import Footer from '../footer/footer';
import Contact from './contact/contact';

import './body.css';

const Body = () => {
    return (
      <div className="bodyCenter">
        <div className='bodyAbout'>
            <AboutMe />
        </div>
        <div className='bodySkills'>
            <Skills />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Footer />
        </div>
      </div>  
    );
}

export default Body;