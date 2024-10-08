import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../page/Home/Home';
import SignIn from '../page/SignIn/Singin';
import SignUp from '../page/SingUp/Signup';
import BankDetail from '../page/BankDetail/BankDetail';
import BusinessDetail from '../page/BusinessDetail/BusinessDetails';
import FeatureCategories from "../component/FCategorie/FCategorie";
import searchpage from '../page/Search/searchpage/searchpage'
import SubCatagory1 from '../page/Search/SubCatagory1/body';
import SubCatagory2 from '../page/Search/SubCatagory2/break';
import SubCatagory3 from '../page/Search/SubCatagory3/elight';
import SubCatagory4 from '../page/Search/SubCatagory4/cooling';




const Routing = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" element={<Home />}/>
        <Route Component={SignUp} path="/Signup" element={<signup />}/>
        <Route Component={SignIn} path="/signin" element={<singin />}/>
        <Route Component={BusinessDetail} path="/businessdetail" element={<businessdetail />}/>
        <Route Component={BankDetail} path="/bankdetail" element={<bankdetail />}/>
        <Route Component={FeatureCategories} path="/" element={<FeatureCategories />}/>
        <Route Component={searchpage} path="/searchpage" element={<searchpage/>} />
        <Route Component={SubCatagory1} path="/body" element={<body />} />
        <Route Component={SubCatagory2} path="/break" element={<break />} />
        <Route Component={SubCatagory3} path="/elight" element={<elight />} />
        <Route Component={SubCatagory4} path="/cooling" element={<cooling />} />
      
      </Routes>
    </>
  );
};

export default Routing;
