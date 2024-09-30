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
        
        <Link to="/" className="logo">
          <img className="logo-img" src="/AutoAction DMW Logo.png" alt="Logo" />
        </Link>

        <ul className="items">
         
          <li className="email">
            <HiMail className="icon" />
            <div>
              <span className="Email">BUSINESS@MARIPOSADIGITAL.COM</span>
              <br />
              <span className="text-sm">Hour: 09:00am - 06:00pm</span>
            </div>
          </li>

          <li className="contact">
            <BiSolidPhoneCall className="icon" />
            <div>
              <span className="Phone">8617378821</span>
              <br />
              <span className="text-sm">(Free Call)</span>
            </div>
          </li>

          <li className="singin">
            <MdAccountCircle className="icon" />
            <div>
              <span className="SingIn">
                <Link to="/LoginPage">SIGN-IN</Link>
              </span>
              <br />
              <span className="text-sm">Lead Area</span>
            </div>
          </li>
          <Button
            className="Supplier"
            width="8rem"
            text="BECOME A SUPPLIER➡"
            height="2rem"
            fontSize="0.5rem"
            fontWeight="10"
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
