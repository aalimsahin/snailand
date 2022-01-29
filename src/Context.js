import React, { createContext } from "react";
// import ABI from "./tokenABI.json";
// import { ethers } from "ethers";

export const Context = createContext(null);

export const ContextProvider = props => {
    //  const [productNumber, setProductNumber] = useState(0);
    
 
     return (<Context.Provider value={
         {
            //  productNumber, setProductNumber,
             
         }
     }>
         {props.children}
     </Context.Provider>);
};