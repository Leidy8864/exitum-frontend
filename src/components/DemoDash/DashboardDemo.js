import React from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './styles.css'

const DashboardDemo = () => {
    return ( 
        <div className="dashboard">
              <Sidebar />
              <Navbar />
                <main className="main-panel">
                
                </main>
          </div>
     );
}
 
export default DashboardDemo;