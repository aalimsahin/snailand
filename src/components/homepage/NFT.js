// import A from "../../assets/discord.png"
const NFT = ({id}) => {
    return(

            <div className="box">
                <div id="h2">
                    <div className="nft-package flex-column-center">
                        <span className='fs-125 fw-bold nft-number' >#{id}</span>
                        <img id="x" src={`https://gateway.pinata.cloud/ipfs/QmZy8XZxyCTfMdNneQvPCdbfxCjf4UEtZWpEiWvgy6JWtW/${id < 10 ? "0000"+ id : id < 100 ? "000" + id : id < 1000 ? "00" + id : id < 10000 ? "0" + id : id}.png`} style={{width: "200px"}} alt="Logo" />
                        {/* <img id="x" src={A} style={{width: "200px"}} alt="Logo" /> */}
                    
                    </div>
                </div>
            </div>
    )
}

export default NFT;
