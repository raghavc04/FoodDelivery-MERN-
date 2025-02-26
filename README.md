# Food Delivery App (MERN Stack)

This is a **Food Delivery** web application built using the **MERN (MongoDB, Express, React, Node.js) stack**. It allows users to browse food items, place orders, and apply a personal coupon code for a discount.

## 🚀 Tech Stack
- **Frontend:** React.js, React Router, CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **State Management:** React Context API

---

## 📥 Steps to Clone, Setup, and Run

```sh
# 1️⃣ Clone the Repository
git clone https://github.com/raghavc04/FoodDelivery-MERN-.git
cd FoodDelivery-MERN-

# 2️⃣ Setup Frontend
cd client
npm install
npm run dev

# 3️⃣ Setup Backend
cd ../backend
npm install

# 4️⃣ Create .env File in Backend
echo "MONGO_URI=your_mongo_database_url" >> .env
echo "JWT_SECRET=your_jwt_secret" >> .env

# 5️⃣ Start Backend Server
npm run server


🎉 Features
User authentication (Login/Register)
Browse and order food items
Apply coupon code "RAGHAVC04" to reduce price
Secure API with JWT authentication
Responsive UI

💡 Personal Coupon Code
RAGHAVC04
