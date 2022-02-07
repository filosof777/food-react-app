import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <i class="far fa-home-alt"></i>
          </Link>
        </li>
        <li>
          <Link to="/info">
            <i class="fal fa-badge-percent"></i>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i class="fal fa-chart-pie-alt"></i>
          </Link>
        </li>
        <li>
          <Link to="/email">
            <i class="fal fa-envelope"></i>
          </Link>
        </li>
        <li>
          <Link to="/notification">
            <i class="fal fa-bell"></i>
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <i class="fal fa-cog"></i>
          </Link>
        </li>
        <li>
          <Link to="/log-out">
            <i class="fal fa-sign-out"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
