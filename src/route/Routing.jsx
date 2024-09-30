import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../page/Home/Home';
import SearchP1 from '../page/SearchP/SearchP1'
import SignIn from '../page/SingIn/SingIn';
import Registation from '../page/Registation/Registation';
import BankDetail from '../page/BankDetail/BankDetail';
import BusinessDetail from '../page/BusinessDetail/BusinessDetails'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" element={<Home />}/>
        <Route Component={SearchP1} path="/search" element={<SearchP1 />}/>
        <Route Component={Registation} path="/registation" element={<registation />}/>
        <Route Component={SignIn} path="/singin" element={<singin />}/>
        <Route Component={BusinessDetail} path="/businessdetail" element={<businessdetail />}/>
        <Route Component={BankDetail} path="/bankdetail" element={<bankdetail />}/>
      </Routes>
    </>
  );
};

export default Routing;
