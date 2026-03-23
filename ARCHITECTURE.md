# Architecture & System Design

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      CLIENT SIDE (React/Next.js)                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐ │
│  │  Public Pages    │  │  Admin Dashboard │  │ Shared Layout  │ │
│  ├──────────────────┤  ├──────────────────┤  ├────────────────┤ │
│  │  /               │  │  /admin          │  │  Navbar        │ │
│  │  /menu           │  │  /admin/orders   │  │  Footer        │ │
│  │  /order          │  │  /admin/items    │  │  Sidebar       │ │
│  │  /track          │  │  /admin/settings │  │  Floating Btns │ │
│  │  /gallery        │  │  /admin/menu     │  │  Theme         │ │
│  │  /delivery       │  │  /admin/delivery │  │                │ │
│  │  /contact        │  │  /admin/categories        │                │
│  └──────────────────┘  └──────────────────┘  └────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │            Components (shadcn/ui + Custom)                │  │
│  │  Button, Card, Input, Form, Dialog, Tabs, Table, etc.    │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              Styling & Theme                              │  │
│  │  Tailwind CSS v4 + CSS Variables (OKLCH Color Space)     │  │
│  └────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                            ↓ (API Calls)
┌─────────────────────────────────────────────────────────────────┐
│              SERVER SIDE (Next.js API Routes)                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────────────────┐  ┌──────────────────────────────┐   │
│  │  Public API Routes     │  │  Admin API Routes (Protected)│   │
│  ├────────────────────────┤  ├──────────────────────────────┤   │
│  │  GET /api/food         │  │  POST /api/admin/auth        │   │
│  │  GET /api/menu         │  │  GET /api/admin/stats        │   │
│  │  GET /api/settings     │  │  GET/POST /api/admin/items   │   │
│  │  POST /api/orders      │  │  GET/POST /api/admin/menu    │   │
│  │  GET /api/orders/track │  │  GET/POST /api/admin/delivery   │
│  │  POST /api/upload      │  │  PUT /api/admin/orders/[id]  │   │
│  └────────────────────────┘  └──────────────────────────────┘   │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │         Data Access & Business Logic (lib/mongodb.ts)     │  │
│  │  - Database Connection Management                         │  │
│  │  - TypeScript Interfaces & Schemas                        │  │
│  │  - Utility Functions                                      │  │
│  └────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                            ↓ (Database Queries)
┌─────────────────────────────────────────────────────────────────┐
│                    DATA & STORAGE LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────┐  ┌────────────────────────────────┐   │
│  │  MongoDB Database    │  │  Cloudinary (Image Storage)    │   │
│  │  (sweet_delights)    │  │  - Cake Images                 │   │
│  ├──────────────────────┤  │  - Reference Images            │   │
│  │  Collections:        │  │  - Gallery Photos              │   │
│  │  - orders            │  └────────────────────────────────┘   │
│  │  - food_items        │                                        │
│  │  - categories        │  ┌────────────────────────────────┐   │
│  │  - menu_items        │  │  Vercel Analytics              │   │
│  │  - delivery_areas    │  │  - Page Views                  │   │
│  │  - settings          │  │  - User Interactions           │   │
│  └──────────────────────┘  └────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Customer Order Flow
```
┌─────────────────┐
│   Customer      │
│   Homepage      │
└────────┬────────┘
         │
         ↓
    ┌─────────────────┐
    │  Browse Menu    │
    │  & Categories   │ ← GET /api/food
    │  & Food Items   │ ← GET /api/food?category=X
    └────────┬────────┘
             │
             ↓
    ┌──────────────────────┐
    │   Order Page         │
    │   (3-Step Process)   │
    └──────────┬───────────┘
               │
        ┌──────┴──────┐
        │             │
        ↓             ↓
   ┌─────────────┐  ┌──────────────────┐
   │ Step 1      │  │ Step 2           │
   │ Cake        │  │ Delivery         │
   │ Selection   │  │ Details          │
   │             │  │ - Date/Time      │
   │ - Type      │  │ - Area/Address   │
   │ - Size      │  │ - Get areas:     │
   │ - Flavor    │  │ GET /api/menu    │
   │ - Image     │  │                  │
   │ (optional)  │  │                  │
   │             │  │                  │
   │ Upload img: │  │                  │
   │ POST /upload│  │                  │
   └──────┬──────┘  └────────┬─────────┘
          │                  │
          └────────┬─────────┘
                   │
                   ↓
          ┌────────────────────┐
          │ Step 3             │
          │ Your Information   │
          │ - Name             │
          │ - Phone            │
          │ - Email            │
          │ - Special Notes    │
          │                    │
          │ [Submit Order]     │
          └─────────┬──────────┘
                    │
                    ↓
          ┌────────────────────────┐
          │ POST /api/orders       │
          │                        │
          │ - Generate Order #     │
          │ - Save to MongoDB      │
          │ - Return Order Number  │
          └──────────┬─────────────┘
                     │
                     ↓
          ┌──────────────────────┐
          │ Order Confirmation   │
          │ Page                 │
          │ (Order # Display)    │
          └──────────┬───────────┘
                     │
                     ↓
          ┌──────────────────────┐
          │ Track Order          │
          │ GET /api/orders/     │
          │ track?orderNumber=X  │
          │                      │
          │ View Status:         │
          │ - Pending            │
          │ - Confirmed          │
          │ - Preparing          │
          │ - Ready              │
          │ - Delivered          │
          └──────────────────────┘
```

