# Game Portal Monorepo

A scalable, modular **Game Portal** application using **Next.js**, **React**, and **Nx**. This monorepo hosts multiple branded apps (`Project A`, `Project B`) with shared libraries for UI components, constants, and types. Built with customization, reuse, and strong typing in mind.

---

## 📦 Monorepo Structure

```
apps/
  project-a/
  project-b/

e2e/
  project-a-e2e/     # E2E tests for Project A with Cypress
  project-b-e2e/     # E2E tests for Project B with Cypress

libs/
  ui/                # Shared UI components build in ReactJs
  constants/         # Shared constants
  types/             # Shared TypeScript types

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* Nx CLI:

  ```bash
  npm install -g nx
  ```

### Install dependencies

```bash
npm install
```

---

## 💥 Development

### Start Project A

```bash
nx dev project-a
```

Visit: `http://localhost:3000`

### Start Project B

```bash
nx dev project-b
```

Visit: `http://localhost:3000`

---

## 🛠️ Build Instructions

### Build Shared Libraries

```bash
nx build constants
nx build types
nx build ui
```

### Build Project A

```bash
nx build project-a
```

### Build Project B

```bash
nx build project-b
```

---

## ✅ E2E Testing

### Run tests for Project A

```bash
nx e2e project-a-e2e
```

### Run tests for Project B

```bash
nx e2e project-b-e2e
```

---

## 🌐 Market Support

Supported markets for both projects:

* `/en`
* `/ca`

Localization files:

* Located under project/messages/[market].json

* en.json and ca.json provide translated content per market

Routes:

* `/market` → Welcome page
* `/market/login` → Login page
* `/market/products` → Product list (from [dummyjson.com](https://dummyjson.com/products))
* `/market/product` → Product details

---

## 🎨 Brand Customization

* Shared components adapt via brand config
* In each project's configuration folder, update the variable CSS file to modify the brand configuration.

---


## 👤 Author

* **Adeel** – [github.com/adeel146](https://github.com/adeel146)

---
