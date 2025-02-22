# AI Model Context Document for E-commerce Website

## Project Requirements Document (PRD)

### 1. Visual Design Requirements
- **Design Philosophy**: Luxury outdoor lifestyle approach with dramatic photography and elegant typography
- **Color Scheme**: 
  - Primary: Warm cream (#F5F5F0)
  - Secondary: Deep teal (#0A323D)
  - Accent: Ocean blue (#2B4D5C)
  - Text: Rich black (#1A1A1A)
  - Footer: Deep navy (#0A1A2A)

- **Typography**:
  - Headlines: Dramatic serif font for impact statements
  - Subheadings: Refined sans-serif for product labels
  - Body: Clean sans-serif for readability
  - Font Sizes:
    - Hero Statements: 72px/80px
    - Section Headers: 56px/64px
    - Product Labels: 14px/20px
    - Body Text: 16px/24px

### 2. Layout Components
- **Hero Section**:
  - Full-width dramatic lifestyle photography
  - Staggered typography overlay
  - Dynamic subject composition
  - Manufacturing partnership statement

- **Content Grid**:
  - Asymmetrical layout with overlapping elements
  - Mixed-size image gallery
  - Centered brand statement
  - Lifestyle photography with labels

- **Newsletter Section**:
  - Deep teal/navy background
  - Borderless email input
  - Clean "Sign me up" button
  - Brand logo integration
  - Social media footer

- **Product Grid**:
  - 3-column layout on desktop
  - 2-column on tablet
  - Single column on mobile
  - 24px grid gap
  - Hover state with subtle scale animation

- **Navigation**:
  - Sticky header with transparency
  - Centered logo
  - Right-aligned menu items
  - Shopping cart with count indicator
  - Mobile-responsive hamburger menu

## App Flow Document

### 1. User Journey Map
- Homepage Entry
  - Hero section view
  - Featured collections scroll
  - Newsletter signup prompt
  - Social proof section

- Product Discovery
  - Category navigation
  - Filter application
  - Sort functionality
  - Quick view features

- Product Interaction
  - Detail page view
  - Size selection
  - Color variants
  - Add to cart flow
  - Related items

- Checkout Process
  - Cart review
  - Shipping info
  - Payment processing
  - Order confirmation

### 2. Interaction Patterns
- **Animations**:
  - Subtle text fade-ins on scroll
  - Smooth image parallax effects
  - Gentle hover transitions
  - Refined loading states
  - Elegant page transitions

- **Micro-interactions**:
  - Subtle button hover animations
  - Minimal form field transitions
  - Clean newsletter signup interaction
  - Understated loading indicators
  - Refined social media icon interactions

## Tech Stack & Dependencies

### 1. Frontend Core
- Next.js 14+ with App Router
- TypeScript 5.0+
- React Server Components
- TailwindCSS 3.4+

### 2. Essential Packages
```plaintext
Core Dependencies:
- next
- react
- react-dom
- typescript
- tailwindcss
- framer-motion
- @headlessui/react
- lucide-react
- next-themes
- zod (form validation)
- react-hook-form
```

### 3. Development Dependencies
```plaintext
- eslint
- prettier
- postcss
- autoprefixer
- typescript-eslint
- tailwind-merge
- clsx
```

## Frontend Context

### 1. Component Architecture
- Atomic Design Methodology
  - Atoms (buttons, inputs)
  - Molecules (product cards, forms)
  - Organisms (headers, product grids)
  - Templates (layout structures)
  - Pages (full views)

### 2. State Management
- React Context for global state
- Server Components for data fetching
- Local state for UI interactions
- Form state management
- Cart state persistence

### 3. Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## Backend & API Development Context (Scuba)

### 1. Data Models
- Products
  - SKUs
  - Variants
  - Pricing
  - Inventory

- Users
  - Authentication
  - Preferences
  - Order History
  - Wishlists

- Orders
  - Line Items
  - Status
  - Payment Info
  - Shipping Details

### 2. API Endpoints
- Authentication
  - User registration
  - Login/logout
  - Password reset

- Product Management
  - Catalog retrieval
  - Search functionality
  - Filtering options

- Order Processing
  - Cart management
  - Checkout flow
  - Order status

### 3. Integration Points
- Payment Gateway
- Inventory Management
- Shipping Calculator
- Email Service
- Analytics Platform

## Directory Structure
```plaintext
root/
├── docs/
│   ├── ai-context.md
│   └── api-spec.md
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
└── public/
```

## Implementation Instructions

### 1. Document Attachment
1. Create a `docs` folder in your project root
2. Save this document as `ai-context.md`
3. Add reference in `README.md`
4. Include in version control

### 2. Configuration Setup
1. Create environment variables template
2. Setup TailwindCSS configuration
3. Initialize TypeScript configuration
4. Configure ESLint and Prettier

### 3. Development Workflow
1. Follow atomic design principles
2. Implement responsive design patterns
3. Use TypeScript strictly
4. Maintain consistent code style
5. Document components

## Quality Assurance

### 1. Performance Metrics
- Lighthouse score targets
- Core Web Vitals compliance
- Load time optimization
- Image optimization

### 2. Testing Strategy
- Unit tests
- Integration tests
- E2E testing
- Visual regression tests
- Accessibility testing

## Deployment Strategy

### 1. Environment Setup
- Development
- Staging
- Production

### 2. CI/CD Pipeline
- Build process
- Testing automation
- Deployment workflow
- Monitoring setup

## Security Considerations

### 1. Frontend Security
- Input validation
- XSS prevention
- CSRF protection
- Secure storage

### 2. API Security
- Authentication
- Rate limiting
- Data encryption
- Error handling

## Maintenance Guidelines

### 1. Code Quality
- Style guide adherence
- Documentation updates
- Performance monitoring
- Security updates

### 2. Content Management
- Asset optimization
- Content updates
- SEO maintenance
- Analytics tracking


UI ELEMENTS UPDATE
-Typography Updates

The image uses a more prominent serif font for headlines (especially "FEEL GOOD" and "CLASSY TRENDY MODERN")
Current context specifies Canela, but the image shows a bolder, more dramatic serif typeface

-Color Scheme Adjustments

The website in the image uses a warmer, more muted color palette
More emphasis on beige/cream tones rather than the cool whites and blues specified in the context
Dark navy sections at the bottom versus the specified (#1A2B3C)

-Layout Components

Hero Section: The image shows a full-width hero with two people in winter wear and a barcode element
Product Grid: The image shows 3 products in a row with minimal padding (winter jackets)
Newsletter Section: The image shows a simpler email signup at the bottom

- Visual Elements

Add barcode-style graphic elements
Include more lifestyle photography with outdoor/winter themes
More emphasis on full-width imagery
Softer, more muted photo treatment

-Content Structure

"Latest Collection" section with adventure/outdoor imagery
"Best selling product" section with winter wear
More emphasis on lifestyle/outdoor adventure messaging

The core technical structure in your documents is solid, but these visual design elements should be updated to match the more lifestyle-focused, premium outdoor wear aesthetic shown in the image.
