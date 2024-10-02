import { useState } from 'react'
import { ThemeProvider } from "./components/theme-provider"
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
  } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/tailwind.css" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex gap-2">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Header />
            <Outlet />
            <Footer />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}