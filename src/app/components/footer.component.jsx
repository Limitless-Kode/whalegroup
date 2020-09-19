import React from 'react';
import SocialIcon from './socialIcon.component';

export default function Footer(props) {
    return(
        <footer className="footer">
            <div className="footer__social">
                <div className="footer__social__subscribe">
                    <h5>Stay Updated</h5>
                    <form action="">
                        <input type="email" placeholder="Your email address"/>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="footer__social__links">
                    <h5>Let's Get Social</h5>
                    <div className="footer__social__icons">
                        <SocialIcon icon="ion-social-facebook" styles={{backgroundColor: '#3b5998'}} url="#"/>
                        <SocialIcon icon="ion-social-instagram" styles={{backgroundColor: '#bb1500'}} url="#" />
                        <SocialIcon icon="ion-social-twitter" styles={{backgroundColor: '#3498db'}} url="#" />
                        <SocialIcon icon="ion-social-youtube" styles={{backgroundColor: '#ff0000'}} url="#" />
                        <SocialIcon icon="ion-social-whatsapp" styles={{backgroundColor: '#1bd100'}} url="#" />
                    </div>
                </div>
            </div>
        </footer>
    );
}