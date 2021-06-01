import React from "react";
import Navbar from '../../components/Navbar';
import NavPanel from '../../components/NavPanel';

const NavBlock:React.FC = () => {
    return(
        <div>
            <Navbar />
            <NavPanel />
        </div>
    )
}
export default NavBlock;