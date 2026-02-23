# 🚀 Personal Portfolio Platform (Full Stack)

A comprehensive full-stack ecosystem built with **React** and **ASP.NET Core Web API (.NET 8)**, featuring a secure admin dashboard, JWT authentication, AI-powered photography captions, and Azure cloud integration.

---

## 📂 Repositories Overview

This project is architected using a **separation of concerns** strategy, divided into three independent repositories.

### 1️⃣ Personal Portfolio (Public Website)
*The visitor-facing experience.*
* **Features:** View projects, explore skills & experience, browse other creative work gallery with AI captions.
* **Tech:** React, JavaScript, Bootstrap, REST API Integration.
* **Links:** [Live Link](https://rajkamalhatwar.netlify.app/) | [GitHub Repository (Current Repo)](https://github.com/rajkamalhatwar/Personal_Portfolio)

### 2️⃣ Portfolio Admin Dashboard
*The secure command center.*
* **Features:** JWT-based auth, Role-based access control (RBAC), CRUD for projects, and Azure Blob uploads.
* **Tech:** React, Protected Routes, Token-based Authentication.
* **Links:** [Live Link](https://portfolio-admin-panel-xtal.onrender.com) | [GitHub Repository](https://github.com/rajkamalhatwar/Portfolio-Admin-Panel)

### 3️⃣ Web API Backend Service
*The powerhouse RESTful service.*
* **Features:** JWT generation, SQL Server integration, and AI caption generation service.
* **Tech:** ASP.NET Core Web API (.NET 8), Entity Framework Core, SQL Server, Azure Blob Storage.
* **Links:** [Live API URL](https://portfolio-api-zxlx.onrender.com/swagger/index.html) | [GitHub Repository](https://github.com/rajkamalhatwar/Portfolio_WebAPI)

---

## 🏗️ System Architecture

The platform follows a modern N-tier architecture to ensure data integrity and security:

1.  **Public Portfolio (React):** Consumes data via REST API.
2.  **Admin Dashboard (React):** Manages content via protected endpoints.
3.  **ASP.NET Core Web API:** Handles business logic and authentication.
4.  **SQL Server + Azure Blob Storage:** Persistent data and cloud-based media storage.

---

## 🔐 Security & Features

* **Authentication:** Stateless authentication using **JWT**.
* **Authorization:** Role-based access control for admin endpoints.
* **Cloud Integration:** Azure Blob Storage for secure and optimized image management.
* **AI Integration:** AI-powered photography caption generation service.
* **Validation:** Input validation and sanitized requests across all layers.

---

## 🛠️ Technical Implementation

| Feature | Technology |
| :--- | :--- |
| **Backend** | ASP.NET Core Web API |
| **Frontend** | React.js |
| **Database** | Microsoft SQL Server | 
| **Storage** | Azure Blob Storage |
| **Styling** | Bootstrap / CSS3 |
| **Auth** | JWT (JSON Web Tokens) |

---

## 📌 What This Project Demonstrates

✔ **Full-stack architecture design** ✔ **Separation of concerns** (3 independent repositories)  
✔ **Secure authentication & authorization** ✔ **Cloud storage integration** (Azure)  
✔ **AI feature integration**  

 