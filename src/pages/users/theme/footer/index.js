import { memo } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h1 className="footer__about-logo">PL SHOP</h1>
              <ul className="footer__about-info">
                <li>Address: 147 Tran Cao Van</li>
                <li>Phone: 0348751577</li>
                <li>Email: plshop@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h5>Store</h5>
              <ul>
                <li>
                  <Link to={""}>Contact</Link>
                </li>
                <li>
                  <Link to={""}>About us</Link>
                </li>
                <li>
                  <Link to={""}>Business product</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Account infomation</Link>
                </li>
                <li>
                  <Link to={""}>Cart</Link>
                </li>
                <li>
                  <Link to={""}>Favorites list</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h5>Promotions & Offers</h5>
              <p>Sign up for infomation here</p>
              <form>
                <div className="input-group">
                  <input type="text" placeholder="Enter email..." />
                  <button type="submit" className="btn-submit">
                    Register
                  </button>
                </div>
              </form>
              <div className="footer__widget-social">
                <div className="footer__widget-social-icon">
                  <AiOutlineFacebook />
                </div>
                <div className="footer__widget-social-icon">
                  <AiOutlineInstagram />
                </div>
                <div className="footer__widget-social-icon">
                  <AiOutlineLinkedin />
                </div>
                <div className="footer__widget-social-icon">
                  <AiOutlineTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
