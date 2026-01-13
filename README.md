# Blogify — Modern Full-Stack Blog Platform

**Blogify** is a professional blog application built with **Next.js 16 (App Router)** and **Node.js/Express**.

It features a polished, SaaS-style frontend that communicates with a robust backend for authentication and data management.

## ✨ Key Features
-   **Next.js Frontend**: High-performance, Server-Side Rendered (SSR) UI.
-   **Tailwind CSS**: Beautiful, responsive, and editorial design.
-   **Authentication**: Secure JWT-based auth (proxied to backend).
-   **File Uploads**: Image hosting with Multer.
-   **No-API Reads**: Next.js reads directly from MongoDB for instant page loads.

## 🧱 Tech Stack
-   **Frontend**: Next.js 16, TypeScript, Tailwind CSS, Lucide Icons.
-   **Backend**: Node.js, Express, MongoDB (Mongoose), JWT.
-   **Database**: MongoDB.

## 🚀 Getting Started

### Prerequisites
-   Node.js installed.
-   MongoDB instance running.

### 1. Setup Backend
The backend handles authentication and file uploads.
```bash
cd backend
npm install
npm start
```
*Server runs on port 8000.*

### 2. Setup Frontend
The frontend is the main user interface.
```bash
cd frontend-next
npm install
npm run dev
```
*App runs on port 3000.*

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure
-   `backend/`: Express server (Auth, Writes, Uploads).
-   `frontend-next/`: Next.js application (UI, Reads).
