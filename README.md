📚 PR Skillverse – Commercial LMS Platform

A full-stack Learning Management System (LMS) built with React + Firebase, designed for paid batch-based courses, admin video management, and secure student access.

🌐 Live Project

Frontend Repo:
👉 https://github.com/sasindra143/pr-skillverse-frontend

Local URL:  
https://pr-skillverse.netlify.app

Admin Panel:
https://pr-skillverse.netlify.app/admin-login

🧱 SYSTEM OVERVIEW (High Level)
Two Major Panels

Student Learning Platform

Admin Management Panel

Core Concepts

Courses → Batches → Modules → Lessons → Videos

Paid batch access

Admin-controlled content lifecycle

## Technologies 
🖥️ Frontend Technologies

React.js (Vite) – Component-based UI development

JavaScript (ES6+) – Core frontend logic

HTML5 – Semantic page structure

CSS3 – Styling, Flexbox, responsive layouts

React Router DOM – Client-side routing

Context API / Hooks – State & lifecycle management

YouTube IFrame Embed API – Video playback integration

Responsive Web Design – Mobile & desktop support

⚙️ Backend Technologies

Firebase – Backend as a Service (BaaS)

Firebase Authentication – User login & role-based access

Firebase Admin SDK – Secure admin operations

REST-style Architecture – Structured data access

Node.js (for admin scripts / cloud logic) – Server-side execution

Role-Based Access Control (RBAC) – Admin / Student permissions

🗄️ Database Technologies

Firebase Firestore (NoSQL Database)

Real-time data synchronization

Structured collections (courses, modules, lessons, users)

Indexed queries & filters

Secure access using Firestore Rules

🔐 Security & Access Control

Firestore Security Rules

Protected Routes (Frontend)

Batch-wise Content Access

Admin-only Upload & Delete Permissions

☁️ Hosting & Deployment

Netlify – Frontend hosting

Firebase Hosting (optional)

GitHub – Version control & collaboration

Vite Build System – Optimized production builds

🛠️ Development Tools

VS Code – Code editor

Git & GitHub – Source control

Chrome DevTools – Debugging & performance

Postman (optional) – API testing

ESLint / Prettier – Code quality (optional)

📁 COMPLETE FOLDER STRUCTURE (REAL WORLD)
PR-Skillverse/
│
├── backend/
│   ├── server.js
│   ├── firebase-admin.js
│
├── frontend/
│   ├── public/
│   │   ├── _redirects
│   │   └── favicon.ico
│
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminSidebar.jsx
│   │   │   ├── AdminUpload.jsx
│   │   │   ├── AdminUpload.css
│   │   │   ├── AdminVideoList.jsx
│   │   │   ├── AdminVideoList.css
│   │   │   ├── CreateBatch.jsx
│   │   │   ├── LiveClassManager.jsx
│   │   │   └── UploadCourse.jsx
│   │
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── VideoPlayer.css
│   │   │   ├── CourseSidebar.jsx
│   │   │   ├── LessonItem.jsx
│   │   │   └── ProtectedRoute.jsx
│   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── CoursePlayer.jsx
│   │   │   └── Login.jsx
│   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   └── Course.css
│   │
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── firestore.rules
├── package.json
└── README.md

👨‍🎓 STUDENT FLOW (HOW USERS LEARN)
1️⃣ Course Selection

SAP S/4HANA Finance

SAP FICO Workshop

2️⃣ Batch Assignment

Each student is linked to:

Course → Batch → Paid Status


Example:

SAP FICO
└── Batch: Jan 2025
    └── Student Access Enabled

3️⃣ Learning Page UI

Left: Video Player

Right: Course Content (Accordion)

Dynamic:

Trainer name

Description

Active lesson highlight

Auto lesson numbering

🧑‍💼 ADMIN PANEL FEATURES
🔐 Admin Authentication

Firebase Auth

ProtectedRoute.jsx

Admin email whitelist

🎬 Admin Video Upload System
Upload Fields

Course (SAP Finance / SAP FICO)

Batch (Calendar-based: Jan 2025, Mar 2025)

Module Name

Lesson Title (duplicate prevented)

Trainer Name

Description

YouTube Link

Firestore Save Format
videos {
  courseId: "sap-fico-workshop",
  batchId: "jan-2025",
  module: "GL Accounting",
  lessonOrder: 3,
  title: "Posting Entries",
  trainer: "Ram",
  description: "Posting logic explained",
  videoUrl: "https://youtube.com/embed/xxx",
  createdAt: Timestamp
}

