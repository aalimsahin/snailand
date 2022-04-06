import Home from "./Home";
import SnaiLandAcademy from "./SnaiLandAcademy";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import WhyNotRarity from "./WhyNotRarity";
import SSS from "./SSS";
import MyNFTs from "./MyNFTs";
import React, { useContext } from "react";
import { Context } from "../../Context";



const Homepage = ({
  homeRef,
  sssRef,
  snailLandRef,
  tokenomicsRef,
  roadmapRef,
  rarityRef,
  myNFTsRef
}) => {
  const { account } = useContext(Context);

  return (
    <div className="homepage width-100 flex-column">
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={sssRef}>
        <SSS />
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
      {account !== "0x" ?
      <div ref={myNFTsRef}>
        <MyNFTs />
      </div>
      :<div></div>}
    </div>
  );
};

export default Homepage;
