# Galation Brothers Insurance Website

[![Deploy to GitHub Pages](https://github.com/yourusername/galation-brothers-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/galation-brothers-website/actions/workflows/deploy.yml)

Official website for Galation Brothers Insurance Zimbabwe, providing comprehensive insurance solutions in partnership with AFC Holdings.

## 🌟 Features

- **Modern React 19** with TypeScript
- **Responsive Design** with Tailwind CSS
- **Dark Mode Support** with system preference detection
- **Contact Forms** with Formspree integration and reCAPTCHA
- **Interactive Star Rating** for customer feedback
- **Newsletter Signup** with success/error states
- **SEO Optimized** with React Helmet
- **Fast Performance** with Vite build system
- **Automated Deployment** via GitHub Actions

## 🚀 Live Demo

[https://yourusername.github.io/galation-brothers-website/](https://yourusername.github.io/galation-brothers-website/)

## 📋 Prerequisites

- Node.js 18+ and npm
- GitHub account for deployment

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/galation-brothers-website.git
   cd galation-brothers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual Formspree endpoints and contact information.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Formspree Endpoints
VITE_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/your-contact-form-id
VITE_FORMSPREE_FEEDBACK_ENDPOINT=https://formspree.io/f/your-feedback-form-id
VITE_FORMSPREE_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-newsletter-form-id

# Contact Information
VITE_WHATSAPP_NUMBER=+263xxxxxxxxx
VITE_EMAIL_INFO=info@galationbrothers.co.zw
VITE_EMAIL_CLAIMS=claims@galationbrothers.co.zw

# Social Media Links
VITE_SOCIAL_FACEBOOK=https://facebook.com/galationbrothers
VITE_SOCIAL_TWITTER=https://twitter.com/galationbros
VITE_SOCIAL_LINKEDIN=https://linkedin.com/company/galation-brothers
VITE_SOCIAL_INSTAGRAM=https://instagram.com/galationbrothers
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer with newsletter signup
│   ├── Layout.tsx      # Main layout wrapper
│   └── ...
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── ContactPage.tsx # Contact form page
│   ├── FeedbackPage.tsx# Customer feedback page
│   ├── ServicesPage.tsx# Insurance services
│   └── AboutPage.tsx   # About us page
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🚀 Deployment

### GitHub Pages (Automated)

1. **Fork or clone this repository**
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
3. **Configure repository name** in `vite.config.ts`:
   ```ts
   base: '/your-repo-name/'
   ```
4. **Add environment secrets** in repository settings:
   - Go to Settings → Secrets and variables → Actions
   - Add all `VITE_*` variables as repository secrets
5. **Push to main branch** - deployment happens automatically

### Manual Deployment

```bash
npm run build
npm run preview  # Test locally
# Deploy dist/ folder to your hosting provider
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 📧 Form Testing

**Important**: Formspree blocks submissions from `localhost`. Test forms from the live GitHub Pages URL:

1. Deploy to GitHub Pages
2. Visit the live site
3. Test all forms (Contact, Feedback, Newsletter)
4. Verify email delivery to configured addresses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Galation Brothers Insurance Zimbabwe.

## 📞 Support

For support or questions:
- Email: info@galationbrothers.co.zw
- Website: https://galationbrothers.co.zw

## 🙏 Acknowledgments

- **Galation Brothers** - For their commitment to excellent service
- **AFC Holdings** - For the trusted partnership
- **Formspree** - For reliable form handling
- **React & Vite** - For the amazing developer experience
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
