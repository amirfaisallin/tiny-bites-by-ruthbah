# Tiny Bites by Ruthbah - Project Overview

A modern, full-stack cake ordering website built with Next.js, featuring customer ordering, admin dashboard, and MongoDB backend.

## Project Structure

```
tiny-bites-by-ruthbah/
├── app/
│   ├── api/                          # API Routes
│   │   ├── admin/
│   │   │   ├── auth/route.ts         # Admin authentication
│   │   │   ├── categories/route.ts   # Category management
│   │   │   ├── delivery/route.ts     # Delivery area management
│   │   │   ├── food-items/route.ts   # Food items management
│   │   │   ├── menu/route.ts         # Menu configuration
│   │   │   ├── settings/route.ts     # Settings management
│   │   │   └── stats/route.ts        # Dashboard statistics
│   │   ├── orders/
│   │   │   ├── route.ts              # Order CRUD operations
│   │   │   ├── [id]/route.ts         # Individual order management
│   │   │   └── track/route.ts        # Order tracking
│   │   ├── food/route.ts             # Food items listing
│   │   ├── menu/route.ts             # Menu data endpoint
│   │   ├── settings/route.ts         # Site settings
│   │   └── upload/route.ts           # Image upload via Cloudinary
│   ├── admin/                        # Admin Dashboard
│   │   ├── layout.tsx                # Admin layout wrapper
│   │   ├── page.tsx                  # Admin dashboard home
│   │   ├── categories/page.tsx       # Category management page
│   │   ├── dashboard/page.tsx        # Main dashboard
│   │   ├── delivery/page.tsx         # Delivery area management
│   │   ├── food-items/page.tsx       # Food items management
│   │   ├── food-list/page.tsx        # Food inventory list
│   │   ├── menu/page.tsx             # Menu settings
│   │   ├── orders/page.tsx           # Orders management
│   │   └── settings/page.tsx         # Site settings
│   ├── contact/page.tsx              # Contact page
│   ├── delivery/page.tsx             # Delivery information page
│   ├── gallery/page.tsx              # Photo gallery
│   ├── menu/page.tsx                 # Public menu page
│   ├── order/page.tsx                # Customer order form
│   ├── track/page.tsx                # Order tracking page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   └── globals.css                   # Global styles & theme
├── components/
│   ├── admin-layout.tsx              # Admin layout component
│   ├── admin-sidebar.tsx             # Admin navigation sidebar
│   ├── floating-buttons.tsx          # WhatsApp & Messenger buttons
│   ├── footer.tsx                    # Footer component
│   ├── navbar.tsx                    # Navigation bar
│   ├── site-layout.tsx               # Main site layout
│   ├── theme-provider.tsx            # Dark mode provider
│   └── ui/                           # shadcn/ui components (40+ components)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── pagination.tsx
│       ├── sidebar.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── ... (30+ more components)
├── hooks/
│   ├── use-mobile.ts                 # Mobile detection hook
│   └── use-toast.ts                  # Toast notification hook
├── lib/
│   ├── mongodb.ts                    # MongoDB connection & schemas
│   └── utils.ts                      # Utility functions
├── public/
│   └── images/                       # Static images & logo
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── components.json                   # shadcn/ui config
└── README.md                         # Project documentation
```

## Technology Stack

### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.4
- **Component Library**: shadcn/ui (40+ pre-built components)
- **Styling**: Tailwind CSS v4
- **Form Handling**: React Hook Form + Zod
- **State Management**: React hooks + SWR (for data fetching)
- **Icons**: Lucide React
- **Dark Mode**: next-themes
- **Carousel**: Embla Carousel
- **Charts**: Recharts

### Backend
- **Runtime**: Node.js with Next.js API Routes
- **Database**: MongoDB
- **File Storage**: Cloudinary (image upload)

### Development Tools
- **TypeScript**: v5.7.3
- **Package Manager**: npm
- **Analytics**: Vercel Analytics

## Key Features

### Customer Features
1. **Homepage** (`/`) - Featured cakes, testimonials, CTA sections
2. **Menu** (`/menu`) - Browse all cakes with category filtering
3. **Order System** (`/order`) - 3-step cake ordering process
   - Step 1: Select cake type, size, flavor + optional reference image
   - Step 2: Delivery date, time, area selection
   - Step 3: Customer contact info & order confirmation
4. **Order Tracking** (`/track`) - Track order status by order number
5. **Gallery** (`/gallery`) - Photo showcase of cakes
6. **Contact** (`/contact`) - Contact information & inquiry form
7. **Delivery Info** (`/delivery`) - Delivery areas and charges

### Admin Features (Protected Dashboard)
1. **Dashboard** (`/admin`) - Overview of sales, orders, revenue
2. **Orders Management** - View, update status, track orders
3. **Food Items** - Add/edit cake items with images
4. **Categories** - Manage cake categories
5. **Menu Settings** - Configure cake types, sizes, flavors, delivery areas
6. **Delivery Areas** - Manage delivery zones and charges
7. **Site Settings** - Configure hero image and site settings

### Technical Features
- Responsive design (mobile-first approach)
- Dark mode support
- Image upload & optimization
- Order number generation with timestamps
- Real-time order status updates
- Admin authentication
- MongoDB document-based storage
- RESTful API endpoints

## Color Theme

**Warm, Premium Aesthetic**
- Primary: Golden Brown (`oklch(0.55 0.12 35)`)
- Secondary: Cream (`oklch(0.94 0.03 75)`)
- Accent: Warm Gold (`oklch(0.75 0.10 80)`)
- Background: Off-white (`oklch(0.98 0.015 75)`)
- Foreground: Dark Brown (`oklch(0.30 0.06 35)`)

## Fonts

- **Headings**: Playfair Display (elegant serif)
- **Body**: Lora (readable serif)
- **Mono**: Geist Mono (code)

## Database Schema (MongoDB)

### Collections

#### Orders
```typescript
{
  orderNumber: string (e.g., "TB240321001")
  customerName: string
  phone: string
  email?: string
  cakeType: string
  size: string
  flavor: string
  deliveryDate: string
  deliveryTime: string
  deliveryAddress: string
  deliveryArea?: string
  deliveryCharge?: number
  referenceImage?: string (Cloudinary URL)
  specialInstructions?: string
  estimatedPrice: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}
```

#### Food Items
```typescript
{
  name: string
  slug: string
  description?: string
  price: number
  image?: string (Cloudinary URL)
  categoryId: string
  categoryName?: string
  tags: string[]
  sizes?: [{ name: string, price: number }]
  active: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
}
```

#### Categories
```typescript
{
  name: string
  slug: string
  description?: string
  active: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}
```

#### Menu Items
```typescript
{
  type: 'cake_type' | 'size' | 'flavor'
  name: string
  label: string
  price?: number
  multiplier?: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}
```

#### Delivery Areas
```typescript
{
  name: string
  charge: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}
```

#### Site Settings
```typescript
{
  key: string
  value: string
  updatedAt: Date
}
```

## API Endpoints

### Public Endpoints
- `GET /api/food` - Get food items with optional category filtering
- `GET /api/menu` - Get menu configuration (cake types, sizes, flavors, delivery areas)
- `GET /api/settings` - Get site settings
- `POST /api/orders` - Create new order
- `GET /api/orders/track?orderNumber=X` - Track order status
- `POST /api/upload` - Upload image to Cloudinary

### Admin Endpoints (Protected)
- `POST /api/admin/auth` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET/POST /api/admin/food-items` - Manage food items
- `GET/POST /api/admin/categories` - Manage categories
- `GET/POST /api/admin/menu` - Manage menu items
- `GET/POST /api/admin/delivery` - Manage delivery areas
- `GET/PUT /api/admin/orders/[id]` - Manage individual orders
- `GET/POST /api/admin/settings` - Manage site settings

## Environment Variables

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://[user]:[pass]@[cluster]/[db]

# Cloudinary (Image Upload)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Admin Authentication (if needed)
ADMIN_PASSWORD=
```

## Running the Project

### Development
```bash
npm install
npm run dev
```
Server runs on `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Pages & Routes

### Customer-Facing
- `/` - Homepage
- `/menu` - Browse cakes
- `/order` - Place order
- `/track` - Track order
- `/gallery` - Photo gallery
- `/delivery` - Delivery information
- `/contact` - Contact page

### Admin Dashboard
- `/admin` - Dashboard home
- `/admin/orders` - Order management
- `/admin/food-items` - Cake management
- `/admin/categories` - Category management
- `/admin/menu` - Menu configuration
- `/admin/delivery` - Delivery area management
- `/admin/settings` - Site settings
- `/admin/dashboard` - Analytics dashboard

## Performance & Accessibility

- Semantic HTML with ARIA attributes
- Mobile-first responsive design
- Image optimization with Next.js Image component
- Lazy loading for images
- Accessible form controls
- Screen reader support

## Notable Implementation Details

1. **Order Numbering**: Uses format `TB[YY][MM][DD][RRR]` where RRR is random 3-digit
2. **Image Uploads**: Handled via Cloudinary API
3. **Responsive Breakpoints**: Tailwind CSS responsive prefixes (xs, sm, md, lg)
4. **Theme System**: CSS variables with OKLCH color space for accessibility
5. **Admin Authentication**: Session-based with protected routes
6. **Real-time Features**: Order status updates via API polling

## Future Enhancement Ideas

1. Payment integration (Stripe, bKash)
2. Email notifications for order confirmations
3. SMS notifications via Twilio
4. Inventory management for ingredients
5. Customer review/rating system
6. Subscription/recurring orders
7. Wishlist/saved cakes feature
8. Multi-language support
9. Admin analytics dashboard
10. Customer account portal

---

**Created**: March 23, 2026  
**Project**: Tiny Bites by Ruthbah  
**Repository**: amirfaisallin/tiny-bites-by-ruthbah  
**Tech Stack**: Next.js 16 + MongoDB + Tailwind CSS + shadcn/ui
