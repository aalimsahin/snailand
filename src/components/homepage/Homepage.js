import Home from "./Home";
import SnaiLandAcademy from "./SnaiLandAcademy";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import WhyNotRarity from "./WhyNotRarity";

const Homepage = ({
  homeRef,
  snailLandRef,
  tokenomicsRef,
  roadmapRef,
  rarityRef,
}) => {
  return (
    <div className="homepage width-100 flex-column">
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={snailLandRef}>
        <SnaiLandAcademy />
      </div>
      <div ref={tokenomicsRef}>
        <Tokenomics />
      </div>
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
      <div ref={rarityRef}>
        <WhyNotRarity />
      </div>
    </div>
  );
};

export default Homepage;
