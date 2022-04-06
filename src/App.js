import "./styles/App.css";
import "./styles/Common.css";
import "./styles/Dashboard.css";
import "./styles/Homepage.css";
import "./styles/index.css"

import Dashboard from "./components/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const sssRef = useRef(null);
  const snailLandRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const rarityRef = useRef(null);
  const myNFTsRef = useRef(null);

  return (
    <div className="flex">
      <div style={{top: 0, position: "sticky", zIndex:"98"}}>
        <Dashboard className=""
          homeRef={homeRef}
          sssRef={sssRef}
          snailLandRef={snailLandRef}
          tokenomicsRef={tokenomicsRef}
          roadmapRef={roadmapRef}
          rarityRef={rarityRef}
          myNFTsRef={myNFTsRef}
        />
      </div>
      <div>
        <Homepage
          homeRef={homeRef}
          sssRef={sssRef}
          snailLandRef={snailLandRef}
          tokenomicsRef={tokenomicsRef}
          roadmapRef={roadmapRef}
          rarityRef={rarityRef}
          myNFTsRef={myNFTsRef}
        />
      </div>
    </div>
  );
}

export default App;
