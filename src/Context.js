import React, { createContext, useState } from "react";
import MyAlgoWallet  from '@randlabs/myalgo-connect';

// import ABI from "./tokenABI.json";
// import { ethers } from "ethers";

export const Context = createContext(null);

export const ContextProvider = props => {
    
    const [account, setAccount] = useState("0x");
    const myAlgoWallet = new MyAlgoWallet;
    // const myAlgoWallet = new MyAlgo();

    const connect = async () => {
        
        const a = await myAlgoWallet.connect()
        setAccount(a[0].address)
        console.log(account);
    }
 
     return (<Context.Provider value={
         {
             account, setAccount, connect
             
         }
     }>
         {props.children}
     </Context.Provider>);
};