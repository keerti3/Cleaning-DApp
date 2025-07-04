# Cleaning DApp

This is a decentralized application (DApp) built using **Node.js**, **Express**, and **Truffle** that interacts with Ethereum smart contracts to manage and track a blockchain-based cleaning service (or related asset-based system). The project includes smart contract deployment, API routing, file uploads, and a complete backend infrastructure.

---

## 🛠 Tech Stack

- **Node.js** & **Express.js** – Backend API & server
- **Truffle** – Smart contract framework for Ethereum
- **Solidity** – Smart contract development
- **MongoDB (or file-based)** – (Assumed) for data persistence
- **Web3.js** – Blockchain interaction
- **.env** – Environment-based configuration

---

## 📁 Project Structure

- `contracts/` – Solidity smart contracts  
- `migrations/` – Truffle migration scripts  
- `build/contracts/` – Compiled contract ABIs  
- `models/` – Data models (likely MongoDB schemas)  
- `routes/` – API route definitions  
- `views/` – Frontend views (if any templating used)  
- `uploads/` – File upload handling (e.g. images or documents)  
- `app.js` – Main application entry point

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```
### 2.Complie and Migrate Smart Contracts
```
truffle compile
truffle migrate --network <your-network>
```

### 3. Run Server 
```
node app.js
```

### 4. Environment Setup
Create a .env file with required config variables such as:
```
INFURA_API_KEY=your_key
PRIVATE_KEY=your_wallet_private_key
MONGO_URI=your_database_uri
```

## Features
Deploy and interact with Ethereum smart contracts  
API endpoints for smart contract interaction  
Upload support through uploads/ directory  
Modular routing and model structure  
Potential NFT/ERC integration



 
