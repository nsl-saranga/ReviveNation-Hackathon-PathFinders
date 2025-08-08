# ReviveNation-Hackathon-PathFinders

**Team Name:** Path Finders  
**Project Name:** Government Public Assets (Buildings) Tracking System for Sri Lanka

---

## 📌 Project Overview

The proposed system is a zonal and divisional-level government building tracker designed to give real-time visibility into the status, condition, and usage of public infrastructure. It empowers zonal and divisional administrators to maintain accurate building records and provides central government authorities (central admin) with a comprehensive, centralized dashboard for monitoring assets, renovation needs, and spending efficiency.

---

## ⚙️ Setup Instructions

### 🔗 Prerequisites

- Node.js (>= 18.x recommended)
- npm or yarn
- Postman (for testing APIs)
- Internet access to sandbox endpoints (NDX)

### 🔐 Environment Variables

Create a `.env` file at the root with the following variables:

```env
SLUDI_API_KEY=FAKE-API-KEY
NDX_URL=https://32f15959-72d1-4702-809f-3d19137913c7.mock.pstmn.io
PAYDPI_URL=https://mock-paydpi.example.com
```

---

## 🏗 Build & Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm run start
```

> The backend will run on `http://localhost:5000` by default.

---

## 🚀 Usage

### 🔄 API Endpoints

All endpoints are accessible via `localhost:5000`

#### 🔐 SLUDI Authentication APIs

- `POST /auth/:mispLK/:authPartnerId/:apiKey`  
  → Initiates a mock login based on MOSIP authentication

#### 🏢 NDx Building Data APIs

- `GET /ndx/assets/:id`  
  → Fetch building (asset) data for a given zone/division ID (e.g., colombo, negombo)

#### 💳 PayDPI Payment APIs

- `POST /paydpi/transact`  
  → Initiates a mock digital payment for the approved building renovation requests.

### 🧪 Testing with Postman

#### 1. SLUDI Authentication Test

- **Method**: POST  
- **URL**: `http://localhost:5000/auth/MISP-LK/GOV-BUILDING/FAKE-API-KEY`  
- **Headers**:
  - `Authorization: Bearer MOCK-API-KEY`
  - `Content-Type: application/json`
- **Body** (raw JSON):

```json
{
  "id": "auth-req-001",
  "version": "1.0",
  "individualId": "1234567890",
  "individualIdType": "UIN",
  "transactionID": "TXN-001",
  "requestTime": "2025-08-04T10:00:00Z",
  "specVersion": "1.2",
  "thumbprint": "abc123",
  "domainUri": "gov.lk",
  "env": "dev",
  "request": {
    "otp": "123456",
    "staticPin": "test123",
    "timestamp": "2025-08-04T10:00:00Z",
    "demographics": {},
    "biometrics": []
  },
  "consentObtained": true,
  "requestHMAC": "mocked-hmac",
  "requestSessionKey": "mocked-session-key",
  "metadata": {
    "purpose": "Login from Gov Building App"
  }
}
```

#### 2. NDx Assets Test

- **Method**: GET  
- **URL**: `http://localhost:5000/ndx/assets/colombo`  
- **Headers**:
  - `Content-Type: application/json`
- **Note**: Only "colombo" ID has mock data implemented. Other values will result in an error.

#### 3. PayDPI Transaction Test

- **Method**: POST  
- **URL**: `http://localhost:5000/paydpi/transact`  
- **Headers**:
  - `Content-Type: application/json`
- **Body** (raw JSON):

```json
{
  "buildingId": "building-123",
  "amount": 5000,
  "purpose": "Renovation"
}
```

---


## ⚠️ Important Notes

- All APIs are mock implementations for development/testing purposes
- Only "colombo" zone data is currently available in the NDx mock endpoint
- Authentication uses mock tokens and API keys
- PayDPI transactions are simulated for demonstration purposes

---


## ✅ Current Status

This Proof of Concept (POC) is currently functional for:

- ✅ Fetching building data from NDx
- ✅ Triggering sandbox payments via PayDPI  
- ✅ Authentication logging via SLUDI
- ✅ Mock API endpoints for testing

Future extensions will include UI interfaces and additional DPI flows.

---

## 🤝 Contributing

This project was developed for the ReviveNation Hackathon by Team Path Finders. For questions or contributions, please contact the development team.

