# Emerald Addis Frontend

A React + Vite real-estate website frontend for Emerald Addis.

## Requirements

- Node.js 18 or newer
- npm
- Internet connection for the first dependency install

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx`, `src/data.js`, `src/styles.css`: original landing page. These files are preserved.
- `src/app`: router, global providers and lightweight query cache.
- `src/components`: reusable UI, layout and common components.
- `src/features`: feature modules for properties, projects, services, inquiries, about, testimonials and locations.
- `src/pages`: routed public pages.
- `src/services`: API and browser storage helpers.
- `src/store`: lightweight local state hooks.
- `src/styles`: additional styles for routed pages, isolated under `ea-` class names.

## Routes

- `/` — existing landing page
- `/properties` — searchable/filterable property listings
- `/properties/:slug` — property details and enquiry form
- `/projects` — project listing
- `/projects/:slug` — project details and enquiry form
- `/about` — company information
- `/services` — service overview
- `/contact` — enquiry form and contact details
- `/privacy-policy` — privacy information
- `*` — not-found page

## Demo data and backend integration

The site uses the existing `src/data.js` property and project data when no API URL is configured. Enquiry submission runs in demo mode and does not send an email or persist data.

To connect a backend, copy `.env.example` to `.env` and set `VITE_API_URL` to the backend base URL. Review the API endpoint paths in `src/services/api/endpoints.js` and adapt response handling to match your API.

## Notes

- The original homepage files and `src/main.jsx` are intentionally left unchanged.
- All new source files use JavaScript/JSX, not TypeScript.
- No customer login/dashboard has been added.
- `src/app/providers.jsx` is ready as a central provider wrapper, but is not wired into `main.jsx` because that entry file was requested to remain unchanged.
- Property/project images currently reuse the supplied demo image URLs; replace them with approved production photography before launch.
- Confirm business contact details and have the privacy policy reviewed before publishing.
