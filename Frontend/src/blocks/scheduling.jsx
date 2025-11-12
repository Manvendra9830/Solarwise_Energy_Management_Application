import React from 'react';
import Navbar from '../navbar';
import image from './image.png';

function Scheduling() {
    return (
        <div>
            <div style={{ display: 'flex', height: '100vh', backgroundColor: "black" }}>  {/* Full viewport height */}
                <div style={{ flex: '0 0 50px' }}>  {/* Navbar occupies fixed width */}
                    <Navbar />
                </div>
                <div style={{
                    flex: 1,  // Takes remaining space
                    display: 'flex',
                    width: "800vw",
                    flexDirection: 'column',  // Stack blocks vertically
                    marginLeft: '50px',
                    alignItems: 'center',  // Centers content horizontally
                    justifyContent: 'center' // Centers content vertically
                }}>
                    {/* Upper Blocks - Stacked One Over Another */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ padding: '10px' }}>
                            <iframe src="https://manvendra9830.grafana.net/d-solo/fe612q75pkqgwa/new-dashboard?from=1733328832919&to=1733501632919&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo" width="800" height="200" frameBorder="0"></iframe>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <iframe src="https://manvendra9830.grafana.net/d-solo/fe612q75pkqgwa/new-dashboard?from=1733328832919&to=1733501632919&timezone=browser&orgId=1&panelId=4&__feature.dashboardSceneSolo" width="800" height="200px" frameBorder="0"></iframe>
                        </div>
                    </div>

                    {/* Lower Blocks - Side by Side */}
                    <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <iframe
                                src="https://manvendra9830.grafana.net/d-solo/fe612q75pkqgwa/new-dashboard?from=1733328832919&to=1733501632919&timezone=browser&orgId=1&panelId=2&__feature.dashboardSceneSolo"
                                width="390"
                                height="200px"
                                frameBorder="0">
                            </iframe>
                        </div>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <iframe
                                src="https://manvendra9830.grafana.net/d-solo/fe612q75pkqgwa/new-dashboard?from=1733328832919&to=1733501632919&timezone=browser&orgId=1&panelId=3&__feature.dashboardSceneSolo"
                                width="390"
                                height="200"
                                frameBorder="0">
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Scheduling;