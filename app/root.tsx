import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
import "./tailwind.css";

  
  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <h1 className="text-3xl font-bold underline text-purple-700">Computer Vision Drilling Monitoring Support</h1>
          <Outlet />
  
          <Scripts />
        </body>
      </html>
    );
  }
  