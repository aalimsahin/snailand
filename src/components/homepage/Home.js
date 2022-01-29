import Snail from "../../assets/snail.png";
const Home = () => {
    return(
        <div className='height-100vh flex-column-center'>
            <span className='fs-700'> SnaiLand</span> 
            <img src={Snail} style={{width: "450px"}} alt="Logo" />
            <span className='mt-1 fs-125 ta-center'>Bringing original avatar NFTs to the <br/> Algorand community</span>
            <span className='mt-1 fs-250 ta-center'> 100% MINTED</span> 
        </div>
    )
}

export default Home;