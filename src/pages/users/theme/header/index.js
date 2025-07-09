import { memo } from "react";
import './style.scss'

function Header() {
    return (
        <div className="header__top">
            <div className="container">Header</div>
        </div>
    )
}

export default memo(Header);
