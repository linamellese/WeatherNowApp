# 🚀 Deployment Guide - WeatherNowApp

This guide explains how to deploy your WeatherNow application to production, separating the **React Frontend** (on Vercel/Netlify) and the **Node.js Backend** (on Render).

---

## 📦 Step 1: Push Your Code to GitHub

Since both Vercel/Netlify and Render connect directly to GitHub for continuous deployment, your code needs to be in a repository first.

1. Create a **new repository** on [GitHub](https://github.com/new).
2. Run the following commands in the root of your workspace to initialize git (if not done) and push:
   ```bash
   git init
   git add .
   git commit -m "chore: prepare configuration for production deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## ⚙️ Step 2: Deploy the Node.js Backend to Render

[Render](https://render.com) is excellent for hosting Node.js servers for free.

### Setup Instructions:
1. Log in to [Render](https://dashboard.render.com).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Fill in the following details:
   | Setting | Value | Note |
   | :--- | :--- | :--- |
   | **Name** | `weathernow-backend` | Or any unique name you prefer |
   | **Root Directory** | `backend` | **CRITICAL:** Specifies the subdirectory where the backend resides |
   | **Runtime** | `Node` | |
   | **Build Command** | `npm install` | |
   | **Start Command** | `npm start` | |
   | **Instance Type** | `Free` | |

5. Click **Advanced** and add the following **Environment Variables**:
   - `OPENWEATHER_API_KEY`: *Your actual OpenWeather API key*
   - `CORS_ORIGIN`: *Leave this empty for now, or set to your Vercel/Netlify URL after deploying the frontend*
   - `NODE_ENV`: `production`

6. Click **Create Web Service**.
7. Once deployed, Render will provide you with a public URL, for example:
   `https://weathernow-backend.onrender.com`
   > [!NOTE]
   > Free instance types on Render automatically spin down after 15 minutes of inactivity. When you make the first request after a period of inactivity, the server will take ~50 seconds to spin back up.

---

## 🎨 Step 3: Deploy the React Frontend to Vercel or Netlify

We recommend **Vercel** because it has excellent speed, out-of-the-box support for React + Vite, and is very simple to use.

### Option A: Deploy to Vercel (Recommended ⭐)
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your GitHub repository.
4. Configure the following project settings:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Expand **Environment Variables** and add:
   - Name: `VITE_API_URL`
   - Value: `https://weathernow-backend.onrender.com` *(The URL you got from Render in Step 2)*

6. Click **Deploy**. Vercel will create your project and give you a frontend URL, e.g., `https://weathernow-frontend.vercel.app`.

---

### Option B: Deploy to Netlify
1. Log in to [Netlify](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Choose GitHub and select your repository.
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist` (or `dist` depending on context, usually `dist` relative to the base directory)
5. Under **Environment Variables**, click **Add variable**:
   - Key: `VITE_API_URL`
   - Value: `https://weathernow-backend.onrender.com` *(Your Render backend URL)*
6. Click **Deploy Site**.

---

## 🔗 Step 4: Link Frontend and Backend (CORS Configuration)

Once your frontend is deployed (e.g. at `https://weathernow.vercel.app`), configure CORS on your backend so it allows secure requests from your frontend:

1. Copy your frontend URL from Vercel or Netlify.
2. Go to your backend service dashboard on **Render**.
3. Go to **Environment** settings.
4. Update the `CORS_ORIGIN` variable to match your frontend URL:
   - Key: `CORS_ORIGIN`
   - Value: `https://weathernow-frontend.vercel.app` *(Do NOT include a trailing slash)*
5. Save changes. Render will automatically redeploy your backend with the new configuration.

---

## 🛠️ Local Development (Remains Intact)

You can still run the application locally exactly as you did before.
1. Run backend: `cd backend && npm run dev`
2. Run frontend: `cd frontend && npm run dev`
Because no environment variables are set locally, the frontend will automatically fallback to the Vite local proxy server on port `3000` (which routes `/api` to `http://localhost:5000`).
