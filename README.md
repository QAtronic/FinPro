# CorpFin Pro - Corporate Finance Management Platform

A production-ready corporate finance web application designed for CFO/Controller/FP&A teams. Provides comprehensive features including budgeting, forecasting, cash-flow planning, multi-entity consolidation, variance analysis, scenario modeling, AR/AP summaries, KPI dashboards, and exportable reports.

## 🚀 Features

### Core Functionality
- **Authentication & RBAC**: Multi-role access control (CFO, Controller, Analyst, Viewer)
- **Multi-Entity Support**: Consolidate multiple legal entities with different currencies
- **Chart of Accounts**: Flexible COA management with parent-child relationships
- **Budgeting & Forecasting**: Version-based planning with driver-based calculations
- **Financial Consolidation**: Multi-entity consolidation with FX rate application
- **Reporting & Analytics**: P&L, Balance Sheet, Cash Flow, Variance Analysis
- **Cash Flow Planning**: 13-week cash flow projections and AR/AP aging
- **Scenario Modeling**: What-if analysis with driver adjustments
- **Data Import**: CSV/XLSX import for GL data and transactions
- **Audit & Approvals**: Complete audit trail and approval workflows

### Technical Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + TailwindCSS + shadcn/ui
- **Backend**: Next.js API Routes + Prisma ORM + PostgreSQL
- **Authentication**: NextAuth.js with Credentials Provider
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Deployment**: Docker + Vercel ready

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 15+ (or SQLite for local development)
- Docker & Docker Compose (optional, for containerized development)

## 🛠️ Installation

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd corpfin-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/corpfin_pro"
   # For local development with SQLite:
   # DATABASE_URL="file:./dev.db"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here-change-in-production"

   # App
   NODE_ENV="development"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run database migrations
   npm run prisma:migrate
   
   # Seed the database with demo data
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Sign in with: `admin@corpfin.pro` / `Admin123!`

### Option 2: Docker Development

1. **Clone and navigate to the project**
   ```bash
   git clone <repository-url>
   cd corpfin-pro
   ```

2. **Start the development environment**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. **Set up the database (in a new terminal)**
   ```bash
   # Run migrations
   docker-compose -f docker-compose.dev.yml exec app npm run prisma:migrate
   
   # Seed the database
   docker-compose -f docker-compose.dev.yml exec app npm run seed
   ```

4. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Sign in with: `admin@corpfin.pro` / `Admin123!`

## 🧪 Testing

### Unit Tests (Vitest)
```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### E2E Tests (Playwright)
```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npm run e2e

# Run E2E tests in headed mode
npm run e2e:headed

# Run E2E tests in UI mode
npm run e2e:ui
```

## 🏗️ Building for Production

### Local Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Docker Production Build
```bash
# Build production image
docker build -t corpfin-pro .

# Run production container
docker run -p 3000:3000 \
  -e DATABASE_URL="your-production-db-url" \
  -e NEXTAUTH_SECRET="your-production-secret" \
  corpfin-pro
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
   - Push your code to GitHub/GitLab
   - Connect the repository in Vercel dashboard

2. **Configure environment variables in Vercel**
   ```env
   DATABASE_URL="your-production-postgresql-url"
   NEXTAUTH_URL="https://your-domain.vercel.app"
   NEXTAUTH_SECRET="your-production-secret"
   NODE_ENV="production"
   ```

3. **Deploy**
   - Vercel will automatically deploy on push to main branch
   - Run database migrations: `npm run prisma:migrate`
   - Seed production data if needed: `npm run seed`

### Railway Deployment

1. **Connect to Railway**
   - Install Railway CLI: `npm i -g @railway/cli`
   - Login: `railway login`
   - Link project: `railway link`

2. **Add PostgreSQL service**
   - Create PostgreSQL service in Railway dashboard
   - Copy the connection URL to environment variables

3. **Deploy**
   ```bash
   railway up
   ```

### Render Deployment

1. **Create a new Web Service**
   - Connect your GitHub repository
   - Set build command: `npm install && npm run build`
   - Set start command: `npm start`

2. **Add PostgreSQL service**
   - Create PostgreSQL service in Render dashboard
   - Link it to your web service

3. **Configure environment variables**
   - Add all required environment variables in Render dashboard

## 📁 Project Structure

```
corpfin-pro/
├── app/                    # Next.js App Router pages
│   ├── api/               # API route handlers
│   ├── auth/              # Authentication pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard/        # Dashboard components
│   └── providers/        # Context providers
├── lib/                  # Utility libraries
│   ├── services/         # Business logic services
│   ├── utils.ts          # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   └── db.ts             # Database connection
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Prisma schema
│   └── seed.ts           # Database seeding
├── tests/                # Test files
│   ├── unit/             # Vitest unit tests
│   └── e2e/              # Playwright E2E tests
├── docker-compose.dev.yml # Docker development setup
├── Dockerfile            # Production Docker image
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

### Chart of Accounts Groups
Edit `lib/services/consolidation.ts` to modify COA groupings:
```typescript
const COA_GROUPS = {
  REVENUE: ['4000', '4100', '4200'],
  COGS: ['5000', '5100', '5200'],
  // ... add more groups
}
```

### Report Builder Configuration
Edit `lib/services/reports.ts` to customize report templates:
```typescript
const REPORT_TEMPLATES = {
  PNL: {
    sections: ['Revenue', 'COGS', 'Gross Profit', 'Operating Expenses'],
    calculations: ['subtotal', 'percentage', 'variance']
  }
  // ... add more templates
}
```

### Driver Formulas
Edit `lib/services/drivers.ts` to add new driver types:
```typescript
const DRIVER_TYPES = {
  HEADCOUNT: 'headcount * salary',
  UNITS: 'units * price * seasonality',
  // ... add more driver types
}
```

## 🔐 Security

### Default Credentials
- **Admin User**: `admin@corpfin.pro` / `Admin123!`
- **⚠️ IMPORTANT**: Change these credentials in production!

### Security Features
- Password hashing with bcryptjs
- CSRF protection
- Role-based access control (RBAC)
- Input validation with Zod
- Audit logging for sensitive operations
- Rate limiting on authentication endpoints

## 📊 Database Schema

The application uses a comprehensive Prisma schema with the following key models:

- **User**: Authentication and role management
- **Organization**: Multi-tenant support
- **Entity**: Legal entities for consolidation
- **Account**: Chart of accounts
- **Version**: Budget/forecast versions
- **PlanCell**: Budget/forecast data
- **FxRate**: Foreign exchange rates
- **AuditLog**: Complete audit trail

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the API documentation at `/api/docs`

## 🔄 Updates

To update the application:

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Update dependencies**
   ```bash
   npm install
   ```

3. **Run database migrations**
   ```bash
   npm run prisma:migrate
   ```

4. **Rebuild the application**
   ```bash
   npm run build
   ```

---

**CorpFin Pro** - Professional Corporate Finance Management Platform
