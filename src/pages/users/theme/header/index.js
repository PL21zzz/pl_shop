import { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa6";
import { IoMailOutline, IoCart } from "react-icons/io5";
import "./style.scss";
import { format } from "utils/formater";
import { ROUTER } from "utils/router";

function Header() {
  const [menus, setMenus] = useState([
    {
      name: "Home",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Store",
      path: ROUTER.USER.STORE,
    },
    {
      name: "Product",
      path: ROUTER.USER.PRODUCT,
      isShowSubMenu: false,
      childs: [
        {
          name: "Meat",
          path: "",
        },
        {
          name: "Vegetables",
          path: "",
        },
        {
          name: "Beverage",
          path: "",
        },
      ],
    },
    {
      name: "Blog",
      path: ROUTER.USER.BLOG,
    },
    {
      name: "Contact",
      path: ROUTER.USER.CONTACT,
    },
  ]);

  return (
    <>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>PL SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, i) => (
                  <li key={i} className={i === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.childs && (
                      <ul className="header__menu-dropdown">
                        {menu.childs.map((child, index) => (
                          <li key={index}>
                            <Link to={child.path}>{child.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart-price">
                <span>{format(1418000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <IoCart />
                    <span>8</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
