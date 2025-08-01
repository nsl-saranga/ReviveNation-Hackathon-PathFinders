# Solution Overview: Government Building Tracker (Sri Lanka)

## 🎯 Objective

The proposed system is a zonal and divisional-level government building tracker designed to give real-time visibility into the status, condition, and usage of public infrastructure. It empowers zonal and divisional administrators to maintain accurate building records and provides central government authorities (central admin) with a comprehensive, centralized dashboard for monitoring assets, renovation needs, and spending efficiency.


## 🏛️ System Architecture (Narrative)

The system follows a modular, web-based architecture with cloud data storage. Key components include:

1. Frontend Web Application

   * The main user interface, accessible via web browser.
   * Allows users to log in, view building lists, filter by zone or type, and view & update building records.
   * Contains role-specific views:
        1. Zonal/ Divisional Admins see only their assigned zone and can edit building data.
        2. Central Admins see bulding data from all the zones through one, centralized platform and have access to approval and financial flows for renovation related tasks.


2. Backend Server (API)

   * Handles all application logic and routes requests between frontend and database.
   * Exposes RESTful API endpoints for login (via SLUDI), CRUD operations on buildings, PayDPI transaction simulation, and zone metadata retrieval.
   * Enforces role-based access so that each user can only access and edit permitted data.

3. Database 

   * A secure, cloud-based database (MongoDB Atlas) to store:
        1. Building metadata: status, use type, condition, location
        2. User profiles and roles
        3. Renovation history and update logs
        4. PayDPI-style transaction records

4. DPI Integration Layer

   * A logical module that interfaces with national Digital Public Infrastructure components:
        1. SLUDI: for secure and decentralized user login
        2. NDX: to fetch reliable government metadata about zones and population
        3. PayDPI: to simulate or execute transactions related to renovation or maintenance funding
   * For the MVP, these integrations can be mocked or simulated.


## 🔗 DPI Integrations

| DPI Layer | Purpose                                                                                         | Implementation (MVP Phase)                                 |
| --------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| SLUDI     | Secure, decentralized login for zonal/central admins                                            | Mock login with role-based tokens (e.g., SLUDI-auth-token) |
| NDX       | Fetch official zone metadata (population, infrastructure data) to contextualize building status | Simulated NDX API returning JSON zone metadata             |
| PayDPI    | Record/track renovation fund allocation and usage                                               | Simulated transaction with amount, date, and building ID   |



## 👤 User Flows

### 🧑‍💼 Zonal/Divisional Admin Flow

* A zonal or divisional government officer is responsible for tracking public buildings in their assigned region (e.g., Kurunegala DS Division). The work flow:

      1. The user authenticates using a trusted ID (like a NIC or staff ID, simulated in MVP). Once logged in, the system identifies them as a zonal admin and restricts their view   to only their zone.
      2. The app shows a list or map of public buildings (schools, hospitals, government offices, etc.) in that DS Division or zone. A filter panel allows them to filter out buildings (eg:- view only "abondoned" buildings, view the most recently renovated buildings, etc)
      3. The user updates building details if needed (eg:- A school that hasn’t been used in 5 years is marked “Abandoned.”, A rural hospital with broken windows and no staff is marked “Needs Renovation”, A former cooperative society office now functioning as a community training center can have its usage type updated to reflect this repurposing.)
      4. For buildings that need funding or attention, the user can mark them as “Needs Renovation.” and uploads images and other official documents as evidence.

### 🏛️ Central Admin

      1. Logs in via SLUDI with elevated access. The system identifies them as a central admin.
      2. Monitors all zones via interactive dashboard (total buildings by province, % of buildings marked “Abandoned”, filters for buildings flaged as “Needs Renovation”, % of buildings that have been repurposed).
      3. Reviews flagged buildings for renovation (Sees photos, renovation history, condition notes, and zonal admin comments for flagged buildings)
      4. Confirms whether the request is valid or not. 
      5. If valid, initiates PayDPI-style transaction for approved renovation projects. (For approved buildings, a simulated PayDPI flow is triggered:Logs the amount allocated, Records date, building ID, purpose and Marks status as “Renovation in Progress”)


## 🔐 Security & Consent

* All user authentication is managed through simulated SLUDI tokens.
* Role-based access ensures that zonal admins cannot modify buildings outside their jurisdiction.
* All data updates and financial actions (mock PayDPI flows) are logged with timestamps.
* Consent flags (future enhancement) will track who edited which records, with audit trails.


## 🔧 Technologies Using (for POC)

* Frontend: React + CSS + tailwind css
* Backend: Node.js (Express)
* Database: MongoDB Atlas


