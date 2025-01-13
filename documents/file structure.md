src/
app/
├── layout.tsx         # Root layout wrapper (includes common UI, providers)
├── page.tsx          # Homepage component
├── (routes)/         # Grouped routes (parentheses prevent folder from affecting URL)
│   ├── products/     
│   │   ├── page.tsx           # Products listing page
│   │   ├── [id]/              # Dynamic product routes
│   │   │   ├── page.tsx       # Individual product page
│   │   │   └── loading.tsx    # Loading UI
│   ├── account/
│   │   ├── page.tsx           # Account dashboard
│   │   ├── orders/            # Order history
│   │   └── settings/          # Account settings
│   └── checkout/
│       ├── page.tsx           # Checkout flow
│       └── success/           # Order confirmation
├── api/              # API Route Handlers
│   ├── auth/         # Authentication endpoints
│   └── products/     # Product-related endpoints
└── globals.css      # Global styles and CSS reset




components/
├── ui/              # Atomic/Basic Components
│   ├── button/
│   │   ├── button.tsx
│   │   ├── button.test.tsx
│   │   └── button.types.ts
│   ├── input/
│   │   ├── text-input.tsx
│   │   ├── select.tsx
│   │   └── checkbox.tsx
│   └── typography/
│       ├── heading.tsx
│       └── paragraph.tsx
├── molecules/       # Composite Components
│   ├── product-card/
│   │   ├── product-card.tsx
│   │   ├── product-image.tsx
│   │   └── product-details.tsx
│   └── form-fields/
│       ├── search-field.tsx
│       └── address-form.tsx
├── organisms/       # Complex Components
│   ├── header/
│   │   ├── header.tsx
│   │   ├── navigation.tsx
│   │   └── search-bar.tsx
│   └── footer/
│       ├── footer.tsx
│       └── footer-links.tsx
└── templates/       # Page Layouts
    ├── default-template.tsx
    └── checkout-template.tsx





lib/
├── utils/          # Utility Functions
│   ├── formatting.ts   # Date, currency formatting
│   ├── validation.ts   # Form validation
│   └── api-helpers.ts  # API utility functions
├── hooks/          # Custom React Hooks
│   ├── useCart.ts
│   ├── useAuth.ts
│   └── useLocalStorage.ts
├── constants/      # Constants and Configuration
│   ├── routes.ts
│   ├── api-endpoints.ts
│   └── product-categories.ts
└── types/          # TypeScript Definitions
    ├── product.types.ts
    ├── user.types.ts
    └── api.types.ts






styles/
├── components/     # Component-specific styles
│   ├── header.css
│   └── footer.css
└── themes/         # Theme Configurations
    ├── colors.ts
    ├── typography.ts
    └── spacing.ts






public/
├── images/         # Image Assets
│   ├── products/
│   ├── banners/
│   └── logos/
├── fonts/          # Custom Fonts
│   ├── inter/
│   └── roboto/
└── icons/          # Icon Assets
    ├── social/
    └── ui/