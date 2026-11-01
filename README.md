# PrepWise AI

PrepWise AI is an interview preparation app with résumé analysis and building, AI interviews, learning roadmaps, a dashboard, and credit purchases.

## Architecture

- `frontend/`: React 19 and Vite app with Redux Toolkit, Firebase sign-in, and pages for the dashboard, résumé tools, interviews, roadmaps, and billing.
- `backend/gateway/`: Express API gateway. It checks Redis sessions and proxies requests to the services.
- `backend/services/auth/`: Firebase token verification, user records in MongoDB, and Redis sessions.
- `backend/services/resume/`: PDF uploads, résumé analysis with Groq, and MongoDB storage.
- `backend/services/interview/`: AI interview flow, feedback, and reports using LangChain/LangGraph and MongoDB.
- `backend/services/roadmap/`: AI learning roadmaps and YouTube resources.
- `backend/services/billing/`: Razorpay orders and payment verification.
- `backend/shared/redis/`: Shared Redis client. `backend/docker-compose.yml` starts a local Redis instance.

## Requirements

Install Node.js and npm, MongoDB, and Docker (or a local Redis server). Set up Firebase, Groq, YouTube Data API, and Razorpay credentials for the features that use them. The frontend uses the Firebase project configured in `frontend/src/utils/firebase.js`; use credentials from that project or update the configuration for your own project.

## Local setup

1. From `backend/`, run `docker compose up -d` to start Redis. Start MongoDB separately.
2. Copy each `.env.example` to `.env` in the same directory and set the values for your services. The examples cover the frontend, gateway, and all five backend services. Keep actual `.env` files private.
3. Put your Firebase Admin SDK service account JSON at `backend/services/auth/serviceAccountKey.json`. This file is private and is excluded from Git.
4. Run `npm install` in `backend/`, `backend/gateway/`, each directory under `backend/services/`, and `frontend/`.
5. In separate terminals, run `npm run dev` in `backend/gateway/`, each directory under `backend/services/`, and `frontend/`.
6. Open the Vite URL shown in the frontend terminal (normally `http://localhost:5173`).

The example ports are gateway `6000`, auth `6001`, résumé `6002`, interview `6003`, roadmap `6004`, and billing `6005`. The frontend points to the gateway through `VITE_BACKEND_URL`. The gateway routes `/api/auth`, `/api/resume`, `/api/interview`, `/api/roadmap`, and `/api/billing` to their services.

## Checks

In `frontend/`, run `npm run build` for a production build and `npm run lint` for ESLint. The backend packages currently have no test suite.

## Private and generated files

Dependency folders, build output, local environment files, the Firebase service account, and uploaded PDF résumés are excluded from Git. The app creates `backend/services/resume/uploads/` when needed.
