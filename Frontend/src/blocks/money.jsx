import React from 'react'
import Navbar from '../navbar'

function MoneySaved() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>  {/* Full viewport height */}
      <div style={{ flex: '0 0 200px' }}>  {/* Navbar occupies fixed width */}
        <Navbar/>
      </div>
      <div style={{
        flex: 1,  // Takes remaining space
        display: 'flex',
        justifyContent: 'center',  // Centers content horizontally
        alignItems: 'center',       // Centers content vertically
      }}>
        
      </div>
    </div>
  )
}

export default MoneySaved