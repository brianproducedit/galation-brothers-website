# Galation Brothers Insurance Zimbabwe

[![CI](https://github.com/brianproducedit/galation-brothers-website/actions/workflows/ci.yml/badge.svg)](https://github.com/brianproducedit/galation-brothers-website/actions/workflows/ci.yml)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

Official website for **Galation Brothers Insurance Zimbabwe** — comprehensive insurance solutions in partnership with **AFC Holdings**.

---

## ✨ Features

- **Modern React 19** with TypeScript for type-safe, maintainable code
- **Responsive Design** with Tailwind CSS 4 — mobile-first, dark mode support
- **Contact Forms** powered by [Formspree](https://formspree.io) with reCAPTCHA spam protection
- **Interactive Star Rating** system for customer feedback
- **Newsletter Signup** with real-time success/error states
- **SEO Optimized** using React Helmet Async for meta tag management
- **Blazing Fast** builds with Vite 7 and optimized asset delivery
- **CI/CD Pipeline** — GitHub Actions for code quality, Vercel for deployment

---

## 🛠️ Tech Stack

| Category       | Technology                                                             |
| -------------- | ---------------------------------------------------------------------- |
| **Framework**  | [React 19](https://react.dev) + [TypeScript 5.9](https://www.typescriptlang.org) |
| **Build Tool** | [Vite 7](https://vite.dev)                                            |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com) + PostCSS + Autoprefixer    |
| **Routing**    | [React Router 7](https://reactrouter.com) (Browser-based SPA routing) |
| **Forms**      | [Formspree React](https://formspree.io) + Google reCAPTCHA            |
| **SEO**        | [React Helmet Async](https://github.com/staylor/react-helmet-async)   |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons)              |
| **Linting**    | [ESLint 9](https://eslint.org) (flat config) + [Prettier](https://prettier.io) |
| **Testing**    | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) |
| **CI/CD**      | [GitHub Actions](https://github.com/features/actions) + [Vercel](https://vercel.com) |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22+ (LTS recommended)
- **npm** 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/brianproducedit/galation-brothers-website.git
cd galation-brothers-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your actual values (see Environment Variables section below)

# Start development server
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Available Scripts

| Script            | Command               | Description                          |
| ----------------- | ---------------------- | ------------------------------------ |
| `npm run dev`     | `vite`                 | Start local development server       |
| `npm run build`   | `tsc -b && vite build` | Type-check and build for production |
| `npm run preview` | `vite preview`         | Preview production build locally     |
| `npm run lint`    | `eslint .`             | Run ESLint on all files              |
| `npm run lint:fix`| `eslint . --fix`       | Auto-fix lint issues                 |
| `npm run format`  | `prettier --write .`   | Format code with Prettier            |
| `npm test`        | `vitest`               | Run tests with Vitest                |

---

## 🔧 Environment Variables

Create a `.env` file in the project root. All client-exposed variables **must** be prefixed with `VITE_`.

| Variable                             | Description                        | Required |
| ------------------------------------ | ---------------------------------- | -------- |
| `VITE_FORMSPREE_CONTACT_ENDPOINT`    | Formspree endpoint for contact form | Yes      |
| `VITE_FORMSPREE_FEEDBACK_ENDPOINT`   | Formspree endpoint for feedback form | Yes     |
| `VITE_FORMSPREE_NEWSLETTER_ENDPOINT` | Formspree endpoint for newsletter   | Yes      |
| `VITE_RECAPTCHA_SITE_KEY`            | Google reCAPTCHA v2/v3 site key     | Yes      |
| `VITE_WHATSAPP_NUMBER`               | WhatsApp contact number             | Yes      |
| `VITE_EMAIL_INFO`                    | General inquiries email             | Yes      |
| `VITE_EMAIL_CLAIMS`                  | Claims department email             | Yes      |
| `VITE_SOCIAL_FACEBOOK`               | Facebook page URL                   | No       |
| `VITE_SOCIAL_TWITTER`                | Twitter/X profile URL               | No       |
| `VITE_SOCIAL_LINKEDIN`               | LinkedIn company URL                | No       |
| `VITE_SOCIAL_INSTAGRAM`              | Instagram profile URL               | No       |

> **Note**: See [`.env.example`](.env.example) for a template with placeholder values.

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI pipeline (lint + build)
├── public/
│   └── assets/                 # Static assets (logos, images)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Button.tsx          # Button component
│   │   ├── Card.tsx            # Card component
│   │   ├── Footer.tsx          # Site footer with newsletter signup
│   │   ├── Layout.tsx          # Main layout wrapper with Outlet
│   │   └── Navbar.tsx          # Responsive navigation bar
│   ├── contexts/               # React Context providers
│   │   └── DarkModeContext.tsx  # Dark/light mode toggle
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Route page components
│   │   ├── AboutPage.tsx       # About us & AFC partnership
│   │   ├── ContactPage.tsx     # Contact form with quote request
│   │   ├── FeedbackPage.tsx    # Customer feedback with star rating
│   │   ├── HomePage.tsx        # Landing page
│   │   └── ServicesPage.tsx    # Insurance services catalog
│   ├── test/                   # Test utilities and setup
│   ├── types/                  # TypeScript type definitions
│   ├── App.tsx                 # Router configuration
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.tsx                # Application entry point
├── .env.example                # Environment variable template
├── .prettierrc                 # Prettier formatting config
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme customization
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node/Vite TypeScript config
├── vercel.json                 # Vercel deployment & SPA rewrite config
└── vite.config.ts              # Vite build configuration
```

---

## 🔄 CI/CD Pipeline

This project uses a **split CI/CD architecture**: GitHub Actions handles code quality checks, and Vercel handles deployment.

```
┌─────────────────────────────────────────────────────────────────┐
│                        Developer Workflow                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Push / PR to main                                             │
│        │                                                        │
│        ├──► GitHub Actions (CI)                                 │
│        │      ├── ✅ Install dependencies (npm ci)              │
│        │      ├── ✅ Lint (eslint)                              │
│        │      └── ✅ Type-check & Build (tsc + vite build)     │
│        │                                                        │
│        └──► Vercel (Deployment)                                 │
│               ├── 🚀 Production deploy (on push to main)       │
│               └── 👀 Preview deploy (on pull requests)         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### GitHub Actions — CI Checks

The [`.github/workflows/ci.yml`](.github/workflows/ci.yml) workflow runs on every push and pull request to `main`:

1. **Checkout** code using `actions/checkout@v5`
2. **Setup Node.js** 22 with npm caching via `actions/setup-node@v6`
3. **Install** dependencies with `npm ci` (clean, reproducible installs)
4. **Lint** — runs ESLint to catch code quality issues
5. **Build** — runs TypeScript type-checking and Vite production build

> The CI workflow **does not deploy**. It only validates that the code compiles and passes lint checks.

### Vercel — Automatic Deployment

Vercel's native GitHub integration handles all deployments:

- **Production deploys** trigger automatically on every push to `main`
- **Preview deploys** are created for every pull request, with a unique URL
- **Environment variables** are managed in the Vercel dashboard

---

## 🌐 Deployment

### Vercel Setup (Recommended)

1. **Import your GitHub repository** at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects the **Vite** framework — no manual config needed
3. **Add environment variables** in the Vercel project dashboard:
   - Go to **Settings → Environment Variables**
   - Add all `VITE_*` variables from your `.env` file
   - Apply to **Production**, **Preview**, and **Development** environments
4. **Deploy** — Vercel builds and deploys automatically on every push to `main`

#### SPA Routing

The [`vercel.json`](vercel.json) file is pre-configured with rewrites to support client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures that direct URL access (e.g., `/contact`, `/about`) works correctly instead of returning 404.

### Custom Domain (Optional)

1. In Vercel dashboard: **Settings → Domains**
2. Add your domain (e.g., `galationbrothers.co.zw`)
3. Update your DNS records as instructed by Vercel
4. SSL certificate is provisioned automatically

---

## 🧪 Testing & Code Quality

```bash
# Run all tests
npm test

# Run ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Code Style

This project uses:
- **ESLint 9** with flat config — TypeScript, React Hooks, and React Refresh rules
- **Prettier** — consistent formatting (no semicolons, single quotes, trailing commas)

See [`.prettierrc`](.prettierrc) and [`eslint.config.js`](eslint.config.js) for details.

---

## 📧 Form Testing

> **Important**: Formspree may block submissions from `localhost`. Always test forms from a deployed URL (Vercel preview or production).

1. Deploy to Vercel (or use a preview deployment from a PR)
2. Visit the live site
3. Test all forms: **Contact**, **Feedback**, **Newsletter**
4. Verify email delivery to the configured addresses
5. Confirm reCAPTCHA is functional

---

## 🔧 Troubleshooting

<details>
<summary><strong>Images not loading in production</strong></summary>

- Ensure image paths use `${import.meta.env.BASE_URL}assets/` prefix
- Verify images exist in the `public/assets/` directory
- Check the browser Network tab for 404s

</details>

<details>
<summary><strong>Forms not submitting</strong></summary>

- Formspree blocks `localhost` — test from the deployed URL
- Verify Formspree endpoint IDs in environment variables
- Check that reCAPTCHA is enabled in the [Formspree dashboard](https://formspree.io)
- Inspect browser console for CORS or network errors

</details>

<details>
<summary><strong>Routing 404s on refresh</strong></summary>

- Ensure `vercel.json` contains the SPA rewrite rule
- Verify the app uses `createBrowserRouter` (not `createHashRouter`)
- For local testing, use `npm run preview` after building

</details>

<details>
<summary><strong>Build failures</strong></summary>

- Check Node.js version: `node -v` (requires 22+)
- Clear cache and reinstall: `rm -rf node_modules && npm install`
- Verify all environment variables are set
- Run `npm run lint` to find code issues before building

</details>

<details>
<summary><strong>Environment variables not working</strong></summary>

- Variables **must** be prefixed with `VITE_` to be exposed to client code
- Restart the dev server after modifying `.env`
- On Vercel: add variables in **Settings → Environment Variables**
- Use fallback values in code: `import.meta.env.VITE_VAR || 'default'`

</details>

<details>
<summary><strong>CI workflow failing</strong></summary>

- Check the Actions tab on GitHub for detailed logs
- Common issues: lint errors, TypeScript type errors, missing dependencies
- Run `npm run lint` and `npm run build` locally before pushing

</details>

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to the branch: `git push origin feature/your-feature`
5. **Open** a Pull Request

The CI pipeline will automatically run lint and build checks on your PR. Vercel will create a preview deployment for review.

---

## 📄 License

This project is **proprietary software** owned by Galation Brothers Insurance Zimbabwe. All rights reserved.

---

## 📞 Support

For questions or support:

- 📧 Email: [info@galationbrothers.co.zw](mailto:info@galationbrothers.co.zw)
- 🌐 Website: [galationbrothers.co.zw](https://galationbrothers.co.zw)

---

## 🙏 Acknowledgments

- **[Galation Brothers](https://galationbrothers.co.zw)** — Commitment to excellent insurance services
- **[AFC Holdings](https://afcholdings.co.zw)** — Trusted partnership
- **[Formspree](https://formspree.io)** — Reliable form handling
- **[Vercel](https://vercel.com)** — Deployment and hosting platform
- **[React](https://react.dev)** & **[Vite](https://vite.dev)** — Outstanding developer experience
