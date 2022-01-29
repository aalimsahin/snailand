import React, { useContext } from "react";
import { Context } from "../../Context";

const ConnectMyAlgo = () => {
    const { account, setAccount, connect } = useContext(Context);
    return(
        <div className='fg-3 flex-column-center'>
            {account.length < 10
            ?
            <button onClick={() => connect()} className='myalgo-button fs-125'>Connect MyAlgo</button>
            :
            <div className="flex-column-center">
                <span className="dashboard-header mt-3 tc-white fs-150"> {account.slice(0,9) + "..." + account.slice(-10,-1) }</span>
                <button onClick={() => setAccount("0x")} className='myalgo-button fs-125 mt-5'>Disconnect</button>
            </div>
            }
        </div>
    )
}

export default ConnectMyAlgo;