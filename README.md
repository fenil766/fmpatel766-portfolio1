## **STEP 4: Updated Project Structure**
```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   └── Card/
│   │       ├── Card.tsx
│   │       └── index.ts
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── MainLayout.tsx
│   └── common/
│       ├── Loader.tsx
│       └── ErrorBoundary.tsx
├── pages/
│   ├── landing/
│   │   ├── Landing.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── WorkSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── index.ts
│   └── NotFound.tsx
├── routes/
│   ├── AppRoutes.tsx
│   └── index.ts
├── services/
│   ├── api.ts
│   └── README.md
├── hooks/
│   ├── useFetch.ts
│   └── index.ts
├── helpers/
│   ├── constants.ts
│   ├── animationVariants.ts
│   └── index.ts
├── types/
│   ├── common.types.ts
│   └── index.ts
├── app.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts