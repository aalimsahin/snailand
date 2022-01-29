
const Roadmap = () => {
    return(
        <div className='height-100vh flex-column-center'>
            <span className='width-50 fs-400 fw-bold ta-center mb-3'>Roadmap</span>
            <div className='flex'>
                <div className='roadmap-left flex-column'>
                    <span className='roadmap-header-left fs-250' >Q1 2022</span>
                    <span className='mt-5 fs-150 ta-right fw-bold'>Market UI Update •</span>
                    <span className='mt-5 fs-150 ta-right fw-bold'>ERC1155 Avax Apes Christmas Airdrop •</span>
                    <span className="ta-right fs-135 mt-2" >A set of limited edition Christmas ALGO Snails <br/>
                    dropped to ALGO Snails based on number of<br/>
                    holdings and rarity of holdings. The snapshot<br/>
                    of holders will be taken in early December.</span>
                </div>
                <div className='roadmap-right flex-column'>
                    <span className='roadmap-header-right fs-250' >Q2 2022</span>
                    <span className='mt-5 fs-150 fw-bold'>• ALGO Snails Gen 2. A unique NFT</span>
                    <span className='mt-5 fs-150 fw-bold'>• ALGO Snails Merch Store</span>
                    <span className='roadmap-header-right fs-250 mt-3' >Q3 2022</span>
                    <span className='mt-5 fs-150 fw-bold'>• The ALGO Snails Pixel Canvas</span>
                    <span className="fs-135 mt-2">A common pixel canvas for ALGO Snails holders</span>
                </div>
            </div>
 
 
        </div>
    )
}

export default Roadmap;