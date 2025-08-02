# Performance & Cost Optimizations

This document outlines the performance and cost optimizations implemented in the application.

## 1. File Upload Caching

### Overview
Duplicate PDF uploads are now cached to avoid redundant API calls and reduce costs.

### Implementation
- **Location**: `lib/cache.ts` and `components/FileUploader.tsx`
- **How it works**: 
  1. Computes SHA-256 hash of file contents using Web Crypto API
  2. Checks in-memory cache before making API call
  3. If cached result exists, returns immediately
  4. If not cached, calls API and stores result

### Benefits
- Reduces OpenAI API costs for duplicate uploads
- Improves user experience with instant results for repeated files
- Maintains data privacy (cache is in-memory only)

### Configuration
No additional configuration required. Cache is automatically managed.

## 2. Lazy Loading

### Overview
Non-critical UI components are lazy-loaded to improve initial page load performance.

### Implementation
- **Components**: `Testimonials`, `ResultsCard`, `Footer`
- **Loading states**: Skeleton components show during loading
- **Configuration**: Uses Next.js `dynamic()` with `ssr: false`

### Benefits
- Faster initial page load
- Reduced bundle size for critical path
- Better Core Web Vitals scores

### Customization
To lazy-load additional components:

```tsx
const MyComponent = dynamic(() => import('@/components/MyComponent'), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />
});
```

## 3. API Prefetching

### Overview
The analysis API is prefetched on hover to warm up the connection and reduce latency.

### Implementation
- **Location**: `components/Hero.tsx`
- **Trigger**: `onMouseEnter` on the main CTA button
- **Method**: HEAD request to `/api/parse`

### Benefits
- Reduces perceived latency for first-time users
- Warms up serverless function
- Improves user experience

## 4. Usage Monitoring & Alerts

### Overview
Automated monitoring of OpenAI usage with alerts when spending exceeds thresholds.

### Implementation
- **API Endpoint**: `pages/api/billing-alert.ts`
- **Scheduler**: GitHub Actions workflow (`.github/workflows/billing-alert.yml`)
- **Threshold**: $10/day (configurable)

### Setup

#### 1. Environment Variables
Add to your `.env.local`:

```bash
# Required
OPENAI_API_KEY=your_openai_api_key

# Optional
CRON_SECRET=your_cron_secret_key
ALERT_EMAIL=admin@yourdomain.com
```

#### 2. GitHub Secrets
Add these secrets to your GitHub repository:

- `OPENAI_API_KEY`: Your OpenAI API key
- `CRON_SECRET`: A secret key for API authentication
- `ALERT_EMAIL`: Email for alerts
- `SLACK_WEBHOOK_URL`: Slack webhook for notifications (optional)

#### 3. Deploy
The GitHub Action will run daily at 9 AM UTC. You can also trigger it manually.

### Customization

#### Adjust Spending Threshold
Edit `DAILY_SPEND_THRESHOLD` in `pages/api/billing-alert.ts`:

```typescript
const DAILY_SPEND_THRESHOLD = 25; // $25 per day
```

#### Change Schedule
Edit the cron expression in `.github/workflows/billing-alert.yml`:

```yaml
schedule:
  - cron: '0 9 * * *'  # Daily at 9 AM UTC
```

#### Email Alerts
Implement email sending in `sendAlertEmail()` function using your preferred service:

```typescript
// Example with SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: ALERT_EMAIL,
  from: 'alerts@yourdomain.com',
  subject: alertMessage.subject,
  text: alertMessage.body,
});
```

### Monitoring Dashboard
Consider implementing a simple dashboard to view usage trends:

```typescript
// pages/api/usage-stats.ts
export default async function handler(req, res) {
  // Return usage statistics for dashboard
}
```

## 5. Additional Optimizations

### Image Optimization
Add `loading="lazy"` to non-critical images:

```tsx
<img 
  src="/testimonial.jpg" 
  alt="Customer testimonial"
  loading="lazy"
  className="rounded-lg"
/>
```

### Bundle Analysis
Monitor bundle size with:

```bash
npm run build
npx @next/bundle-analyzer
```

### Performance Monitoring
Consider implementing:
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Error tracking (Sentry, LogRocket)

## Troubleshooting

### Cache Issues
- Clear cache: `clearCache()` from `lib/cache.ts`
- Check cache stats: `getCacheStats()`

### Billing Alerts Not Working
1. Verify `OPENAI_API_KEY` is set
2. Check GitHub Actions logs
3. Test endpoint manually: `curl -X POST /api/billing-alert`

### Performance Issues
1. Check bundle analyzer
2. Monitor Core Web Vitals
3. Review lazy loading implementation

## Metrics to Monitor

- **Cost**: Daily OpenAI spending
- **Performance**: Page load times, Core Web Vitals
- **User Experience**: Time to interactive, first contentful paint
- **Cache Hit Rate**: Percentage of cached vs. API calls

## Future Enhancements

1. **Persistent Cache**: Redis or database for cross-session caching
2. **Rate Limiting**: Implement per-user rate limits
3. **Advanced Analytics**: Detailed usage analytics dashboard
4. **CDN**: Content delivery network for static assets
5. **Service Worker**: Offline capabilities and caching