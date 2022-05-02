import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from './HeaderStyle';

const logoff = () => {
    localStorage.clear();
}
const Header = (auth) => (
    <Menu>
        <NavLink
            className="navLink"
            to="/home">
            <div >
                <p>HOME novo Branche</p>
            </div>
        </NavLink>
        <NavLink
            className="navLink"
            to="/bid">
            <div >
                <p>BID</p>
            </div>
        </NavLink>
        {auth.auth &&
            <NavLink
                className="navLink"
                to="/registro">
                <div >
                    <p>Registro</p>
                </div>
            </NavLink>
        }
        {auth.auth &&
            <NavLink
                className="navLink"
                to="/mensalidade"
            >
                <div>
                    <p>Mensalidade</p>
                </div>
            </NavLink>
        }
        <NavLink
            className="navLink"
            to="/login"
            onClick={logoff}
        >
            <div>
                <p>Logoff</p>
            </div>
        </NavLink>
    </Menu>
);

export default Header;