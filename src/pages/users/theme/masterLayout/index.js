import { memo } from "react";
import Footer from "../footer";
import Header from "../header";

function MasterLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default memo(MasterLayout);