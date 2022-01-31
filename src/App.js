import "./styles/App.css";
import "./styles/Common.css";
import "./styles/Dashboard.css";
import "./styles/Homepage.css";

import Dashboard from "./components/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";
import { useRef, useState } from "react";

function App() {
  const homeRef = useRef(null);
  const snailLandRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const rarityRef = useRef(null);

  return (
    <div className="flex">
      <div className="dashboard">
        <Dashboard
          homeRef={homeRef}
          snailLandRef={snailLandRef}
          tokenomicsRef={tokenomicsRef}
          roadmapRef={roadmapRef}
          rarityRef={rarityRef}
        />
      </div>
      <div>
        <Homepage
          homeRef={homeRef}
          snailLandRef={snailLandRef}
          tokenomicsRef={tokenomicsRef}
          roadmapRef={roadmapRef}
          rarityRef={rarityRef}
        />
      </div>
    </div>
  );
}

export default App;
