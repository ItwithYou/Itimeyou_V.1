# iTimeYou

Social marketplace for Lao culture and experiences.

**Connect · Share · Experience** / **ເຊື່ອມຕໍ່ · ແບ່ງປັນ · ສຳຜັດ**

## Features
- 📱 PWA — install on any device
- 🔐 Firebase Authentication (email, Google, guest)
- 📸 Real-time social feed with photos
- 🏡 Marketplace: homestays, food, cultural, guide, services, experts
- 💬 Real-time messaging
- 💳 eWallet: BCEL One, USDT TRC20, XRP
- 🌍 Bilingual: English + Lao

## Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ItwithYou/itimeyou)

1. Click the button above or import this repo on vercel.com
2. Set Framework Preset to **Other** (static)
3. Deploy — done!

## Tech Stack
- Single-file HTML PWA (no build step needed)
- Firebase v10 (Auth + Firestore + Storage)
- Vanilla JS — works everywhere

## Firebase Setup
The app uses Firebase project `itimeyou-88`. To use your own:
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Auth, Firestore, and Storage
3. Replace `firebaseConfig` in `index.html`
