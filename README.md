# Policy Analysis App

A Next.js application for analyzing policy documents using OpenAI's API.

## Configuration

1. Copy `.env.local.example` to `.env.local`
2. Fill in your `OPENAI_API_KEY=sk-…` in `.env.local`
3. Run the app with `npm run dev` or deploy — your key will be loaded server-side only

## Development

```bash
npm install
npm run dev
```

## Security

- API keys are loaded server-side only via `process.env.OPENAI_API_KEY`
- Local environment files (`.env`, `.env.local`) are ignored by git
- Use `.env.local.example` as a template for required environment variables