### Admin Management Flow
```
┌──────────────────┐
│ Admin Dashboard  │
└────────┬─────────┘
         │
         ↓
    ┌─────────────────────────────────┐
    │  Choose Management Section      │
    └──┬──────┬─────────┬──────┬──────┘
       │      │         │      │
       ↓      ↓         ↓      ↓
   ┌────┐ ┌─────┐  ┌──────┐ ┌──────┐
   │    │ │     │  │      │ │      │
   ↓    ↓ ↓     ↓  ↓      ↓ ↓      ↓
┌────────────────┐ ┌──────────────┐ ┌────────────┐ ┌──────────────┐
│   Orders       │ │ Food Items   │ │ Menu       │ │ Delivery     │
│ Management     │ │ Management   │ │ Settings   │ │ Areas        │
├────────────────┤ ├──────────────┤ ├────────────┤ ├──────────────┤
│ - View orders  │ │ - Add items  │ │ - Cake     │ │ - Add areas  │
│ - Update       │ │ - Edit items │ │   Types    │ │ - Set charge │
│   status       │ │ - Delete     │ │ - Sizes    │ │ - Remove     │
│ - Track        │ │ - Upload img │ │ - Flavors  │ │   areas      │
│                │ │ - Manage     │ │ - Update   │ │              │
│ API Calls:     │ │   categories │ │ - Preview  │ │ API Calls:   │
│ GET /api/      │ │              │ │            │ │ GET/POST /   │
│ admin/orders   │ │ API Calls:   │ │ API Calls: │ │ api/admin/   │
│ PUT /api/      │ │ GET/POST /   │ │ GET/POST / │ │ delivery     │
│ admin/orders   │ │ api/admin/   │ │ api/admin/ │ │              │
│ /[id]          │ │ food-items   │ │ menu       │ │              │
└────────────────┘ └──────────────┘ └────────────┘ └──────────────┘
```

## Component Hierarchy

```
Layout
├── Navbar
│   ├── Logo
│   ├── Nav Links
│   ├── Mobile Menu
│   └── CTA Button
├── Main Content
│   ├── Admin Layout (if /admin route)
│   │   ├── Admin Sidebar
│   │   │   ├── Logo
│   │   │   └── Nav Items
│   │   └── Page Content
│   │       ├── Header
│   │       ├── Cards/Tables
│   │       ├── Forms
│   │       └── Dialogs
│   └── Site Pages
│       ├── Hero Section
│       ├── Feature Cards
│       ├── Product Grid
│       ├── Forms
│       └── CTAs
├── Footer
│   ├── Links
│   ├── Social Icons
│   ├── Contact Info
│   └── Copyright
└── Floating Buttons
    ├── WhatsApp Button
    └── Messenger Button
```

