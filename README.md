# remix-comvis-pdu
Repository ini digunakan untuk Frontend dan (mungkin) Backend dari Computer Vision Website.

## App Routing Directories
app/
├── routes/
│   ├── login.tsx                    # Login page
│   ├── app.tsx                      # Layout route for authenticated pages (global header, footer, sidebar)
│   ├── app/
│   │   ├── index.tsx                # Home page (Insight Chart)
│   │   ├── profile.tsx              # Profile settings page
│   │   ├── cutting-analysis.tsx     # List/overview page for cutting analysis (Feature 1)
│   │   ├── cutting-analysis/$cameraId.tsx  # Detail page for a specific camera in cutting analysis
│   │   ├── drilling-monitoring.tsx  # List/overview page for drilling monitoring (Feature 2)
│   │   ├── drilling-monitoring/$cameraId.tsx  # Detail page for a specific camera in drilling monitoring
│   │   ├── reports.tsx              # Report and log history page
│   │   ├── camera-settings.tsx      # Camera settings page
│   │   ├── user-management.tsx      # User management page
│   │   ├── logout.tsx               # Logout page
└── components/
    ├── Header.tsx                   # Header component with profile, dropdown, notification icons
    ├── Footer.tsx                   # Footer component
    ├── Sidebar.tsx                  # Sidebar component with feature navigation
