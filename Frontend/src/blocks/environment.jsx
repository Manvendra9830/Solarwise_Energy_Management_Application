import React from "react";
import Navbar from "../navbar";
import TreeSavingBadge from "./batch";  
import { PiTreePalmThin } from "react-icons/pi";
import { div } from "framer-motion/client";
import TreeSavingBadge100 from "./batch_100";
import TreeSavingBadge10 from "./batch";
function Environmental() {
  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh", backgroundColor: "black" }}
      >
        {/* Navbar occupies fixed width */}
        <div style={{ flex: "0 0 50px" }}>
          <Navbar />
        </div>

        {/* Main content area */}
        <div
          style={{
            flex: 1, // Takes remaining space
            display: "flex",
            marginLeft: "50px",
            flexDirection: "column", // Align content vertically
            marginTop: 140,
            height: "75vh",
          }}
        >
          {/* Upper section - divided into 4 equal parts */}
          <div
            style={{
              display: "flex",
              width: 1150,
              flex: "1", // Takes up equal space
              margin: 1,

              // Remove space between divs
            }}
          >
            <div style={{ flex: 1, padding: 0 }}>
              <iframe
                src="https://manvendra9830.grafana.net/d-solo/ee5wtwy2b38cge/environmental-goals-and-awards?from=1733301650318&to=1733323250318&timezone=browser&showCategory=Value%20options&orgId=1&panelId=1&__feature.dashboardSceneSolo"
                width="600"
                height="240"
                frameborder="0"
              ></iframe>
            </div>
            <div
              style={{
                flex: 1,
                padding: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <TreeSavingBadge10 />
              <TreeSavingBadge100 />
            </div>
          </div>

          {/* Lower section - divided into 3 parts with 30%, 30%, and 40% */}
          <div
            style={{
              display: "flex",
              flex: "1",
              margin: 1,
              width: 1150,

              // Remove space between divs
            }}
          >
            <div style={{ flex: "0 0 30%", padding: 0 }}>
              <iframe
                src="https://manvendra9830.grafana.net/d-solo/ee5wtwy2b38cge/environmental-goals-and-awards?from=1733301650318&to=1733323250318&timezone=browser&showCategory=Value%20options&orgId=1&panelId=2&__feature.dashboardSceneSolo"
                width="1100"
                height="240"
                frameborder="0"
              ></iframe>
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

export default Environmental;
