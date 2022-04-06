
import NFT from "./NFT";
import React, { useContext } from "react";
import { Context } from "../../Context";


const MyNFTs = () => {
    const { deneysel, account } = useContext(Context);
    
    return(
        <div className=' flex-column-center'>
            <span className='width-50 fs-400 fw-bold ta-center mb-3'>My NFTs</span>
            <div className="flex-center " >
                <div className="flex-center trialY" style={{backgroundColor: "#202A30", margin: "0 10%", padding: "1% 0"}} >
                    {/* <button onClick={() => getEvents("https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&toBlock=lastest&address=0x171eB6Ce223Da1c24887E9d72A65399F483e7Fc0&topic0=0x7a5477f3d257e8974dc6fb5c008b442d975968577dfad5d1283aa0a488bfab0b&apikey=3UNEPTGM1FEQUGFFRDMHED6MHWIB9KFMWZ")} className='mint-button fs-125 '>Mint-2</button> */}
                    {deneysel.map((x,i) => {

                        if(deneysel[i][1] === account.slice(2) && account !== "0x"){
                            console.log("hey")
                            return <NFT id={i} key={i}/>
                        }
                    })}
                    
                </div>

            </div>
 
        </div>
    )
}

export default MyNFTs;
