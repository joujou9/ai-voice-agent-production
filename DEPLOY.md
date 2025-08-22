# Deploy Guide (Railway)

## Quick Deploy Commands

### Instalar o Railway CLI
npm i -g @railway/cli

### Backend (Agent)
```bash
cd agent
# Deploy to Railway (install railway CLI first)
railway login
railway init
railway up
```

### Frontend
```bash
cd frontend
# Deploy to Vercel
npx vercel
```

## Environment Variables Setup

### Backend (.env)
```
LIVEKIT_URL=wss://your-project.livekit.cloud
LIVEKIT_API_KEY=your-api-key
LIVEKIT_API_SECRET=your-api-secret
CARTESIA_API_KEY=your-cartesia-key
OPENAI_API_KEY=your-openai-key
DEEPGRAM_API_KEY=your-deepgram-key
```

### Frontend (.env.local)
```
LIVEKIT_API_KEY=your-api-key
LIVEKIT_API_SECRET=your-api-secret
NEXT_PUBLIC_LIVEKIT_URL=wss://your-project.livekit.cloud
```

## Platform Options

| Component | Platform | Free Tier | Notes |
|-----------|----------|-----------|-------|
| Backend | Railway | Yes | Easy Python deploy |
| Backend | Render | Yes | Good for Python apps |
| Frontend | Vercel | Yes | Best for Next.js |
| Frontend | Netlify | Yes | Good alternative |
| LiveKit | LiveKit Cloud | Yes | Required for voice rooms |

# Deploy Guide (Render)
https://youtu.be/cw34KMPSt4k?si=Ivs8K-taqHaLOBls