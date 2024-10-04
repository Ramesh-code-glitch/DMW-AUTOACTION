import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../page/Home/Home';
import SignIn from '../page/SignIn/Singin';
import SignUp from '../page/RegPage/Signup';
import BankDetail from '../page/BankDetail/BankDetail';
import BusinessDetail from '../page/BusinessDetail/BusinessDetails'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" element={<Home />}/>
        <Route Component={SignUp} path="/Signup" element={<signup />}/>
        <Route Component={SignIn} path="/signin" element={<singin />}/>
        <Route Component={BusinessDetail} path="/businessdetail" element={<businessdetail />}/>
        <Route Component={BankDetail} path="/bankdetail" element={<bankdetail />}/>
      </Routes>
    </>
  );
};

export default Routing;
