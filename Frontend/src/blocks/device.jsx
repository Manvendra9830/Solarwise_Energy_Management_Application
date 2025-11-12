import React from 'react'
import Navbar from '../navbar'

function Device() {
  return (
    <div style={{ display: 'flex', height: '100vh',backgroundColor:"black" }}>  {/* Full viewport height */}
    <div style={{ flex: '0 0 200px' }}>  {/* Navbar occupies fixed width */}
      <Navbar />
    </div>
    <div style={{
      flex: 1,  // Takes remaining space
      display: 'flex',
      justifyContent: 'center',  // Centers content horizontally
      alignItems: 'center',       // Centers content vertically
      
    }}>
       <div style={{ flex: '35%', paddingLeft: '200px' }}>
       <iframe src="https://manvendra9830.grafana.net/d-solo/ae5war2ms8hs0c/device-consumption?from=1733296516946&to=1733318116946&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo" width="900" height="500" frameborder="0"></iframe>
        </div>
    </div>
  </div>
  )
}

export default Device