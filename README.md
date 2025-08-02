# Home Cover GPT

A Next.js application for analyzing home insurance policy documents using OpenAI's API. Upload your policy PDF and get instant insights about coverage, risks, and recommendations.

🌐 **Live Demo**: [https://home-cover-gpt.vercel.app](https://home-cover-gpt.vercel.app)

## Project Overview

Home Cover GPT is an intelligent policy analysis tool that uses AI to extract and analyze key information from home insurance documents. Simply upload your policy PDF and receive a comprehensive breakdown of:

- **Coverage Summary**: What's included in your policy
- **Risk Analysis**: Potential gaps and vulnerabilities
- **Recommendations**: Suggestions for better coverage

Built with Next.js, TypeScript, and OpenAI's GPT-4, this application provides instant, accurate policy insights to help you make informed decisions about your home insurance.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>=16.x)
- **npm** (>=8.x) or **Yarn**
- **Vercel CLI** (`npm install -g vercel`)

## Quickstart

1. **Clone the repository**
   ```bash
   git clone https://github.com/bigfoote54/home-cover-gpt.git
   cd home-cover-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Then fill in your `OPENAI_API_KEY` in the `.env.local` file.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

1. **Sign in to Vercel**
   Go to [vercel.com](https://vercel.com) and import this repository

2. **Configure environment variables**
   - Go to **Settings → Environment Variables**
   - Add `OPENAI_API_KEY` for Development, Preview, and Production environments
   - Set the value to your OpenAI API key

3. **Deploy**
   - Push to the `main` branch, or
   - Click "Redeploy" in the Vercel dashboard

## API Reference

### Parse Policy Document

**Endpoint**: `POST /api/parse`

**Content-Type**: `multipart/form-data`

**Request Body**:
```jsonc
{
  "file": "PDF file"  // Required: PDF document to analyze
}
```

**Success Response** (200 OK):
```jsonc
{
  "data": {
    "coverageSummary": string[],  // List of coverage items
    "risks": string[],            // List of identified risks
    "recommendations": string[]   // List of recommendations
  }
}
```

**Error Response** (400/500):
```jsonc
{
  "error": "Error message describing the issue"
}
```

**File Requirements**:
- Format: PDF only
- Size: Maximum 5MB
- Content: Home insurance policy document

## Development

```bash
npm install
npm run dev
```

## Security

- API keys are loaded server-side only via `process.env.OPENAI_API_KEY`
- Local environment files (`.env`, `.env.local`) are ignored by git
- Use `.env.local.example` as a template for required environment variables

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to submit issues and pull requests.