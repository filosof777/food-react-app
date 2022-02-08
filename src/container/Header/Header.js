import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../../src/assets/icons/logo.svg";
import { ReactComponent as Home } from "../../../src/assets/icons/home.svg";
import { ReactComponent as Precent } from "../../../src/assets/icons/precent.svg";
import { ReactComponent as Chart } from "../../../src/assets/icons/chart.svg";
import { ReactComponent as Email } from "../../../src/assets/icons/email.svg";
import { ReactComponent as Bell } from "../../../src/assets/icons/bell.svg";
import { ReactComponent as Setting } from "../../../src/assets/icons/setting.svg";
import { ReactComponent as LogOut } from "../../../src/assets/icons/log-out.svg";

function Header() {
  return (
    <header className="Header">
      <Link className="Logo" to="/">
        <Logo />
      </Link>
      <ul className="List">
        <li>
          <NavLink to="/">
            <span>
              <Home />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notification">
            <Precent />
          </NavLink>
        </li>
        <li>
          <NavLink to="/info">
            <Chart />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <Email />
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <Bell />
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <Setting />
          </NavLink>
        </li>
      </ul>
      <NavLink className="LogOut" to="/log-out">
        <LogOut />
      </NavLink>
    </header>
  );
}

export default Header;
