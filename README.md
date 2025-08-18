# 💰 CorpFin Pro - Corporate Finance Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Professional corporate finance web application for CFO/Controller/FP&A teams with dark theme, multi-entity consolidation, and comprehensive financial planning tools.

![CorpFin Pro Dashboard](https://img.shields.io/badge/Dashboard-Dark%20Theme%20Ready-success)

## 🌟 Features

### 🎨 **Modern Dark Theme**
- Beautiful dark blue/purple background with white text
- Optimized for low-light environments
- Professional and easy on the eyes

### 📊 **Financial Dashboard**
- Real-time KPI monitoring
- Interactive charts and graphs
- Revenue trends and expense breakdown
- Multi-currency support

### 👥 **Multi-Role Support**
- **CFO** - Full administrative access
- **Controller** - Data management and reporting
- **Analyst** - Read/write access to financial data
- **Viewer** - Read-only access

### 🏢 **Entity Management**
- Multi-entity consolidation
- Geographic distribution analysis
- Ownership percentage tracking
- Currency management per entity

### 📈 **Financial Planning**
- Budget and forecast management
- Version control for planning scenarios
- Approval workflows
- Variance analysis

### 📋 **Chart of Accounts**
- Hierarchical account structure
- Account type categorization
- Balance tracking
- Import/export capabilities

### 📊 **Reports & Analytics**
- Financial statements
- Performance dashboards
- Custom report generation
- Excel/CSV export

### 🔄 **Data Management**
- Excel/CSV import functionality
- Data validation and error handling
- Audit trail
- Backup and restore

### 💱 **FX Rate Management**
- Real-time exchange rates
- Historical rate tracking
- Multi-currency consolidation
- Rate change monitoring

### 🎯 **Business Drivers**
- Key performance indicators
- Driver impact analysis
- Trend monitoring
- Scenario modeling

### ✅ **Approval Workflows**
- Multi-level approval process
- Request tracking
- Status monitoring
- Email notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/corpfin-pro.git
   cd corpfin-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local`:
   ```env
   NEXTAUTH_SECRET=your-secret-key-here-change-in-production
   NEXTAUTH_URL=http://localhost:3000
   NODE_ENV=development
   DATABASE_URL=file:./dev.db
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@corpfin.pro` | `Admin123!` |
| **Analyst** | `analyst@corpfin.pro` | `Analyst123!` |
| **Controller** | `controller@corpfin.pro` | `Controller123!` |

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Server-side API
- **Prisma ORM** - Database management
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication
- **bcryptjs** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Docker** - Containerization

## 📁 Project Structure

```
corpfin-pro/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── planning/          # Financial planning
│   ├── entities/          # Entity management
│   ├── accounts/          # Chart of accounts
│   ├── reports/           # Reports and analytics
│   └── ...                # Other modules
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── prisma/               # Database schema
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎨 Dark Theme Implementation

The platform features a beautiful dark theme with:
- Dark blue/purple background (`#0f172a` to `#334155`)
- White text for excellent readability
- Optimized chart colors for dark backgrounds
- Consistent color scheme across all components
- Professional appearance suitable for financial applications

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run unit tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report
npm run e2e              # Run E2E tests

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio
npm run db:seed          # Seed database

# Docker
npm run docker:dev       # Start development containers
npm run docker:down      # Stop containers
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Railway
1. Connect your GitHub repository to Railway
2. Add PostgreSQL database
3. Set environment variables
4. Deploy

### Docker
```bash
# Build image
docker build -t corpfin-pro .

# Run container
docker run -p 3000:3000 corpfin-pro
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@corpfin.pro
- 📖 Documentation: [docs.corpfin.pro](https://docs.corpfin.pro)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/corpfin-pro/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Prisma](https://www.prisma.io/) for database management
- [NextAuth.js](https://next-auth.js.org/) for authentication

---

**Made with ❤️ for CFOs, Controllers, and FP&A professionals**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/corpfin-pro?style=social)](https://github.com/yourusername/corpfin-pro)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/corpfin-pro?style=social)](https://github.com/yourusername/corpfin-pro)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/corpfin-pro)](https://github.com/yourusername/corpfin-pro/issues)
