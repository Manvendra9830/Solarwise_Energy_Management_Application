import React from "react";
import Navbar from "../navbar";

function Alert() {
  return (
    <div>
      <div style={{ display: "flex", height: "100vh", backgroundColor: "black" }}>
        {/* Navbar occupies fixed width */}
        <div style={{ flex: "0 0 50px" }}>
          <Navbar />
        </div>

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            marginLeft: "50px",
          }}
        >
          {/* Upper section - 2 iframes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px", // Space between iframes
              marginBottom: "20px", // Space below the row
              marginTop:"20px"
            }}
          >
            <iframe
              src="http://localhost:3000/d-solo/ae5wc3ld93m68d/predicted-tou-rate-inr?from=1733297582576&to=1733319182576&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=4&__feature.dashboardSceneSolo"
              width="500"
              height="250"
              frameBorder="0"
            ></iframe>
            <iframe
              src="http://localhost:3000/d-solo/ae5wc3ld93m68d/predicted-tou-rate-inr?from=1733297582576&to=1733319182576&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=2&__feature.dashboardSceneSolo"
              width="500"
              height="250"
              frameBorder="0"
            ></iframe>
          </div>

          {/* Lower section - 3 iframes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px", // Space between iframes
            }}
          >
            <iframe
              src="http://localhost:3000/d-solo/ae5wc3ld93m68d/predicted-tou-rate-inr?from=1733297582576&to=1733319182576&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=5&__feature.dashboardSceneSolo"
              width="500"
              height="300"
              frameBorder="0"
            ></iframe>
            <iframe
              src="http://localhost:3000/d-solo/ae5wc3ld93m68d/predicted-tou-rate-inr?from=1733297582576&to=1733319182576&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=3&__feature.dashboardSceneSolo"
              width="500"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
