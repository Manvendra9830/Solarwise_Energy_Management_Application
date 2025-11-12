import React from "react";
import Navbar from "../navbar";

function Matrix() {
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
          marginLeft: "250px",
          flexDirection: "column", // Align content vertically
          marginTop: 140,
          height: "75vh",
        }}
      >
        {/* Upper section - divided into 4 equal parts */}
        <div
          style={{
            display: "flex",
            flex: "1", // Takes up equal space
            margin: 1,

            // Remove space between divs
          }}
        >
          <div style={{ flex: 1, padding: 0 }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/ee5waa3ancqgwf/anamolies-in-instantaneous-cost?from=1733016780000&to=1733286480000&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="800"
              height="280"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        {/* Lower section - divided into 3 parts with 30%, 30%, and 40% */}
        <div
          style={{
            display: "flex",
            marginTop:"10px",
            flex: "1",
            margin: "1px", // Optional: Adjust this if you want to remove or add a little spacing around the whole container
          }}
        >
          <div style={{ flex: "0 0 30%", padding: 0, marginRight: "10px", }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/be5wb5mwr0q9sa/anamolies-counter?from=1733297019213&to=1733318619213&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="390"
              height="240"
              frameborder="0"
            ></iframe>
          </div>

          <div style={{ flex: "0 0 30%", padding: 0, marginLeft: "0px" }}>
            <iframe
              src="https://manvendra9830.grafana.net/d-solo/ee5vwa3p5t6o0e/total-bill-inr?from=1733297010138&to=1733318610138&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
              width="390"
              height="240"
              frameborder="0"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matrix;
