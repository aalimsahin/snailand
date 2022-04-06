import React, { useContext } from "react";
import { Context } from "../../Context";

const ConnectMyAlgo = () => {
    const { account, setAccount, connectMetaMask } = useContext(Context);
    return(
        <div className='fg-3 flex-column-center'>
            {account.length < 10
            ?
            <button onClick={() => connectMetaMask()} className='myalgo-button2 fs-125'>Connect Metamask</button>
            :
            <div className="flex-column-center">
                
                <button className='myalgo-button1 fs-125 mt-5'>
                    <div className="flex-center">
                        <div>
                        <span className="dashboard-header mt-3 tc-white fs-150"> {account.slice(0,5) + ".." + account.slice(-5,-1) }</span>
                        </div>
                        <div>
                            <button onClick={() => setAccount("0x")} className='myalgo-button fs-125 mt-5'>x</button>
                        </div>
                    </div>
                </button>
            </div>
            }
        </div>
    )
}

export default ConnectMyAlgo;