# simple-reactjs-application
A minimal React app that fetches data from an API and renders it to the page

# 1) Install dependencies
npm install

# 2) Start development server (http://localhost:3000)
npm start

# Generate optimized production build in /build
npm run build

By default, CRA builds assets assuming the app is served from /.
If you will host it in a subfolder (e.g., http://localhost/react/first/), set the homepage in package.json before building:

{
  "name": "simple-reactjs-application",
  "version": "1.0.0",
  "homepage": "http://localhost/react/first/",
  "private": true,
  ...
}

Then:

npm run build
Now you can access your application by this
http://localhost/react/first/
 
