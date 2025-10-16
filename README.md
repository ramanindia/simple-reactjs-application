# Simple ReactJS Application

A minimal **React.js** application that fetches data from an API and renders it to the page.  
Built using **Create React App (CRA)** for fast development and optimized production builds.

---

## Features

- Simple and lightweight React setup.
- Fetches data from an API and displays it dynamically.
- Configurable build paths for subfolder deployment.
- Supports both development and production environments.

---

## Prerequisites

- Node.js (v16 or higher)
- npm (Node package manager)

---

## Setup Instructions

### 1) Install Dependencies

```
npm install
```

---

### 2) Start the Development Server

This will start a local development server and open the app in your default browser at http://localhost:3000.

```
npm start
```

By default, the app runs on port **3000**.

---

### 3) Build the Application for Production

Generate an optimized production build in the `/build` folder:

```
npm run build
```

This creates a production-ready version of your app with static assets optimized for performance.

---

## Hosting in a Subfolder

By default, **Create React App (CRA)** assumes your app is served from `/`.  
If your app will be hosted in a subfolder (for example, `http://localhost/react/first/`), update the `homepage` field in your `package.json` file before building:

```
{
  "name": "simple-reactjs-application",
  "version": "1.0.0",
  "homepage": "http://localhost/react/first/",
  "private": true,
  ...
}
```

Then rebuild your app:

```
npm run build
```

You can now access your production build at:

http://localhost/react/first/
