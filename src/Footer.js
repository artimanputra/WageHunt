import React from 'react';
import './Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top--left">
                    <h1>WageHunt</h1>
                    <p><LanguageIcon></LanguageIcon> &nbsp; US (International)/Engpsh</p>
                    <p><HelpIcon></HelpIcon> &nbsp; Help & Support</p>
                </div>
                <div className="footer__top--right">
                    <div className="footer__top--right-one">
                        <h4>Workers</h4>
                        <p>Categories</p>
                        <p>Categories</p>
                        <p>Projects</p>
                        <p>Labour</p>
                        <p>Preferred Workers</p>
                        <p>Local Jobs</p>
                        <p>Showcase</p>
                        <p>Get Verified</p>
                    </div>
                    <div className="footer__top--right-two">
                        <h4>About</h4>
                        <p>About Us</p>
                        <p>How it Works</p>
                        <p>Quotes</p>
                        <p>News</p>

                    </div>
                    <div className="footer__top--right-three">
                        <h4>Terms</h4>
                        <p>Privacy Popcy</p>
                        <p>Terms and Conditions</p>
                        <p>Copyright Popcy</p>
                        <p>Code of Conduct</p>
                        <p>Fees and Charges</p>

                    </div>
                    <div className="footer__top--right-four">
                        <p>
                            <FacebookIcon></FacebookIcon>
                            <TwitterIcon></TwitterIcon>
                            <YouTubeIcon></YouTubeIcon>
                            <InstagramIcon></InstagramIcon>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer__bottom">
                <p>
                Copyright © 2023 WageHunt         </p>

            </div>

        </div>
    )
}

export default Footer
