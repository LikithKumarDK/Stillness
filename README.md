# Stillness 🌑

Stillness is a minimal, interactive web experience built with Next.js and Framer Motion. It explores the concept of "clarity through stillness," where users reveal a hidden message by remaining still.

## 🌌 Concept

In a world of constant motion, clarity is found in stillness. The application tracks "entropy" based on user interaction (mouse movement, scrolling, clicking). As interaction increases, the text becomes scrambled and blurred. As the user becomes still, the entropy decays, and the message crystallizes into clarity.

## ✨ Features

- **Interactive Entropy Tracking**: Real-time monitoring of user activity to drive visual states.
- **Crystallized Text Effects**: Dynamic text scrambling and blurring using Framer Motion.
- **Zen Aesthetic**: A refined, dark-mode interface designed for focus and calm.
- **Glassmorphism UI**: Subtle translucent elements that react to the state of stillness.
- **Optimized for Cloudflare**: Fully compatible with Cloudflare Pages and Edge runtime.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stillness.git
   cd stillness
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Deployment

### Cloudflare Pages

This project is configured for Cloudflare Pages. To build and deploy:

1. Build for Cloudflare:
   ```bash
   npm run pages:build
   ```

2. Deploy via Wrangler:
   ```bash
   npm run pages:deploy
   ```

See the [official Next.js on Cloudflare Pages documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
