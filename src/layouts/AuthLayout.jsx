// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
      <div className="py-3 w-11/12 mx-auto font-poppins bg-[#f3f3f3]">
        <header>
          <Navbar></Navbar>
        </header>
            <Outlet>
                
        </Outlet>
      </div>
    );
};

export default AuthLayout;