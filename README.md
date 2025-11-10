# 🐾 PawMart – Pet Adoption & Supplies Platform

PawMart is a **MERN Stack** based community platform where pet lovers can **adopt pets** or **buy pet supplies** like food, accessories, and care products — all in one place.  
The website is fully responsive, supports **dark/light theme**, and includes secure authentication, dynamic routing, and beautiful UI components.

---

## 🌍 Live Demo
🔗 [https://pawmart.netlify.app](https://pawmart.netlify.app)  
🔗 Backend: [https://pawmart-server.vercel.app](https://pawmart-server.vercel.app)

---

## 🧩 Features

### 🏠 Public Pages
- 🐕 **Home Page:** Banner slider, categories, recent listings, and adoption awareness.
- 🛍️ **Pets & Supplies Page:** All listings shown in a 3-column grid layout with filters and search.
- ℹ️ **Listing Details Page:** Detailed view with an “Adopt / Order Now” button and modal form.

### 🔐 Authentication
- Firebase Authentication (Email-Password + Google Login)
- Register, Login, Logout functionality
- Private routes for logged-in users

### 👤 Private User Pages
- **Add Listing:** Add your pet or product for adoption/sale.
- **My Listings:** View, update, or delete your listings.
- **My Orders:** See all your orders and download a **PDF report**.

### 🌗 UI & Design
- Fully **responsive layout** for mobile, tablet, and desktop.
- **Dark / Light theme** toggle using Tailwind.
- **Framer Motion animations** for smooth transitions.
- No default alerts — all actions use **SweetAlert** or **React Hot Toast**.
- Beautiful **Tailwind-based gradient backgrounds** and consistent component design.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js, React Router, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Firebase Auth, JWT |
| Extra Libraries | Framer Motion, SweetAlert2, jsPDF, jsPDF-AutoTable |

---

## ⚙️ Installation & Setup

1️⃣ Clone the Repository:
```bash
git clone https://github.com/yourusername/PawMart.git


cd PawMart_Client
npm install

2️⃣ Navigate to client and server folders:
cd ../PawMart_Server
npm install
3️⃣ Create .env files in both:
VITE_API_URL=https://pawmart-server.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_key


Server
PORT=3000
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET=your_strong_secret

4️⃣ Run the development servers:
# Client
npm run dev

# Server
npm start


💡 Bonus Features

📄 Download order reports as PDF

🔍 Search listings by name

🌗 Dark/Light Mode using Tailwind

💫 Smooth animations via Framer Motion

🧭 404 Not Found page with custom design


📜 License

This project is open-source and available under the MIT License.


❤️ Developed by Masud Rana

“Adopt, Don’t Shop — Give Every Pet a Loving Home.”