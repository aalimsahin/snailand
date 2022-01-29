import './styles/App.css';
import './styles/Common.css'
import './styles/Dashboard.css';
import './styles/Homepage.css';
// import React, { useContext , useEffect, useState } from "react";
// import { Context } from "../Context";
import Dashboard from "./components/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";

function App() {
  // const { account, getConnectedAccount } = useContext(Context);
  return (
    <div className='flex'>
      <div className="dashboard" >
          <Dashboard />
      </div>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