## State Management Strategy

### Global State
- **Theme**: `next-themes` context (dark/light mode)
- **Toast Notifications**: Custom hook `use-toast`

### Page-Level State
- React `useState` for component-specific state
- React `useEffect` for data fetching
- Form state with `react-hook-form`

### Data Caching
- MongoDB connection caching (singleton pattern)
- API response caching (Vercel default)

## Authentication & Security

### Admin Authentication
- Password-based login at `/api/admin/auth`
- Session/JWT tokens (implementation detail in routes)
- Protected admin routes via middleware or route guards

### Data Security
- MongoDB connection string in environment variables
- Cloudinary API keys in environment variables
- Input validation with Zod schemas
- CORS headers configured

## Database Connection Pattern

```typescript
// MongoDB Connection Singleton Pattern
let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }
  // Connect and cache
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db(MONGODB_DB)
  cachedClient = client
  cachedDb = db
  return { client, db }
}
```

## Image Handling

### Upload Flow
1. User selects image in browser
2. File uploaded to `/api/upload`
3. Server sends to Cloudinary API
4. Cloudinary returns image URL
5. URL stored in MongoDB
6. Frontend displays with Next.js `<Image>` component

### Image Optimization
- Cloudinary automatic resizing
- Next.js Image component with optimization
- Responsive srcSet generation
- Lazy loading support

## Performance Considerations

### Frontend Optimization
- Code splitting via Next.js dynamic imports
- Image lazy loading
- CSS-in-JS (Tailwind) purging unused styles
- Minimal JavaScript bundles

### Backend Optimization
- MongoDB indexes on frequently queried fields
- Connection pooling/caching
- API response caching headers
- Cloudinary CDN for image delivery

### Monitoring
- Vercel Analytics tracking
- Error logging in API routes
- Console errors for debugging

## Deployment Architecture

```
GitHub Repository (amirfaisallin/tiny-bites-by-ruthbah)
        ↓
    Git Push
        ↓
Vercel (Deployment)
    ├── Frontend (React/Next.js)
    │   ├── Automatic builds on push
    │   ├── Zero-config deployment
    │   └── CDN distributed
    ├── API Routes (Serverless Functions)
    │   ├── Auto-scaled
    │   ├── Cold start optimized
    │   └── MongoDB connections
    └── Environment Variables
        ├── MONGODB_URI
        ├── CLOUDINARY_*
        └── Other secrets
        ↓
MongoDB Atlas (Database)
    └── Cloud-hosted MongoDB
        ├── Automatic backups
        ├── Replica sets
        └── Security groups
        ↓
Cloudinary (File Storage)
    └── Image optimization CDN
        ├── Automatic resizing
        ├── Format conversion
        └── Global delivery
```

## Error Handling

### Frontend
- Try-catch blocks in async operations
- Loading states for user feedback
- Error messages from API responses
- Toast notifications for user alerts

### Backend
- Try-catch in API routes
- Proper HTTP status codes
- Error logging to console
- Graceful fallbacks

## TypeScript Interfaces

All major data structures are typed:
- `Order` - Customer orders
- `FoodItem` - Cake products
- `FoodCategory` - Cake categories
- `MenuItem` - Menu configuration
- `DeliveryArea` - Delivery zones
- `SiteSettings` - Site configuration

## Responsive Design Strategy

- **Mobile-first** CSS writing
- **Tailwind breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** using Flexbox
- **Grid layouts** for multi-column designs
- **Responsive text sizes** with `text-xs` to `text-3xl`
- **Touch-friendly buttons** (min 44px height)

---

This architecture supports horizontal scaling, easy feature addition, and maintainability.
