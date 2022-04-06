import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from "./tokenABI.json";
import { useMoralisWeb3Api } from "react-moralis"

export const Context = createContext(null);

export const ContextProvider = props => {
    const Web3Api = useMoralisWeb3Api();
    const [account, setAccount] = useState("0x");
    const [balance, setBalance] = useState(0);
    // const [events, setEvents] = useState([]);
    // const [events2, setEvents2] = useState({});
    const [deneysel,setDeneysel] = useState([]);
    const deneyse = () => {
      if(deneysel.length < 10) {

        let y = []
        for(var i = 0; i < 10000; i++) {
          y.push([0,""])
        }
        setDeneysel(y);
      }
    }
    if(deneysel.length < 10){
      deneyse() 
    }

    let TOKEN_ADDRESS = "0x171eB6Ce223Da1c24887E9d72A65399F483e7Fc0";

    const fetchBlock = async () => {
      const options = { chain: "rinkeby", block_number_or_hash: "10338685" };
      const result = await Web3Api.native.getBlock(options);
      console.log(result);
    };

    const connectMetaMask = async () => {
      fetchBlock()
      
        if (window.ethereum) {
          if (window.ethereum.selectedAddress === null) {
            let accounts = await window.ethereum
              .request({ method: "eth_requestAccounts" })
              .catch((err) => {
                console.log(err.code);
              });
            setAccount(accounts[0])
          }
    
          if (window.ethereum.chainId === "0x4") { 
            let accounts = await window.ethereum
              .request({ method: "eth_requestAccounts" })
              .catch((err) => {
                console.log(err.code);
              });
            setAccount(accounts[0]);
            getNFTCount(accounts[0])
          } else {
            try {
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x4' }],
                });
              } catch (e) {
                if (e.code === 4902) {
                  try {
                    await window.ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                        {
                          chainId: '0x4',
                          chainName: 'Rinkeby Test Network',
                          nativeCurrency: {
                            name: 'Ether',
                            symbol: 'ETH', // 2-6 characters long
                            decimals: 18
                          },
                          blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
                          rpcUrls: ['https://rinkeby.infura.io/v3/'],
                        },
                      ],
                    });
                  } catch (addError) {
                    console.error(addError);
                  }
                }
                // console.error(e)
              }
          }
          // eventsss
          getEvents("https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&toBlock=lastest&address=0x171eB6Ce223Da1c24887E9d72A65399F483e7Fc0&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&apikey=3UNEPTGM1FEQUGFFRDMHED6MHWIB9KFMWZ");  
        } else {
          console.log("Metamask ile ilgili bir problem var !!!")
        }
    }

      // const connectMetaMaskPRB = async () => {
      //   console.log(ABI);
      //     if (window.ethereum) {
      //       if (window.ethereum.selectedAddress === null) {
      //         let accounts = await window.ethereum
      //           .request({ method: "eth_requestAccounts" })
      //           .catch((err) => {
      //             console.log(err.code);
      //           });
      //         setAccount(accounts[0])
      //         console.log(account);
  
      //       }
      
      //       if (window.ethereum.chainId === "0xD48") { 
      //         let accounts = await window.ethereum
      //           .request({ method: "eth_requestAccounts" })
      //           .catch((err) => {
      //             console.log(err.code);
      //           });
                
      //         setAccount(accounts[0]);
      //         console.log("acc",accounts[0])
  
      //         getNFTCount(accounts[0])

      //       } else {
      //         //this.colors("no");
      //         try {
      //             await window.ethereum.request({
      //               method: 'wallet_switchEthereumChain',
      //               params: [{ chainId: '0xD48' }],
      //             });
      //           } catch (e) {
      //             if (e.code === 4902) {
      //               try {
      //                 await window.ethereum.request({
      //                   method: 'wallet_addEthereumChain',
      //                   params: [
      //                     {
      //                       chainId: '0xD48',
      //                       chainName: 'Paribu Net',
      //                       nativeCurrency: {
      //                         name: 'Paribu',
      //                         symbol: 'PRB', // 2-6 characters long
      //                         decimals: 18
      //                       },
      //                       blockExplorerUrls: ['https://explorer.paribu.network'],
      //                       rpcUrls: ['https://rpc.paribu.network'],
      //                     },
      //                   ],
      //                 });
      //               } catch (addError) {
      //                 console.error(addError);
      //               }
      //             }
      //             // console.error(e)
      //           }
      //       }
      //       console.log(account)
      //     } else {
      //       console.log("Metamask ile ilgili bir problem var !!!")
      //     }
      //   }

      const getNFTCount = async (x) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          TOKEN_ADDRESS,
          ABI,
          signer
        );

        let balance = await contract.balanceOf(x);
        setBalance(parseInt(balance._hex, 16));
      }

      useEffect(() => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            TOKEN_ADDRESS,
            ABI,
            signer
          );
          contract.on("MintedNFT", () => {
            getNFTCount(account);
          })
      });

      const mintNFT1 = async () => {
        if (account !== "0x") {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            TOKEN_ADDRESS,
            ABI,
            signer
          );  
          try {
            const response = await contract.mintNFT(1,{ from: account, value: "300000000000000000" });
            console.log("response: ", response);
            getNFTCount(account);
          } catch (err) {
            console.log("error: " + err);
          }
        }
      }
      const mintNFT2 = async () => {
        if (account !== "0x") {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            TOKEN_ADDRESS,
            ABI,
            signer
          );
                
          try {
            const response = await contract.mintNFT(2,{ from: account, value: "400000000000000000" });
            console.log("response: ", response);
            getNFTCount(account);
          } catch (err) {
            console.log("error: " + err);
          }
        }
      }
      const mintNFT3 = async () => {
        if (account !== "0x") {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            TOKEN_ADDRESS,
            ABI,
            signer
          );
          
          try {
            const response = await contract.mintNFT(3,{ from: account, value: "500000000000000000" });
            console.log("response: ", response);
            getNFTCount(account);
          } catch (err) {
            console.log("error: " + err);
          }
        }
      }

      const getapi = async (url) => {
        let response = await fetch(url)
        response = response.json();
        return response;
      }

      const getTrial = async (url) => {
        let response = await fetch(url)
        response = response.json();
        console.log(response);
      }

      getTrial("https://api.covalenthq.com/v1/43114/address/0x114B242D931B47D5cDcEe7AF065856f70ee278C4/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_1c56a51b5de9463fa8f4dbec5ec");

      

    const getEvents = async (url) => {
        await getapi(url)
        .then(x => {
          // var events3 = {}
          for(var i = 0; i < x.result.length; i++){
            // events3[parseInt(x.result[i].topics[3].slice(62), 16)] = x.result[i].topics[2].slice(26);
            deneysel[i] = [parseInt(x.result[i].topics[3].slice(62), 16),x.result[i].topics[2].slice(26)];
            setDeneysel(deneysel);
            // if((i+1) === x.result.length){
            //   console.log(deneysel)
            //   setEvents2(events3)
            // }
                  
          }
        })
    }
      
     return (<Context.Provider value={
         {
             account,
             setAccount, 
             connectMetaMask,
            //  connectMetaMaskPRB,
             mintNFT1,
             mintNFT2,
             mintNFT3,
             balance,
             deneysel
            //  events2
         }
     }>
         {props.children}
     </Context.Provider>);
};