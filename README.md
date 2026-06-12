# 🛒 FreshCart - Grocery Delivery App

[![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Navigation](https://img.shields.io/badge/React_Navigation-3E843E?style=for-the-badge&logo=reactnavigation&logoColor=white)](https://reactnavigation.org/)

A professional-grade, cross-platform **Grocery Delivery & E-Commerce Mobile Application** built using **React Native**, **Expo SDK 54**, and **TypeScript**.

This application connects to the real-time product catalogs and category lists from the **DummyJSON API**, featuring fully persistent state management (via Redux Toolkit & Redux Persist), animated checkout flows, custom address configurations, and production-grade developer tooling (ESLint, Prettier, Husky).

---

## 🎯 Project Overview

FreshCart provides a seamless, modern, app-like shopping experience for grocery and household products. Designed with mobile-first usability in mind, the application features glassmorphism-inspired UI overlays, smooth category transitions, and a persistent checkout workflow that allows users to place orders offline.

### Key Objectives

- **Optimized Mobile Performance**: Leverages native screens and modular styling to ensure smooth 60fps animations.
- **Robust State Management**: Implements clean Redux slices for catalog search, cart mutations, delivery addresses, and past orders.
- **Recruiter-Ready Standards**: Written in clean, scalable TypeScript with complete path patterns and strict linting.

---

## ✨ Key Features

- **🔐 Authentication Flow**: Custom user login and signup interfaces with state verification.
- **📦 Dynamic Product Catalog**: Browse products dynamically across multiple categories (groceries, beauty, smartphones, and more).
- **🔍 Live Product Search**: Instant filtering and searching on dummyjson data endpoints.
- **💳 Interactive Cart**: Add, edit, or remove products; dynamic price calculations for subtotal, taxes, delivery fees, and grand total.
- **📍 Delivery Address Settings**: Manage default and secondary shipping addresses via Redux slices.
- **⚡ Checkout & Pay**: Mock payment gateway with success/error handling and custom layouts.
- **🎉 Order Tracking & History**: Maintain a persistent history of all completed transactions.
- **💾 State Persistence**: Automatically preserves user sessions, cart items, and order history across app restarts.

---

## 🛠️ Tech Stack

- **Core Framework**: [React Native](https://reactnative.dev/) with [Expo SDK 54](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Navigation**: [React Navigation](https://reactnavigation.org/) (Native Stack Navigator & Bottom Tab Navigator)
- **Global State**: [Redux Toolkit](https://redux-toolkit.js.org/) (Slices, Store configuration)
- **Data Persistence**: [Redux Persist](https://github.com/rt2zz/redux-persist) with Async Storage
- **HTTP Requests**: Native Fetch API communicating with [DummyJSON API](https://dummyjson.com)
- **UI & Aesthetics**: Custom styling with `StyleSheet` & [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

---

## 🚀 Installation & Setup

Follow these steps to run FreshCart locally in your simulator or physical device:

### Prerequisites

- Ensure you have [Node.js (v18+)](https://nodejs.org/) installed.
- Install the **Expo Go** app on your physical iOS/Android device to preview.

### Step 1: Clone the Repository

```bash
git clone https://github.com/nikhilsaini2/Grocery-Delivery-App.git
cd grocery-delivery-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Copy the `.env.example` file to create a local `.env`:

```bash
cp .env.example .env
```

### Step 4: Start the Development Server

#### 📱 Native Development Builds (Prebuild)

To run the app as a stand-alone native application (generating the `/android` and `/ios` folders locally instead of using Expo Go):

```bash
# Prebuild and run on Android Emulator/Device
npm run android

# Prebuild and run on iOS Simulator/Device
npm run ios

# Generate native folders manually
npm run prebuild
```

#### 🚀 Running via Expo Go

To run the app inside the Expo Go sandbox application:

```bash
npm start
```

- Press **`a`** to open the app on an Android Emulator.
- Press **`i`** to open the app on an iOS Simulator.
- Scan the **QR Code** displayed in the terminal with your phone camera (iOS) or Expo Go app (Android) to run on your physical device.

---

## 🧼 Code Quality & Tooling

To maintain a clean and reliable codebase, this project uses:

- **ESLint**: Standard JS/TS linting using `universe/native` configurations.
- **Prettier**: Code style formatting rules for spacing, semicolons, and single quotes.
- **Husky & lint-staged**: Enforces lint checks and formatting on every staged file prior to commit.

### Code Quality Scripts

Run the linters and formatters manually with:

```bash
# Run ESLint validation
npm run lint

# Auto-format all code
npm run format
```
