# PerkPal 🪙
### The Intelligent Loyalty, Points, & Rewards Hub
> *A unified command center for all your food perks, retail gift cards, airline miles, credit card rewards, and gadget warranties.*

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Status](https://img.shields.io/badge/Demo-Production--Grade-emerald)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Executive Overview

Every year, over **\$2.8 Billion** in food loyalty rewards, retail gift card balances, and airline points expire unspent simply because balances are scattered across dozens of individual merchant apps.

**PerkPal** unifies scattered rewards into a clean, modern command center. Guided by **PerkPal**, a friendly mascot holding a golden rewards coin, the platform blends the familiar craftsmanship of a native macOS desktop application and an interactive Apple Wallet mobile interface into a seamless, high-yield rewards copilot.

---

## 🚀 Flagship Features & Innovations

### 1. 🛡️ Expiration Radar (Front & Center)
- **Proactive Expiration Countdown**: Real-time 3-day, 12-day, and 18-day urgent expiration countdown cards so points never vanish unnoticed.
- **Urgent Action Prompts**: Highlighted warning chips pinpointing items requiring immediate in-store or online redemption (e.g. Domino's Piece of the Pie, Taco Bell Fire Tier rewards, Starbucks Stars).
- **1-Tap Claim Trigger**: Clicking any radar item opens the instant claim drawer with live barcodes and redemption instructions.

### 2. 🗄️ Unified Vault
- **Food Perks & Dining Programs**: Real-time tracking for Domino's, Taco Bell, Starbucks, Chipotle, Target Circle 360, Delta SkyMiles, Chase Sapphire, and Marriott Bonvoy.
- **Digital Gift Card Barcode Vault**: Amazon, Starbucks, Target, Sephora, and Chipotle digital cards with live spend simulator and copyable card/PIN credentials.
- **Gadget Warranty Registry**: Active coverage tracking for MacBooks, Sony headphones, Dyson appliances, and Bose audio equipment.
- **Search & Filter Tabs**: Fast instant filtering across All Items, Rewards, Gift Cards, and Warranties.

### 3. 🎨 Brand Icon System (`BrandLogos.tsx`)
- **Comprehensive Brand Library**: Scalable vector icons for American Express, Capital One, Starbucks, Domino's, Taco Bell, Delta, Chase, Target, Amazon, Apple, Sony, Dyson, and more.
- **Smart Resolver (`BrandIcon`)**: Automatically resolves logos by program name, merchant name, or frequent flyer code (e.g. `DL`, `SB`, `TG`, `AX`, `C1`).
- **Clean Dashboard Presentation**: Modern, high-contrast squircle containers with subtle borders across the vault and radar.

### 4. 🔀 Transfer Bonus Optimizer & Simulator
- **Live Transfer Multiplier Engine**: Live matrix tracking active airline and hotel transfer promos (e.g. *Amex MR → Virgin Atlantic +30%*, *Chase UR → Marriott +50%*, *Capital One → Air France +20%*).
- **Interactive Conversion Calculator**: Dynamic point transfer simulator with instant preset buttons (25k, 50k, 75k, 100k) calculating bonus miles gained and estimated USD cash value.
- **Curated Partner Perks**: Direct member promo codes and activation shortcuts for partner flash sales and multiplier promotions.

### 5. 🕹️ Zero-Friction Demo Mode & Persona Switcher
- **Instant Access**: Explore preloaded multi-program portfolios without registering or entering passwords.
- **Two Real-World Personas**:
  - 🍕 **Alex Mercer** (*Everyday Perks & Tech Warranty Vault*): Domino's pizza rewards, Taco Bell Fire perks, Apple MacBook AppleCare+, Sony WH-1000XM5 warranty, and Chase Sapphire Reserve.
  - ☕ **Sarah Chen** (*Dining, Coffee & Retail Maximizer*): Starbucks Gold Stars, Target Circle 360, Sephora Beauty Insider, Amazon Prime, and Marriott Bonvoy.
- **Reactive State Persistence**: Live `localStorage` sync with automated event dispatchers and a 1-click **Reset Demo State** button.

### 6. 📱 Interactive Dual-Platform Landing Showcase
- **macOS Desktop App Frame**: Features authentic Apple window traffic lights, ⌘K search, native segmented navigation tabs, and live status badges.
- **Interactive Apple Wallet**: Realistic stacked mobile passes that smoothly expand and focus on click.

### 7. 🌗 Modern Design System & Theme Engine
- **Light / Dark / System Mode**: Persistent theme toggle powered by Tailwind CSS and `next-themes`.
- **Glassmorphic Depth**: Translucent backdrop blur cards, subtle borders, accessible Radix dialogs, and smooth micro-animations.

---

## 🧭 Page Architecture & Routes

| Route | Page Name | Description |
|---|---|---|
| `/` | **Landing Page** | Dual-device Hero preview, Value Calculator, 4 Feature Pillars, Partner Marquee, FAQ, CTA Banner |
| `/dashboard` | **Unified Command Center** | Expiration Radar, Unified Vault (rewards, gift cards, warranties), 1-Tap claim sheet, Add Item dialog |
| `/accounts` | **Linked Accounts** | Multi-program sync center, OAuth connect modal, category filters, unlink/sync triggers |
| `/offers` | **Transfer Bonus Optimizer** | Interactive transfer conversion simulator, active promotions matrix, curated partner deals |
| `/settings` | **Settings & Security** | Profile details, currency settings, notification preferences, JSON/CSV ledger data export |
| `/signin` | **Authentication** | 1-Click Demo persona launcher and credential forms |

---

## 🛠️ Technology Stack

- **Framework**: [React 18.3](https://reactjs.org/) + [TypeScript 5.5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5.4](https://vitejs.dev/) with SWC compiler
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + `tailwindcss-animate`
- **UI Primitives**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/) + Brand Icon Library
- **Typography**: Inter via Google Fonts (`font-sans`)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 📦 Getting Started

### Prerequisites
- Node.js 18.0+ or Bun
- npm, yarn, or pnpm

### Installation
```bash
# 1. Clone repository
git clone https://github.com/your-username/perkpal.git
cd perkpal

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Security & Privacy Commitment

1. **Zero Credential Storage**: Loyalty programs connect via read-only partner protocols. Passwords and credentials are never stored on client or server.
2. **Local Persistence**: Demo state is securely compartmentalized in browser storage with instant reset capability.
3. **Data Portability**: Full data sovereignty with standard JSON and CSV portfolio exports via the Settings page.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
