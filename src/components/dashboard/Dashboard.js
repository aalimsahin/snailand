import DashboardFooter from "./DashboardFooter";
import ConnectMyAlgo from "./ConnectMyAlgo";
import Pages from "./Pages";
import Mint from "./Mint";
import { Fragment } from "react/cjs/react.production.min";
import { FaBars } from "react-icons/fa";
import { useRef } from "react/cjs/react.development";

const Dashboard = ({
  homeRef,
  sssRef,
  snailLandRef,
  tokenomicsRef,
  roadmapRef,
  rarityRef,
  myNFTsRef
}) => {
  const menuRef = useRef();

  return (
    
    
    <Fragment  >
      <div
        className="menu-bars"
        onClick={() => {
          const el = menuRef?.current;
          if (!el) {
            return;
          }
          const classList = Array.from(el.classList);
          if (classList.includes("expanded")) {
            el.classList.remove("expanded");
          } else {
            el.classList.add("expanded");
          }
        }}
      >
        <FaBars />
      </div>
      <div
        ref={menuRef}
        className="dashboard-wrapper height-100vh flex-column "
      >
        <div className="fg-1 fs-135 flex-center tc-white">
          <span className="dashboard-header fs-300 fw-bold ">SnailLand</span>
        </div>
        <ConnectMyAlgo />
        <Pages
          homeRef={homeRef}
          sssRef={sssRef}
          snailLandRef={snailLandRef}
          tokenomicsRef={tokenomicsRef}
          roadmapRef={roadmapRef}
          rarityRef={rarityRef}
          myNFTsRef={myNFTsRef}
        />
        <Mint />
        <DashboardFooter />
      </div>
    </Fragment>

  );
};

export default Dashboard;
