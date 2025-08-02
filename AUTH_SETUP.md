# Authentication Setup Guide

This application now supports dual authentication using both NextAuth and Supabase. Users can sign in using:

1. **NextAuth Email Authentication** - Magic link sent to email
2. **Supabase Social Authentication** - Google and GitHub OAuth

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Email Configuration (for NextAuth email provider)
EMAIL_SERVER_HOST=your_email_host
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email_user
EMAIL_SERVER_PASSWORD=your_email_password
EMAIL_FROM=noreply@yourdomain.com

# Database (existing)
DATABASE_URL=postgresql://postgres:metzyw-bobned-6vIkmy@db.dxhmioooqbrtzkwnugog.supabase.co:5432/postgres
```

## Supabase Setup

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note down your project URL and anon key

2. **Configure OAuth Providers**:
   - In your Supabase dashboard, go to Authentication > Settings
   - Add Google OAuth:
     - Client ID: Your Google OAuth client ID
     - Client Secret: Your Google OAuth client secret
   - Add GitHub OAuth:
     - Client ID: Your GitHub OAuth app client ID
     - Client Secret: Your GitHub OAuth app client secret

3. **Configure Redirect URLs**:
   - Add `http://localhost:3000/auth/callback` to your Supabase redirect URLs
   - For production, add your domain + `/auth/callback`

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
5. Configure authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
6. Copy Client ID and Client Secret to Supabase

## GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL:
   - `http://localhost:3000/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
4. Copy Client ID and Client Secret to Supabase

## Features

### Sign-In Modal
- Located in the top-right corner of the navigation
- Offers three sign-in options:
  - Email (NextAuth magic link)
  - Google (Supabase OAuth)
  - GitHub (Supabase OAuth)

### Authentication Flow
1. **NextAuth Email**: User enters email, receives magic link
2. **Supabase Social**: User clicks provider, redirected to OAuth, then back to app
3. **Session Management**: Both auth methods sync with the same user database
4. **History Access**: Authenticated users can view their analysis history

### User Data Storage
- All user data is stored in the existing PostgreSQL database via Prisma
- Supabase users are automatically created in the local database
- Analysis history is linked to the user's email address

## Development

To run the application locally:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

## Production Deployment

1. Set up environment variables in your hosting platform
2. Configure OAuth redirect URLs for your production domain
3. Update Supabase project settings for production
4. Deploy the application

## Troubleshooting

### Common Issues

1. **OAuth Redirect Errors**: Ensure redirect URLs are correctly configured in both Supabase and OAuth providers
2. **Session Sync Issues**: Check that the user database is properly syncing between auth methods
3. **Environment Variables**: Verify all required environment variables are set

### Debug Mode

Enable debug logging by adding to your `.env.local`:

```env
DEBUG=next-auth:*
```

This will help identify authentication flow issues.