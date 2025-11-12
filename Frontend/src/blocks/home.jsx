import React from 'react';
import Navbar from '../navbar';
import { FaTree } from "react-icons/fa";
import FlipBadge from './batch';
import TreeSavingBadge from './batch';

function MoneySaved() {
  return (
    <div>
        
      <div style={{ display: 'flex', height: '100vh', backgroundColor: "black" }}>
        {/* Navbar occupies fixed width */}
        <div style={{ flex: '0 0 50px' }}>
          <Navbar />
        </div>
        
        
        {/* Main content area */}
        <div style={{
          flex: 1,  // Takes remaining space
          display: 'flex',
          marginLeft: '50px',
          flexDirection: 'column',  // Align content vertically
          marginTop:140,
          height:'75vh'
        }}>
          {/* Upper section - divided into 4 equal parts */}
          <div style={{
            display: 'flex',
            width:1150,
            flex: '1',  // Takes up equal space
            margin: 1, 
            
              // Remove space between divs
          }}>
            
            <div style={{ flex: 1, padding: 0,  }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo" width="280" height="240" frameborder="0"></iframe>
            </div>
            <div style={{ flex: 1, padding: 0 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=3&__feature.dashboardSceneSolo" width="280" height="240" frameborder="0"></iframe>
            </div>
            <div style={{ flex: 1, padding: 0 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=2&__feature.dashboardSceneSolo" width="280" height="240" frameborder="0"></iframe>
            </div>
            <div style={{ flex: 1, padding: 0 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=6&__feature.dashboardSceneSolo" width="280" height="240" frameborder="0"></iframe>
            </div>
    
          </div>

          {/* Lower section - divided into 3 parts with 30%, 30%, and 40% */}
          <div style={{
            display: 'flex',
            flex: '1',
            margin: 1,
            width:1150,
            
            // Remove space between divs
          }}>
            <div style={{ flex: '0 0 30%', padding: 0 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=4&__feature.dashboardSceneSolo" width="340" height="240" frameborder="0"></iframe>
            </div>
            <div style={{ flex: '0 0 30%', paddingRight: 5 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=5&__feature.dashboardSceneSolo" width="350" height="240" frameborder="0"></iframe>
            </div>
            <div style={{ flex: '0 0 40%', padding: 0 }}>
              <iframe src="https://manvendra9830.grafana.net/d-solo/be5vjwoyy6yv4f/cumulative-energy-saved-kwh?from=1733296558472&to=1733318158472&timezone=browser&orgId=1&panelId=7&__feature.dashboardSceneSolo" width="445" height="240" frameborder="0"></iframe>
            </div>
          </div>

        </div>
      {/* </div>
      <TreeSavingBadge/>
      <div> */}
      </div>
    </div>
  );
}

export default MoneySaved;
