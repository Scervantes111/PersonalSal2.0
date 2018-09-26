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
					<li><a href="https://twitter.com"><i class="icon-twitter"></i></a></li>
					<li><a href="https://facebook.com"><i class="icon-facebook"></i></a></li>
					<li><a href="https://instagram.com"><i class="icon-instagram"></i></a></li>
					<li><a href="https://pinterest.com"><i class="icon-pinterest"></i></a></li>
				</ul>
            </div>
        </div>
    );
}

export default Footer;