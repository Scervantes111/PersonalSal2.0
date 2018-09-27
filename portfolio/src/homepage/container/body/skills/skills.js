import React from 'react';

import './skills.css';
 
const Skills = () => {
    return (
        <div className='skills'>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front'>
                        <h2>
                            <a href='/' alt='HTML 5'> HTML 5</a>
                        </h2>
                    </div>
                    <div className='backContent back'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>   
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front'>
                        <h2>
                            <a href='/' alt='CSS 3'> CSS 3 </a>
                        </h2>
                    </div>
                    <div className='backContent back'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front'>
                        <h2>
                            <a href='/' alt='JavaScript'> JavaScript </a>
                        </h2>
                    </div>
                    <div className='backContent'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front'>
                        <h2>
                            <a href='/' alt='React'> React </a>
                        </h2>
                    </div>
                    <div className='backContent'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front'>
                        <h2>
                            <a href='/' alt='Angular and Vue'> Angular/Vue </a>
                        </h2>
                    </div>
                    <div className='backContent back'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillBox flip'>
                    <div className='skillContent front google'>
                        <h2>
                            <a href='/' alt='Google'> Google </a>
                        </h2>
                    </div>
                    <div className='backContent back'>
                        <h2>
                            <p>This is the back</p>
                        </h2>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Skills;