import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-flex">
        {/* Logo */}
        <Link to="/home" className="logo">
          <img className="logo-img" src="/AutoAction DMW Logo.png" alt="Logo" />
        </Link>

        <ul className="items">
          {/* Email Section */}
          <li className="email">
            <HiMail className="icon" />
            <div>
              <span className="text-bold">BUSINESS@MARIPOSADIGITAL.COM</span>
              <br />
              <span className="text-sm text-gray">Hour: 09:00am - 06:00pm</span>
            </div>
          </li>

          {/* Phone Section */}
          <li className="contact">
            <BiSolidPhoneCall className="icon" />
            <div>
              <span className="text-bold">8617378821</span>
              <br />
              <span className="text-sm text-gray">(Free Call)</span>
            </div>
          </li>

          {/* Sign-In Section */}
          <li className="singin">
            <MdAccountCircle className="icon" />
            <div>
              <span className="text-center">
                <Link to="/LoginPage">SIGN-IN</Link>
              </span>
              <br />
              <span className="text-sm text-gray">Lead Area</span>
            </div>
          </li>
          <Button
            className="Supplier"
            width="15rem"
            text="BECOME A SUPPLIER➡"
            height="3rem"
            fontSize="1.0rem"
            fontWeight="20"
            background="#00000"
            color="#FFFFFF"
            event={() => {
              navigate("/registration");
            }}
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
