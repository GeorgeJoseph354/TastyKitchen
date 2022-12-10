import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import logo from '../Images/logo.png'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="logo-container">
      <img className="website-logo" src={logo} alt="website-footer-logo" />
      <h1 className="logo-text">Tasty Kitchens</h1>
    </div>

    <p className="footer-para">
      <span className="color-change">E</span>xperience{' '}
      <span className="color-change">A</span>ll{' '}
      <span className="color-change">T</span>aste.
    </p>
    <p className="footer-para">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-container">
      <FaPinterestSquare
        testid="pintrest-social-icon"
        className="social-icon"
      />
      <FaInstagram testid="instagram-social-icon" className="social-icon" />
      <FaTwitter testid="twitter-social-icon" className="social-icon" />
      <FaFacebookSquare testid="facebook-social-icon" className="social-icon" />
    </div>
  </div>
)

export default Footer
