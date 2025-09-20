# 🔐 NextAuth Studio

A complete **Next.js 15** fullstack authentication system with modern UI, JWT tokens, and MongoDB integration. Built with TypeScript and styled with Tailwind CSS.

## ✨ Features

- 🔒 **Complete Authentication Flow** - Signup, Login, Logout
- 🎯 **JWT Token Management** - Secure token-based authentication
- 🗄️ **MongoDB Integration** - User data storage with Mongoose
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds and card layouts
- 🔐 **Password Security** - Bcrypt hashing for password protection
- 🍪 **HTTP-Only Cookies** - Secure token storage
- 📱 **Responsive Design** - Mobile-friendly interface
- 🚨 **Toast Notifications** - User feedback with react-hot-toast
- 🛡️ **Protected Routes** - Token-based route protection
- 👤 **User Profiles** - Dynamic and static profile pages

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Notifications**: react-hot-toast
- **HTTP Client**: Axios

## 📁 Project Structure

```
src/
├── app/
│   ├── api/users/          # Authentication API routes
│   │   ├── signup/         # User registration
│   │   ├── login/          # User login
│   │   ├── logout/         # User logout
│   │   └── getviatoken/    # Get user by token
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── profile/            # Profile pages
│   └── getviatoken/        # Token-based user info
├── dbConfig/               # Database configuration
├── helpers/                # Utility functions
├── models/                 # MongoDB schemas
└── middleware.ts           # Route protection middleware
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextauth-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET_KEY=your-super-secret-jwt-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/signup` | Register new user |
| POST | `/api/users/login` | User login |
| GET | `/api/users/logout` | User logout |
| GET | `/api/users/getviatoken` | Get user by token |

## 📱 Pages

- **`/`** - Home page
- **`/signup`** - User registration
- **`/login`** - User login
- **`/profile`** - Main profile page
- **`/profile/[id]`** - Dynamic profile page
- **`/getviatoken`** - Token-based user info display

## 🔐 Authentication Flow

1. **Signup**: User creates account → Password hashed → Stored in MongoDB
2. **Login**: Credentials verified → JWT token generated → Stored in HTTP-only cookie
3. **Protected Routes**: Token extracted from cookie → Verified → User data retrieved
4. **Logout**: Token cookie cleared → User redirected to login

## 🎨 UI Features

- **Gradient Backgrounds** - Beautiful color transitions
- **Card-based Layout** - Modern component design
- **Hover Effects** - Interactive elements
- **Loading States** - User feedback during operations
- **Form Validation** - Client-side validation
- **Toast Notifications** - Success/error messages
- **Responsive Design** - Mobile-first approach

## 🛡️ Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Tokens** - Secure token-based authentication
- **HTTP-Only Cookies** - XSS protection
- **Environment Variables** - Secure configuration
- **Input Validation** - Server-side validation
- **Error Handling** - Proper error responses

## 🧪 Testing

Test the API endpoints using:
- **Postman** - GUI testing
- **cURL** - Command line testing
- **Browser** - Frontend testing

Example cURL for login:
```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'
```

## 🚀 Deployment

1. **Vercel** (Recommended)
   ```bash
   npm run build
   vercel --prod
   ```

2. **Environment Variables**
   Set up the same environment variables in your deployment platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database solution
- Tailwind CSS for the styling system
- All the open-source contributors

---

**NextAuth Studio** - Complete Next.js Authentication Solution 🚀