📋 Batch-wise Video List

Admin can:

Filter by Course

Filter by Batch

See:

Upload date & time

Module

Lesson order

Delete video (real-time removal)
# ER DIAGRAM
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/c342baf8-7af0-466c-8ab1-852b7cc0c53a" />

#Screen Shots
Home page 
<img width="1908" height="822" alt="image" src="https://github.com/user-attachments/assets/5aae8c5c-c925-42f8-a0c5-6f2f6af1de27" />
About Page
<img width="1057" height="736" alt="image" src="https://github.com/user-attachments/assets/a40e3351-fc66-41f7-ae75-3eb646250a0a" />
#Trainer
<img width="1023" height="527" alt="image" src="https://github.com/user-attachments/assets/a93998aa-724a-4c70-916e-1388448981ee" />
#Courses
<img width="961" height="616" alt="image" src="https://github.com/user-attachments/assets/dbf90d65-784c-4faf-99e1-ccfc4a3a9ba0" />
#Testimonials
<img width="1682" height="693" alt="image" src="https://github.com/user-attachments/assets/4d30f867-9058-4ad4-8d9b-42d7d80f0edf" />
#Why Choose Us
<img width="806" height="622" alt="image" src="https://github.com/user-attachments/assets/f7e006ba-2805-40dc-984b-0343b8cc66d3" />
#Block & Media 
<img width="1073" height="736" alt="image" src="https://github.com/user-attachments/assets/fc096057-40bc-45b5-8732-d12031ef7c74" />
#Contact Page
<img width="1034" height="720" alt="image" src="https://github.com/user-attachments/assets/3c02e48d-f4ab-4681-a617-94a2b705a67e" />
#Footer Section
<img width="1902" height="315" alt="image" src="https://github.com/user-attachments/assets/57478a1b-cbfc-4fb1-baed-9f29e799c22d" />
#Student login page
<img width="1919" height="820" alt="image" src="https://github.com/user-attachments/assets/68e051be-0b32-4464-ac42-70ffdd7ae89e" />
# Courses page
<img width="1919" height="835" alt="image" src="https://github.com/user-attachments/assets/b50ed5e2-6b13-43b7-9e7b-866895d8e5ec" />
# Videos Page

# Admin Login Page
<img width="1912" height="822" alt="image" src="https://github.com/user-attachments/assets/0184f073-a9a5-4449-8c18-5dd1205e937f" />


#Backend Sucess full running
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/b98ac2de-f97d-4151-9740-7eb4b5f745f2" />

🗂️ BATCH MANAGEMENT (COMMERCIAL LOGIC)
Why Batches?

New students every month

Paid access control

Same course, different timelines

Batch Example
SAP FICO
├── Jan 2025 (Paid)
├── Mar 2025 (Upcoming)
└── May 2025 (Draft)

Batch Creation (Admin)

Batch name

Start date

Price

Status (Active / Closed)

💳 PAID BATCH LOGIC
Firestore Structure
users {
  uid: {
    email: "student@gmail.com",
    enrolledBatches: ["sap-fico_jan-2025"],
    paid: true
  }
}

Access Rule

Student sees videos only if enrolled

Others redirected to payment page

🔐 FIRESTORE SECURITY RULES (CRITICAL)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /videos/{videoId} {
      allow read: if request.auth != null &&
        resource.data.batchId in
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.enrolledBatches;

      allow write, delete: if request.auth.token.admin == true;
    }

    match /batches/{batchId} {
      allow read: if true;
      allow write: if request.auth.token.admin == true;
    }
  }
}

📊 ADMIN DASHBOARD (NEXT PHASE)
KPIs

Total Courses

Total Batches

Active Students

Revenue per batch

Completion %

🧪 RCA – ROOT CAUSE ANALYSIS (PAST ISSUES)
❌ Problem

Videos not appearing

Batch dropdown empty

CSS not applying

✅ Root Causes

Incorrect Firestore query filters

Batch field missing in uploads

CSS not imported in component

Duplicate module creation

YouTube embed URL not converted

🔧 Fixes Applied

Standardized Firestore schema

getEmbedUrl() function

Batch-first data architecture

Central CSS imports

AdminUpload refactor

🚀 DEPLOYMENT READY

Netlify (Frontend)

Firebase Firestore

Firebase Auth

Razorpay (Payments – optional)

🧠 FUTURE READY FEATURES

Certificates per batch

Progress tracking

Quiz per module

Mobile app (React Native)

AI mentor bot

Instructor role separation


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
