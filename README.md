# Ashiana Jewellery App

A portfolio-quality React Native / Expo prototype for Ashiana — Your One Stop Shop, designed around jewellery and gifting rather than a generic catalogue experience.

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
