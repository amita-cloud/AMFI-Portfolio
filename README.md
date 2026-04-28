# AMFI Portfolio

This repository now includes a minimal Node.js web app scaffold that is ready to deploy on Railway.

## What was fixed

The connected repository snapshot in this environment was effectively empty (only `.gitkeep`), so there was no runnable app to deploy. A deployable baseline app and Railway config were added.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

Health check endpoint:

- `GET /health` -> `{ "status": "ok" }`

## Railway deployment

1. Push this repository to GitHub.
2. In Railway, create a new project and select **Deploy from GitHub Repo**.
3. Select this repo/branch.
4. Railway auto-detects Node.js and runs `npm start` (also defined in `Procfile`).

No extra environment variables are required.
