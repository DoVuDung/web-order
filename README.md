# Web Order - Food Delivery Application

A modern, full-stack food ordering application with group ordering capabilities, real-time updates, and comprehensive admin management.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- PostgreSQL database
- Clerk account for authentication

### Installation

```bash
# Clone repository
git clone https://github.com/DoVuDung/web-order.git
cd web-order

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your database and Clerk credentials

# Initialize database
npm run db

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📚 Full Documentation

For complete setup, architecture, and technical details, see [PROJECT_GUIDE.md](./PROJECT_GUIDE.md)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, HeroUI
- **Backend**: Next.js API Routes, Prisma, PostgreSQL
- **Authentication**: Clerk with role-based access control
- **State Management**: Zustand
- **Deployment**: Vercel (recommended)

## ✨ Key Features

- 🔐 **Authentication & Authorization** - Role-based access (Admin, Moderator, User)
- 👥 **Group Ordering** - Collaborative ordering with shared carts
- 🏪 **Restaurant Management** - Web scraping for menu data
- 📱 **Responsive Design** - Mobile-first with dark/light themes
- 🛡️ **Security** - Input validation, CSRF protection, secure headers
- ⚡ **Performance** - Optimized bundles, source maps, caching

## 🚦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db          # Push database schema
```

## 📖 Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── admin/         # Admin dashboard
│   ├── api/           # API endpoints
│   ├── components/    # Page components
│   └── orders/        # Order management
├── components/        # Shared components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and database
└── store/            # State management
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Andy Do**
- GitHub: [@DoVuDung](https://github.com/DoVuDung)
- Support: [Buy me a coffee](https://buymeacoffee.com/andydo)

---

⭐ Star this repository if it helped you!