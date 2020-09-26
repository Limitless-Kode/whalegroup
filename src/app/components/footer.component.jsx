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
                        <SocialIcon icon="ion-social-facebook" url="#"/>
                        <SocialIcon icon="ion-social-instagram" url="#" />
                        <SocialIcon icon="ion-social-twitter" url="#" />
                        <SocialIcon icon="ion-social-youtube" url="#" />
                        <SocialIcon icon="ion-social-whatsapp" url="#" />
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                Developed With &nbsp; <i className="ion-ios-heart-outline"></i>&nbsp; by Dotlogics
            </div>
        </footer>
    );
}