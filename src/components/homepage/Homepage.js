import Home from "./Home";
import SnaiLandAcademy from "./SnaiLandAcademy";
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import WhyNotRarity from './WhyNotRarity'; 


const Homepage = () => {
    return(
        <div className='homepage width-100 flex-column'>
            <Home/>
            <SnaiLandAcademy/>
            <Tokenomics/>
            <Roadmap/>
            <WhyNotRarity/>
 
        </div>
    )
}

export default Homepage;