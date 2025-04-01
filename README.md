# Glamify - eCommerce Website 🛍️

Glamify is a fully responsive eCommerce platform built with **React.js** for the frontend and **Spring Boot** for the backend. It provides a seamless shopping experience with secure authentication, product management, and order handling.

## ✨ Features
- 🔐 **User Authentication** (JWT-based security)
- 🛒 **Product Listing & Management**
- 📦 **Order Processing System**
- 🛠️ **Admin Dashboard** for managing products and orders
- 📱 **Responsive UI** using Tailwind CSS

## ⚡ Installation Guide

### **Frontend (React.js) 🚀**
1. Open the project folder (`react/`) in **VS Code**.
2. Install dependencies:
   ```sh
   npm i
   ```
3. Start the development server:
   ```sh
   npm start
   ```

### **Backend (Spring Boot) 🖥️**
1. Import the backend project (`ecommerce-server/`) as a **Maven project** in your IDE (Eclipse/IntelliJ IDEA).
2. Open `application.properties` and update database configurations as needed.
3. Run the application from `EcommerceApplication.java`.

## 🛠️ Technologies Used
### **Frontend:**
- ⚛️ React.js
- 🎨 Tailwind CSS
- ⚡ Vite

### **Backend:**
- ☕ Spring Boot
- 🔑 JWT Authentication
- 🗄️ MySQL Database
- 🏗️ Hibernate ORM


### **Screenshots**
![image](https://github.com/user-attachments/assets/d53a2a55-de47-426c-923e-b2d9ad688087)
![image](https://github.com/user-attachments/assets/6c7327fb-69ee-4756-b727-3ab3843fe896)
![image](https://github.com/user-attachments/assets/9e8dc80d-4b70-4d58-b329-e64ff145c6a4)
![image](https://github.com/user-attachments/assets/864d6bff-10a8-4815-bea0-ec53362b99d7)
![image](https://github.com/user-attachments/assets/a2dd8aa3-47d4-4a2f-b1d3-ddba8c5afdf8)
![image](https://github.com/user-attachments/assets/d725078f-f545-49b5-860d-940750b41e89)
![image](https://github.com/user-attachments/assets/ed1afda8-f53f-4134-ad92-95810f634b2b)


## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/login` | 🔑 User login |
| `POST` | `/api/auth/register` | 📝 User registration |
| `GET` | `/api/products` | 🛍️ Fetch all products |
| `POST` | `/api/products` | ➕ Add a new product (Admin) |
| `DELETE` | `/api/products/{id}` | ❌ Delete a product (Admin) |
| `POST` | `/api/orders` | 📦 Place an order |

## 🤝 Contributing
Feel free to fork this repository and submit a pull request with improvements! 🚀
