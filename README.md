# SolarWise

# SolarWise: AI-Powered Energy Management Solutions ☀️

[![AWS](https://img.shields.io/badge/Cloud-AWS-orange)](https://aws.amazon.com/)  
[![AI](https://img.shields.io/badge/AI-Driven-blue)](https://aws.amazon.com/machine-learning/)  
[![IoT](https://img.shields.io/badge/IoT-Integrated-green)](https://aws.amazon.com/iot/)  

---

## Overview  

SolarWise integrates IoT devices, cloud computing, and AI to offer real-time monitoring, predictive analytics, and smart optimization of energy usage. Designed to empower users with better control, reduce costs, and enhance solar energy utilization.  

### THE USERNAME & PASSWORD IS luminous

---

## Dashboard Highlights  
<img src="Images/Dashboard.png" alt="Dashboard Screenshot" width="800" height="400">  

- Real-Time Tariff Monitoring  
- Energy Consumption Analytics  
- Smart Scheduling  
- Solar Energy Management  
- Forecasting and Recommendations  
- User Notifications and Alerts  
- Cost-Benefit Analysis  

---

## Features  

### 1. Real-Time Monitoring  
- Live solar power and energy consumption stats.  
- IoT device connectivity and status updates.  
- Time-of-Use (TOU) tariff tracking.  

### 2. Predictive Analytics  
- **Energy Consumption Forecast** (Linear Regression, R² > 90%)  
- **TOU Tariff Rate Prediction** (LSTM, 92% accuracy).  

### 3. Smart Optimization  
- **Anomaly Detection** (Z-Score, 95% precision).  
- **Optimal Device Scheduling** (MILP, 100% efficiency).  

---

## System Architecture  

### IoT Integration Layer  
<img src="Images/Architecture.png" alt="Architecture Overview" width="800" height="400">  

### Data Flow Architecture 
<img src="Images/Cloud.png" alt="Cloud Architecture" width="800" height="400">  

**Highlights:**  
1. **Data Ingestion:** AWS Kinesis, EKS.  
2. **Storage:** S3, DynamoDB, ElastiCache, Aurora.  
3. **Analytics & Predictions:** AWS Athena, OpenSearch.  
4. **User Interaction:** Intuitive dashboards, real-time alerts.  

---

## Implementation  

### Proof of Concept  
<img src="Images/POC.png" alt="POC Implementation" width="800" height="400">  


---

## Performance Metrics  

| Model Type         | Accuracy | Use Case                  |  
|--------------------|----------|---------------------------|  
| LSTM               | 92%      | TOU Tariff Predictions    |  
| Linear Regression  | >90%     | User Consumption Forecast |  
| Z-Score            | 95%+     | Anomaly Detection         |  
| MILP               | 100%     | Smart Scheduling          |  

---

## Why SolarWise?  

1. **Modular & Scalable Architecture**
   <img src="Images/Adaptable.png" alt="Adaptable Solutions" width="800" height="400">  
   - Handles high-volume energy data efficiently.  
   - Customizable for diverse markets.  

3. **User Flexibility**  
   - Remote monitoring with intuitive UI.  
   - Anywhere, anytime control.  

4. **Energy Optimization**  
   - AI-enhanced cost savings.  
   - Environmentally conscious practices.  


---

### Prerequisites  
- AWS Account and IoT-ready devices.  
- Smart meters and internet connectivity.  

### Key AWS Services  
- EC2, Kinesis, S3, ElastiCache, DynamoDB, Athena, OpenSearch, Glue.  

---

## License  
This project is a proprietary submission for the Luminous TechnoX Hackathon 2024. Reuse or reproduction of this content is prohibited.  

---

**Note:** Developed as part of the Luminous TechnoX Hackathon 2024.
