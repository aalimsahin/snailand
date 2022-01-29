import './styles/App.css';
import './styles/Common.css'
import './styles/Dashboard.css';
import './styles/Homepage.css';

import Dashboard from "./components/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className='flex'>
      <div className="dashboard" >
          <Dashboard />
      </div>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
