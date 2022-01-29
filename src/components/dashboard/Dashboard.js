import DashboardFooter from "./DashboardFooter";
import ConnectMetamask from "./ConnectMetamask";
import Pages from './Pages';
import Mint from './Mint'; 

const Dashboard = () => {
    return(
        
        <div className='dashboard height-100vh flex-column'>
            <div className='fg-1 fs-135 flex-center tc-white'>
                <span className="dashboard-header fs-400 fw-bold">SnaiLand</span>
            </div>
            <ConnectMetamask/>
            <Pages/>
            <Mint/>
            <DashboardFooter/>
        </div>
    )
}

export default Dashboard;