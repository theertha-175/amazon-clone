# 🛒 Amazon Clone — Full-Stack E-Commerce Platform

A fully functional e-commerce application featuring a complete shopping pipeline, secure user authentication, real-time basket management, credit card processing via Stripe, and persistent order history tracking powered by Firebase.


---

## 📸 Application Walkthrough

### 1. Product Discovery & Authentication
| Home Page (Product Grid) | User Authentication |
|--------------------------|-------------------|
| ![Home](screenshots\home.png.png) | ![Login](screenshots\login.png.png) |

### 2. Shopping Cart & Order Verification
| Checkout Page (Cart & Subtotal) | Payment Page (Stripe Integration) |
|---------------------------------|----------------------------------|
| ![Checkout](screenshots\checkout.png.png) | ![Payment](screenshots\payment.png.jpg) |

### 3. Order Completion
| Persistent Order History |
|--------------------------|
| ![Orders](screenshots\orders.png.jpg) |

---

## 🛠️ Tech Stack & Architecture

This platform uses a decoupled cloud architecture to handle frontend delivery, backend payment logic, and database operations independently:

**Frontend:**
- React.js
- React Context API (Global State Management)
- React Router DOM (Client-Side Routing)
- Axios (HTTP Client)
- Stripe.js & React Stripe Elements

**Backend:**
- Node.js
- Express.js
- CORS
- Stripe API (Payment Intent Workflow)
- Firebase Cloud Functions (Serverless Backend)

**Database & Auth:**
- Cloud Firestore (NoSQL — stores user order history)
- Firebase Authentication (Email/Password)

**Hosting:**
- Firebase Hosting (Static React frontend)
- Firebase Emulator (Local backend development)

---

## ✨ Core Features

- 🏠 **Dynamic Home Page** — Product grid with images, titles, prices, and star ratings
- 🛍️ **Shopping Basket** — Add/remove products with real-time item count and subtotal calculation
- 🔐 **User Authentication** — Secure account creation and persistent login sessions via Firebase Auth
- 💳 **Stripe Payment Gateway** — Fully tokenized card input using Stripe Elements, routed through a secure Express backend endpoint
- 📦 **Order History** — Every successful transaction is instantly logged to Cloud Firestore and displayed on the Orders page
- 🔄 **Global State Management** — Context API and useReducer hook power a clean, predictable state machine across all components
- 📱 **Responsive Layout** — Flexbox-based design mimicking Amazon's desktop storefront layout

---

## 🔧 Local Development Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/theertha-175/amazon-clone.git
cd amazon-clone
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd functions
npm install
cd ..
```

### 4. Configure Firebase
- Create a project at [console.firebase.google.com](https://console.firebase.google.com)
- Enable **Firestore Database** and **Authentication (Email/Password)**
- Replace the config values in `src/firebase.js` with your own project credentials

### 5. Configure Stripe
- Create an account at [dashboard.stripe.com](https://dashboard.stripe.com)
- Replace the **publishable key** in `src/stripe.js`
- Replace the **secret key** in `functions/index.js`

### 6. Run the Application

Launch the Firebase emulator (backend):
```bash
firebase emulators:start --only functions
```

Launch the React frontend (new terminal):
```bash
npm start
```

---

## 💳 Test Payment Card

Use Stripe's test card to simulate payments:

| Field | Value |
|-------|-------|
| Card Number | `4242 4242 4242 4242` |
| Expiry Date | Any future date |
| CVC | Any 3 digits |
| ZIP | Any 5 digits |

---

## 📁 Project Structure
amazon-clone/
├── public/
├── src/
│   ├── App.js
│   ├── Home.js / Home.css
│   ├── Header.js / Header.css
│   ├── Product.js / Product.css
│   ├── Checkout.js / Checkout.css
│   ├── Payment.js / Payment.css
│   ├── Orders.js / Orders.css
│   ├── Login.js / Login.css
│   ├── reducer.js
│   ├── StateProvider.js
│   ├── firebase.js
│   ├── axios.js
│   └── stripe.js
├── functions/
│   └── index.js
├── firebase.json
└── README.md

---

## 🔄 Payment Flow

Add Product → Basket → Checkout → Stripe Payment → Firestore Order Saved → Basket Cleared → Orders Page

---

## 👩‍💻 Author

Built by **Theertha** as part of an 8-hour Full-Stack React challenge.