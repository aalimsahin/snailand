import { FaDiscord, FaTwitter } from "react-icons/fa";

const DashboardFooter = () => {
    return(
        <div className='fg-1 flex-column-center'>
            <div>
                <span style={{marginRight: "10px"}}>
                    <a href="https://twitter.com/ITUblockchain" target="_blank" rel="noopener noreferrer">        
                        <FaTwitter size="3em" color="white"/>
                    </a>
                    
                </span>
                
                <span style={{marginLeft: "10px"}}>
                    <a href="https://twitter.com/ITUblockchain" target="_blank" rel="noopener noreferrer">        
                        <FaDiscord size="3em" color="white"/>
                    </a>
                </span>
            </div>
            <span className="tc-white mt-1 mb-1">CopyRight 2.0 | SnaiLand</span> 
        </div>
    )
}

export default DashboardFooter;