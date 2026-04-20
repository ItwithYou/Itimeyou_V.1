# iTimeYou V.1

iTimeYou - Independent from Base44. This project is a fully standalone React app with no dependency on Base44 services.

## Tech Stack

- React 18 + Vite
- TailwindCSS + shadcn/ui (Radix UI)
- React Router DOM
- React Query (TanStack)
- Zustand / local state management

## Getting Started

### Prerequisites

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Create a `.env.local` file if needed (no Base44 variables required)

5. Run the app:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- All Base44 SDK dependencies have been removed
- Auth and data are managed locally — connect your own backend as needed
- The `base44/` folder contains schema definitions only (no runtime dependency)
