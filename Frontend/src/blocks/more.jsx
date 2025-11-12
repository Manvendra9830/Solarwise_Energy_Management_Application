import React, { useState } from "react";
import Navbar from "../navbar";

function More() {
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [sellingToGrid, setSellingToGrid] = useState(false);

  const toggleAlert = () => {
    setAlertEnabled((prev) => !prev);
  };

  const toggleSellingToGrid = () => {
    setSellingToGrid((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Navbar */}
      <div
        style={{ flex: "0 0 200px", backgroundColor: "#343a40", color: "#fff" }}
      >
        <Navbar />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* User Info Box */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Profile Picture */}
            <div
              style={{
                flex: "0 0 150px",
                height: "150px",
                borderRadius: "50%",
                backgroundColor: "#dee2e6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <p style={{ fontSize: "18px", color: "#6c757d" }}>Picture</p>
            </div>

            {/* User Details */}
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: "0 0 10px", color: "#343a40" }}>
                Rakesh Malhotra
              </h2>
              <p style={{ margin: "5px 0", color: "#6c757d" }}>
                <strong>Address:</strong> 123 Example Street, City, State, ZIP
              </p>
              <p style={{ margin: "5px 0", color: "#6c757d" }}>
                <strong>Mobile No:</strong> +91 *****911233
              </p>
              <p style={{ margin: "5px 0", color: "#6c757d" }}>
                <strong>Luminous ID:</strong> LMN12345
              </p>
            </div>
          </div>

          {/* Toggle Box */}
          <div
            style={{
              width: "100%",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              paddingLeft:"190px"
            }}
          >
            {/* Alert Toggle */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ marginRight: "10px", color: "#343a40" }}>
                <strong>Alert Notifications:</strong>
              </label>
              <button
                onClick={toggleAlert}
                style={{
                  padding: "5px 15px",
                  backgroundColor: alertEnabled ? "#28a745" : "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {alertEnabled ? "Enabled" : "Disabled"}
              </button>
            </div>

            {/* Selling to Grid Toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "15px",
               
              }}
            >
              <label style={{ marginRight: "10px", color: "#343a40" }}>
                <strong>Selling to Grid:</strong>
              </label>
              <button
                onClick={toggleSellingToGrid}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 15px",
                  backgroundColor: sellingToGrid ? "#28a745" : "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {sellingToGrid ? " Enabled" : "Disabled"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
