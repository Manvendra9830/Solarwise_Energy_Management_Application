import React from "react";
import Navbar from "../navbar";

function EnergyHistory() {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "black" }}>
      {/* Navbar occupies fixed width */}
      <div style={{ flex: "0 0 50px" }}>
        <Navbar />
      </div>

      {/* Main content area */}
      <div
        style={{
          flex: 1, // Takes remaining space
          display: "flex",
          marginLeft: "200px",
          flexDirection: "column", // Align content vertically
          marginTop: "90px",
          height: "75vh",
        }}
      >
        {/* Upper section - divided into 4 equal parts */}
        <div
          style={{
            display: "flex",
            flex: "1", // Takes up equal space
            margin: 1,
            alignItems:"center"
            // Remove space between divs
          }}
        >
          <div style={{ flex: 1, padding: 0 }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/be5wczruvahvkd/overall-solar-analysis?from=1733302650812&to=1733321389309&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="900"
              height="280"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        {/* Lower section - divided into 3 parts with 30%, 30%, and 40% */}
        <div
          style={{
            display: "flex",
            flex: "1",
            marginTop:"15px",
            margin: "1px", // Optional: Adjust this if you want to remove or add a little spacing around the whole container
          }}
        >
          <div style={{ flex: "0 0 30%", padding: 0, marginRight: "10px" }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/ae5wcjm8ffda8d/optimal-grid-and-solar-usage?from=1733300047435&to=1733321647435&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="430"
              height="240"
              frameborder="0"
            ></iframe>
          </div>

          <div style={{ flex: "0 0 30%", padding: 0, marginLeft: "10px" }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/ae5wbts9zb0u8e/user-consumption-by-grid-and-solar?from=1733299785131&to=1733321385132&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="450"
              height="240"
              frameborder="0"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyHistory;
