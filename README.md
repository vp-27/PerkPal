<img src="public/mascot/perkpal-pal.png" width="76" alt="Pal, the PerkPal mascot holding a gold coin" />

# PerkPal

**All your perks. One happy little place.**

PerkPal brings everyday rewards, gift cards, and product warranties into one wallet. Originally built as a demo for a Rutgers Shark Tank event, it explores a simple idea: make it easier to see and use the value scattered across different apps, accounts, and receipts.

This repository contains an interactive frontend prototype. Brand connections, balances, barcodes, and transfers are simulated; no real rewards or money move through the app.

## Run locally

You’ll need Node.js 20+ and npm. From the repository directory:

```bash
npm ci
npm run dev
```

Open [localhost:8080](http://localhost:8080). If that port is occupied, use the URL Vite prints in the terminal.

No environment variables, API keys, or backend setup are required. Open the demo from the homepage to explore a sample wallet without signing in.

## What you can explore

- **One wallet:** Search and filter rewards programs, gift cards, and warranties; add sample items and view their details.
- **Upcoming expirations:** Red highlights deadlines within seven days; amber highlights later approaching deadlines. Icons and written countdowns accompany the colors.
- **Gift cards and warranties:** View sample card details, log a simulated purchase, and keep product coverage information together.
- **Connected accounts:** Add or unlink sample programs and simulate balance refreshes.
- **Discover perks:** Browse dining, shopping, and travel examples. An expandable travel calculator demonstrates point transfers using sample rates.
- **Preferences and exports:** Edit your demo profile, switch between light, dark, and system themes, save reminder preferences, and export wallet JSON or program CSV files.

## Demo behavior and data

State is saved in this browser’s `localStorage`. The app has no authentication service or server-side database. Sign-in and profile creation are demonstrations: passwords are neither verified nor saved. Use sample information rather than real account numbers, PINs, or credentials.

Alex and Sarah are demo profiles available on the sign-in page. They share the wallet stored in the current browser; switching profiles does not create a separate portfolio.

Expiration periods, reward valuations, merchant terms, and transfer bonuses are illustrative data, not live feeds. Sample countdowns do not automatically decrease with calendar time. Notification preferences persist, but the demo does not send email or push notifications.

To start over, choose **Settings → Reset sample wallet**. This restores the sample wallet and activity; it keeps your profile, theme, and reminder preferences. Clearing this site’s browser storage also removes its saved local data.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Product introduction, wallet preview, features, and FAQs |
| `/dashboard` | Wallet summary, upcoming expirations, searchable items, and activity |
| `/accounts` | Sample program connections and refresh controls |
| `/offers` | Perk discovery and the sample travel transfer calculator |
| `/settings` | Profile, appearance, reminder preferences, exports, and wallet reset |
| `/signin` | Demo profile selection and simulated sign-in forms |
| `/profile` | Redirects to `/settings` |

Other routes show the not-found page. Routes are defined in [`src/App.tsx`](src/App.tsx).

## Development

The app uses React 18, TypeScript, Vite with SWC, React Router, Tailwind CSS, shadcn/ui and Radix primitives, Lucide icons, and `next-themes`. Typography combines DM Sans, Manrope, and serif accents; web fonts currently load from Google Fonts.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server on port `8080` |
| `npm run build` | Build production assets into `dist/` |
| `npm run build:dev` | Build with Vite’s development mode |
| `npm run preview` | Serve the production build locally; use the printed URL |
| `npx tsc --noEmit -p tsconfig.app.json` | Check application TypeScript types |
| `npm run lint` | Run the repository’s ESLint configuration |

The Vite build does not run TypeScript checking; run the type-check command separately. There is currently no automated test suite.

### Where to make changes

| Location | Responsibility |
| --- | --- |
| [`src/pages/`](src/pages/) | Route-level pages |
| [`src/components/layout/`](src/components/layout/) | Site navigation, app shell, footer, and PerkPal logo lockup |
| [`src/components/dashboard/`](src/components/dashboard/) | Wallet cards, item forms, detail panels, expirations, and transfer calculator |
| [`src/components/common/BrandLogos.tsx`](src/components/common/BrandLogos.tsx) | Resolve names and codes to locally stored brand images |
| [`src/components/common/Pal.tsx`](src/components/common/Pal.tsx) | Shared mascot component |
| [`src/components/ui/`](src/components/ui/) | Shared UI primitives |
| [`src/lib/rewardsData.ts`](src/lib/rewardsData.ts) | Sample records, browser persistence, and wallet operations |
| [`src/lib/expiration.ts`](src/lib/expiration.ts) | Shared urgency thresholds and countdown wording |
| [`src/index.css`](src/index.css) | Design tokens, page styles, responsive layouts, and themes |

The store emits `perkpal_data_updated` after wallet changes. Profile changes emit `perkpal_auth_change` so the app shell can update.

For static hosting, publish `dist/` and configure an SPA fallback to `index.html` so direct visits to routes such as `/dashboard` work.

## Pal and brand assets

**Pal** is PerkPal’s sage-green companion with a gold reward coin. The transparent master artwork lives in [`public/mascot/`](public/mascot/); its [character notes and generation prompt](public/mascot/README.md) document the design for future pointing, waving, and celebration poses. Reuse the shared `Pal` component when adding it to a page.

Merchant logos are stored locally in [`public/brands/`](public/brands/), with download provenance recorded in [`sources.json`](public/brands/sources.json). The resolver uses initials for unsupported brands rather than inventing a logo. Brand names and marks identify demo examples and do not imply affiliation or partnership.

The repository does not currently include a `LICENSE` file. Third-party assets retain their respective ownership and usage terms.
