# Ashiana Jewellery App

A portfolio-quality React Native / Expo prototype for Ashiana — Your One Stop Shop, designed around jewellery and gifting rather than a generic catalogue experience.

## Research & data provenance

The supplied Ashiana website was used as the requested source of truth. During implementation it returned **HTTP 403 Forbidden** to automated access, so the app does **not** claim that its local catalogue was scraped from the business site. The catalogue in `src/data/products.ts` is explicitly marked as mock/demo data and is isolated behind the same product shape the UI would consume from a future API.

Replace `src/data/products.ts` and `src/data/categories.ts` with verified source/API data when access is available. Do not treat the demo catalogue as Ashiana's real inventory, pricing, reviews, awards, or claims.

## Features

- Editorial home screen
- Categories and category listings
- Product detail
- Local product search
- Wishlist
- Functional local cart
- Gifting concierge flow
- Gift wrapping / recipient / sender / note metadata
- Dummy authentication
- Dummy order tracking
- Checkout preview with no real payment
- Loading / empty / error-oriented states
- Responsive layouts using native lists and safe scrolling
- Accessibility labels on icon controls
- Centralized design tokens

## Tech stack

- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- Reanimated-compatible Expo stack
- Zustand
- AsyncStorage
- Expo Image can be introduced for production image caching; the prototype uses React Native Image for simplicity

## Architecture

```text
app/
  (tabs)/          bottom navigation screens
  category/        dynamic category route
  product/         dynamic product route
  cart.tsx
  login.tsx
  tracking.tsx
  gifting.tsx
  checkout.tsx
src/
  components/      reusable visual components
  data/             products, categories, orders
  store/            local cart, wishlist, auth and gift state
  theme/            colors, spacing, typography, radii, motion
  utils/            currency and search helpers
```

## Data

The catalogue is **mock/demo data** because automated access to the supplied site returned HTTP 403. Product objects intentionally include `mock: true` and `stockStatus: 'Demo item'`. The data model is designed so local data can later be replaced by REST, Supabase, Shopify, or a custom backend without rewriting the UI.

## Running the project

```bash
npm install
npx expo start
```

Then:

- press `a` for an Android emulator
- press `i` for an iOS simulator where available
- scan the QR code with Expo Go when appropriate

If Metro has stale cache:

```bash
npx expo start --clear
```

Type-check:

```bash
npm run typecheck
```

## Environment variables

None are required for this prototype.

## Design system

### Palette

- Background `#F7F3EC`
- Surface `#FFFDF9`
- Primary ink `#241E1A`
- Secondary ink `#766B62`
- Champagne `#B89A68`
- Dark accent `#382C25`
- Border `#DED4C7`

### Typography

Cormorant Garamond provides the editorial display voice. Lora is used for body copy. The app intentionally avoids default Inter/Roboto-first styling, neon gradients, excessive pills, oversized cards and heavy shadows.

### Spacing

4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64.

### Motion

The intended motion language is quiet: roughly 180ms fast, 280ms normal and 420ms slow, with no continuous decorative animation.

## Prototype limitations

- No real payments
- No real authentication
- No production backend
- Dummy order tracking
- Local mock catalogue
- Remote Unsplash demo imagery is used only as placeholder photography
- No real inventory, shipping, tax, or checkout calculation

## Future improvements

1. Replace mock catalogue with verified Ashiana data/API.
2. Add production image CDN and caching.
3. Add real authentication.
4. Add inventory and availability.
5. Add payment gateway.
6. Add real order tracking and notifications.
7. Add CMS/admin catalogue editing.
8. Add analytics and gifting recommendation instrumentation.
9. Add automated unit/integration tests.
10. Add reduced-motion testing and broader screen-reader QA.

## Portfolio note

The project deliberately prioritizes a coherent visual language, business-specific gifting flow, realistic local state, and maintainable React Native architecture over adding unnecessary backend complexity.
