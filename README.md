# Adserver.Online React Integration Demo

A React demo application showcasing how to integrate [Adserver.Online](https://adserver.online) SaaS ad server into modern web applications.

[Live demo](https://adserver-online.github.io/react-demo)

## Quick Start

```bash
npm install
npm run dev
```

## Adding Banner Ads to Your React Application

### 1. Setup AdserverOnline Context Provider

Wrap your app with the `AdserverOnline` provider to manage the ad script loading:

```jsx
import AdserverOnline from './components/AdserverOnline'

function App() {
  return (
    <AdserverOnline>
      {/* Your app content */}
    </AdserverOnline>
  )
}
```

### 2. Add Banner Zones

Use the `AsoZone` component to display ads anywhere in your application:

```jsx
import AsoZone from './components/AsoZone'

function MyPage() {
  return (
    <div>
      {/* Page header banner */}
      <AsoZone 
        zoneId="YOUR_ZONE_ID" 
        width="728px" 
        height="90px" 
        reloadOnNavigation={false}
      />
      
      {/* Your page content */}
    </div>
  )
}
```

### 3. Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `zoneId` | string | required | Your Adserver.Online zone ID |
| `width` | string | optional | Banner width (e.g., "728px") |
| `height` | string | optional | Banner height (e.g., "90px") |
| `reloadOnNavigation` | boolean | `true` | Reload ad when navigating between pages |
| `onEmpty` | function | optional | Callback when no ad is available |

### 4. Custom Domain Configuration

If you have a custom ad serving domain, update the `mediaDomain` in `AdserverOnline.jsx`:

```jsx
// Replace with your custom domain
const mediaDomain = 'your-custom-domain.com'
```

## Getting Your Zone IDs

1. Sign up at [Adserver.Online](https://adserver.online)
2. Create your ad zones in the dashboard
3. Copy the zone IDs and use them in your `AsoZone` components

## Tech Stack

- React 19.1.0
- Vite
- Tailwind CSS
- React Router DOM
