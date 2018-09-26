import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='leftFooter'>
               <h1>PS</h1>
            </div>
            <div className="middleFooter">
                <div>
                    Contact me:
                </div>
                <div>
                    <p>Phone number</p>
                    <p>678-221-6418</p>
                </div>
                <div>
                    <p>Email:</p>
                    <p>Scervantes111@gmail.com</p>
                </div>
                <div className='copyright'>
                        &copy; PersonalSal 2018
                </div>
            </div>
            <div className="rightFooter">
                <ul>
					<li><a href="https://twitter.com/PersonalSal?lang=en"><i class="icon-twitter"></i></a></li>
					<li><a href="https://www.facebook.com/salvador.cervantes.378537"><i class="icon-facebook"></i></a></li>
					<li><a href="https://www.instagram.com/sal_v9/"><i class="icon-instagram"></i></a></li>
					<li><a href="https://www.linkedin.com/in/salvador-cervantes-55b97956/"><i class="icon-linkedin"></i></a></li>
				</ul>
            </div>
        </div>
    );
}

export default Footer;