import React, { useContext } from "react";
import { Context } from "../../Context";



const Mint = () => {
    const { mintNFT1,mintNFT2,mintNFT3, account, balance } = useContext(Context);
    return(
        <div>
            {account !== "0x" ?
        <div className="mint-board mt-3">
            <div className='fg-2 flex-column-center tc-white fs-125 mb-2'>
                <span className="fw-bold mb-2 ">Your NFT Count: {balance}</span>
            </div>
            <div className="flex-center">
                <div className='fg-2 flex-column-center tc-white fs-125'>
                    <button onClick={() => mintNFT1()} className='mint-button fs-125 '>Mint-1</button>
                </div>

                <div className='fg-2 flex-column-center tc-white fs-125'>
                    <button onClick={() => mintNFT2()} className='mint-button fs-125 '>Mint-2</button>
                </div>

                <div className='fg-2 flex-column-center tc-white fs-125'>
                    <button onClick={() => mintNFT3()} className='mint-button fs-125 '>Mint-3</button>
                </div>
            </div>
        </div>
        : 
        <div></div>}
        </div>
    
    )
}

export default Mint;