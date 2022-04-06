// import { FaDiscord, FaTwitter } from "react-icons/fa";
import Discord from "../../assets/discord.png";
import Twitter from "../../assets/twitter.png";

const DashboardFooter = () => {
  return (
    <div className="fg-1 flex-column-center">
      <div>
        <span style={{ marginRight: "15px" }}>
          <a
            href="https://twitter.com/ITUblockchain"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaTwitter size="2em" color="white" className="fa" /> */}
            <img src={Twitter} className="sMedia" alt="Logo" />
          </a>
        </span>

        <span style={{ marginLeft: "15px" }}>
          <a
            href="https://discord.gg/CukXAdU5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaDiscord size="2em" color="white" className="fa"/> */}
            <img src={Discord} className="sMedia" alt="Logo" />
          </a>
        </span>
      </div>
      <span className="tc-white mt-1 mb-1">Copyright © Robineth | SnaiLand</span>
    </div>
  );
};

export default DashboardFooter;