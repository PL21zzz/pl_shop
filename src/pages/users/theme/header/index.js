import { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import "./style.scss";
import { format } from "utils/formater";

function Header() {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top-left">
            <ul>
              <li>
                <IoMailOutline />
                plshop@gmail.com
              </li>
              <li>Free ship for order over {format(200000)}</li>
            </ul>
          </div>
          <div className="col-6 header__top-right">
            <ul>
              <li>
                <Link to={""}>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaRegUser />
                </Link>
                <span>Login</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
