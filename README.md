# Home Cover GPT

AI-powered home insurance document analysis with user authentication, persistent history, and PWA support.

## Features

- 🤖 **AI Analysis**: Upload and analyze home insurance documents
- 👤 **User Authentication**: Secure sign-in with email magic links
- 📚 **History**: View and manage past analyses
- 📄 **PDF Export**: Download analysis results as PDF
- 🔗 **Share Links**: Public sharing of analysis results
- 📱 **PWA Support**: Install as a mobile app with offline support

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Update with your database and auth settings
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deployment

The application is configured for Vercel deployment with:
- PostgreSQL database support
- NextAuth.js authentication
- PWA functionality
- Automatic Prisma client generation

## Tech Stack

- **Framework**: Next.js 14
- **Database**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js
- **UI**: Tailwind CSS + Radix UI
- **PWA**: next-pwa
- **PDF**: jsPDF + html2canvas

## Development

```bash
# Run tests
npm run test

# Build for production
npm run build

# Start production server
npm run start
```

## Version 1.0.5

Latest version with all roadmap features implemented and tested. Force deployment with build script and Prisma generation.

**Production deployment triggered from main branch.**

<!-- Minor update for git commit -->