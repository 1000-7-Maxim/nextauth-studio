# 🔐 NextAuth Studio

A **production-ready** Next.js 15 fullstack authentication system with modern UI, JWT tokens, MongoDB integration, and real email verification. Built with TypeScript and styled with Tailwind CSS.

## ✨ Features

### 🔒 **Complete Authentication System**
- **User Registration** - Secure signup with email verification
- **Email Verification** - Real email verification with Gmail SMTP
- **User Login** - JWT-based authentication with email verification check
- **Protected Routes** - Middleware-based route protection
- **User Logout** - Secure token clearing
- **Token Management** - HTTP-only cookies for security

### 🎨 **Modern UI/UX**
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Beautiful Gradients** - Modern color schemes and transitions
- **Interactive Components** - Hover effects and loading states
- **Toast Notifications** - Real-time user feedback
- **Form Validation** - Client and server-side validation
- **Error Handling** - User-friendly error messages

### 🛡️ **Security Features**
- **Password Hashing** - bcrypt with salt rounds
- **JWT Tokens** - Secure token-based authentication
- **HTTP-Only Cookies** - XSS protection
- **Email Verification** - Prevents unverified user login
- **Route Protection** - Middleware-based access control
- **Input Validation** - Comprehensive server-side validation

## 🚀 Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database
- **Mongoose 8.18** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending with Gmail SMTP

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **React Hot Toast** - Toast notifications
- **Axios** - HTTP client

## 📁 Project Architecture

```
NextAuth Studio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/users/          # Authentication API Routes
│   │   │   ├── signup/         # User registration endpoint
│   │   │   ├── login/          # User login endpoint
│   │   │   ├── logout/         # User logout endpoint
│   │   │   ├── getviatoken/    # Get user by JWT token
│   │   │   └── verifyemail/    # Email verification endpoint
│   │   ├── login/              # Login page
│   │   ├── signup/             # Registration page
│   │   ├── profile/            # User profile pages
│   │   │   └── [id]/           # Dynamic profile routes
│   │   ├── verifyemail/        # Email verification page
│   │   ├── getviatoken/        # Token info display page
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── dbConfig/               # Database configuration
│   │   └── dbConfig.ts         # MongoDB connection setup
│   ├── helpers/                # Utility functions
│   │   ├── getDataFromToken.ts # JWT token decoder
│   │   └── mailer.ts           # Email sending utility
│   ├── models/                 # Database models
│   │   └── userModels.js       # User schema definition
│   └── middleware.ts           # Route protection middleware
├── public/                     # Static assets
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation
```

## 🛠️ Installation & Setup

### **1. Clone Repository**
```bash
git clone <repository-url>
cd nextauth-studio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Configuration**
Create a `.env` file in the root directory:

```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key-here

# Application Configuration
domain=http://localhost:3000

# Email Configuration (Gmail SMTP)
GMAIL_USER=your-gmail@gmail.com
GMAIL_PASS=your-gmail-app-password
```

### **4. Gmail SMTP Setup**
1. Enable 2-Step Verification in your Google Account
2. Generate App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use the 16-character app password in `GMAIL_PASS`

### **5. MongoDB Setup**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and add to `MONGO_URI`

### **6. Run Development Server**
```bash
npm run dev
```

### **7. Open Application**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 API Documentation

### **Authentication Endpoints**

| Method | Endpoint | Description | Body | Response |
|--------|----------|-------------|------|----------|
| POST | `/api/users/signup` | Register new user | `{username, email, password}` | User created + verification email |
| POST | `/api/users/login` | User login | `{email, password}` | JWT token in HTTP-only cookie |
| GET | `/api/users/logout` | User logout | None | Cookie cleared |
| GET | `/api/users/getviatoken` | Get user by token | None (uses cookie) | User data |
| POST | `/api/users/verifyemail` | Verify email | `{token}` | Email verified |

### **Request/Response Examples**

**Signup Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Login Request:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

## 📱 Application Pages

### **Public Pages**
- **`/`** - Landing page with dynamic authentication state
- **`/signup`** - User registration form
- **`/login`** - User login form
- **`/verifyemail`** - Email verification handler

### **Protected Pages**
- **`/profile`** - User dashboard
- **`/profile/[id]`** - Dynamic user profiles
- **`/getviatoken`** - Token information display

## 🔐 Authentication Flow

### **Registration Process**
1. User fills signup form
2. Server validates input and checks for duplicates
3. Password is hashed with bcrypt
4. User saved to MongoDB with `isVerified: false`
5. Verification email sent via Gmail SMTP
6. User receives email with verification link

### **Email Verification**
1. User clicks verification link from email
2. Token extracted from URL parameters
3. Server validates token and expiry
4. User marked as verified in database
5. User can now login

### **Login Process**
1. User submits login credentials
2. Server checks if email is verified
3. Password verified against hash
4. JWT token generated and stored in HTTP-only cookie
5. User redirected to profile

### **Route Protection**
1. Middleware intercepts protected routes
2. JWT token extracted from cookies
3. Token validated and user authenticated
4. Access granted or redirected to login

## 🎨 UI Components & Design

### **Design System**
- **Color Palette**: Blue, indigo, purple gradients
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle depth and elevation

### **Interactive Elements**
- **Buttons**: Hover effects and loading states
- **Forms**: Focus states and validation feedback
- **Cards**: Hover animations and shadows
- **Toasts**: Success, error, and info notifications

## 🛡️ Security Implementation

### **Password Security**
- bcrypt hashing with salt rounds
- Minimum password requirements
- Secure password storage

### **Token Security**
- JWT with expiration (1 day)
- HTTP-only cookies (XSS protection)
- Secure token validation

### **Route Security**
- Middleware-based protection
- Authentication state checking
- Automatic redirects

### **Input Validation**
- Server-side validation
- Duplicate prevention
- Error handling

## 🧪 Testing

### **Manual Testing**
1. **Registration Flow**
   - Test with valid/invalid inputs
   - Verify email sending
   - Test duplicate prevention

2. **Email Verification**
   - Check email delivery
   - Test token validation
   - Verify account activation

3. **Login Flow**
   - Test with verified/unverified accounts
   - Verify token generation
   - Test route protection

### **API Testing with cURL**
```bash
# Test signup
curl -X POST http://localhost:3000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"password123"}'

# Test login
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🚀 Deployment

### **Vercel Deployment (Recommended)**
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Environment Variables**
   Add all environment variables in Vercel dashboard

### **Other Platforms**
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Heroku**: Container deployment

## 📊 Performance & Optimization

- **Next.js 15**: Latest performance optimizations
- **React 19**: Improved rendering performance
- **Tailwind CSS**: Optimized CSS bundle
- **MongoDB**: Efficient database queries
- **JWT**: Stateless authentication

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **MongoDB** - Flexible database solution
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Seamless deployment platform
- **Open Source Community** - Continuous inspiration

---

**NextAuth Studio** - Production-Ready Authentication System 🚀

*Built with ❤️ using Next.js 15, React 19, and modern web technologies*