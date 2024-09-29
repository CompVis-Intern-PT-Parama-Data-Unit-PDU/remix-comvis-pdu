import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
  } from "@remix-run/react";
import "./tailwind.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

  
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
        <body className="flex gap-2">
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Header />
            <Outlet />
            <Footer />

            <ScrollRestoration />
            <Scripts />
          </main>
        </body>
      </html>
    );
  }
  