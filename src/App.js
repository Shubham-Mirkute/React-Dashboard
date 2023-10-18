import { useState } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  

  return (
    <div className="App">
      
        <Navbar openSidebarToggle={openSidebarToggle}/>

  
        <Dashboard  OpenSidebar={OpenSidebar} />

    </div>
  );
}

export default App;
