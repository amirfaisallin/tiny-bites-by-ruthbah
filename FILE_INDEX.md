# Complete File Index

A comprehensive guide to every file in the Tiny Bites project.

---

## 📑 Quick Navigation

- [Documentation Files](#-documentation-files)
- [App & Pages](#-app--pages)
- [API Routes](#-api-routes)
- [Components](#-components)
- [Utilities & Config](#-utilities--config)
- [Configuration Files](#-configuration-files)

---

## 📖 Documentation Files

| File | Purpose | Size |
|------|---------|------|
| `README.md` | Main project overview | ~400 lines |
| `PROJECT_OVERVIEW.md` | Detailed project documentation | ~360 lines |
| `ARCHITECTURE.md` | System design & architecture | ~380 lines |
| `QUICK_START.md` | Setup & getting started guide | ~390 lines |
| `FEATURES.md` | Features & development roadmap | ~400 lines |
| `FILE_INDEX.md` | This file - complete file listing | ~300 lines |

**📍 Start here**: Read `README.md` for overview, then `QUICK_START.md` to get started.

---

## 📱 App & Pages

### Root Layout
```
app/layout.tsx                (217 lines)
  ├─ Metadata configuration
  ├─ Font imports (Playfair Display, Lora)
  ├─ Analytics setup
  └─ Theme provider wrapper
```

### Public Pages
```
app/page.tsx                  (360 lines) [HOMEPAGE]
  ├─ Featured cakes section
  ├─ Feature highlights
  ├─ Customer testimonials
  ├─ Call-to-action sections
  └─ Dynamic data loading

app/menu/page.tsx             (270 lines) [MENU BROWSER]
  ├─ Category filtering
  ├─ Item grid display
  ├─ Real-time filtering
  └─ Loading states

app/order/page.tsx            (541 lines) [ORDER WIZARD]
  ├─ Step 1: Cake selection
  ├─ Step 2: Delivery details
  ├─ Step 3: Customer info
  ├─ Image upload handling
  ├─ Price calculation
  └─ Order submission

app/track/page.tsx            (~200 lines) [ORDER TRACKING]
  ├─ Order number search
  ├─ Status display
  └─ Order details

app/gallery/page.tsx          (~150 lines) [PHOTO GALLERY]
  ├─ Image grid
  └─ Lazy loading

app/delivery/page.tsx         (~150 lines) [DELIVERY INFO]
  ├─ Delivery areas
  └─ Charge information

app/contact/page.tsx          (~150 lines) [CONTACT PAGE]
  ├─ Contact form
  ├─ Contact details
  └─ Social links
```

### Admin Pages
```
app/admin/layout.tsx          (~150 lines) [ADMIN WRAPPER]
  ├─ Admin sidebar
  └─ Protected route wrapper

app/admin/page.tsx            (~300 lines) [ADMIN HOME]
  ├─ Dashboard overview
  ├─ Statistics cards
  ├─ Recent orders list
  └─ Revenue chart

app/admin/orders/page.tsx     (~400 lines) [ORDER MANAGEMENT]
  ├─ Orders table/list
  ├─ Status filtering
  ├─ Status update modal
  ├─ Delete functionality
  └─ Order details view

app/admin/food-items/page.tsx (~400 lines) [FOOD ITEMS]
  ├─ Items listing table
  ├─ Add item form
  ├─ Edit item form
  ├─ Image upload
  ├─ Delete items
  └─ Bulk actions

app/admin/food-list/page.tsx  (~300 lines) [FOOD LIST INVENTORY]
  ├─ Inventory view
  ├─ Featured toggle
  └─ Stock status

app/admin/categories/page.tsx (~350 lines) [CATEGORY MANAGEMENT]
  ├─ Categories table
  ├─ Add category form
  ├─ Edit category form
  ├─ Delete categories
  └─ Category ordering

app/admin/menu/page.tsx       (~450 lines) [MENU SETTINGS]
  ├─ Cake types management
  ├─ Sizes management
  ├─ Flavors management
  ├─ Delivery areas management
  └─ Add/edit/delete items

app/admin/delivery/page.tsx   (~300 lines) [DELIVERY MANAGEMENT]
  ├─ Delivery areas table
  ├─ Add area form
  ├─ Edit area form
  ├─ Delete areas
  └─ Charge management

app/admin/settings/page.tsx   (~250 lines) [SITE SETTINGS]
  ├─ Hero image upload
  ├─ Site information
  ├─ Contact details
  ├─ Social media links
  └─ Settings form
```

### Global Styles
```
app/globals.css               (~180 lines)
  ├─ Tailwind imports
  ├─ CSS custom properties (theme variables)
  ├─ Light mode colors (30+ variables)
  ├─ Dark mode colors (30+ variables)
  ├─ Theme configuration (@theme)
  └─ Base layer styles (@layer base)
```

---

## 🔌 API Routes

### Public API Endpoints

```
app/api/food/route.ts         (~100 lines) [GET FOOD ITEMS]
  ├─ GET: List all food items
  ├─ Filter by category
  ├─ Filter by featured
  └─ MongoDB query

app/api/menu/route.ts         (~150 lines) [GET MENU CONFIG]
  ├─ GET: Menu configuration
  ├─ Cake types
  ├─ Sizes
  ├─ Flavors
  └─ Delivery areas

app/api/settings/route.ts     (~80 lines) [GET SETTINGS]
  ├─ GET: Site settings
  └─ MongoDB lookup

app/api/upload/route.ts       (~120 lines) [IMAGE UPLOAD]
  ├─ POST: Upload to Cloudinary
  ├─ File validation
  └─ URL return

app/api/orders/route.ts       (~80 lines) [ORDER OPERATIONS]
  ├─ POST: Create order
  ├─ Generate order number
  ├─ Save to MongoDB
  ├─ GET: List orders
  └─ Status filtering

app/api/orders/[id]/route.ts  (~120 lines) [INDIVIDUAL ORDER]
  ├─ GET: Order details
  ├─ PUT: Update status
  ├─ DELETE: Delete order
  └─ MongoDB operations

app/api/orders/track/route.ts (~80 lines) [TRACK ORDER]
  ├─ GET: Track by order number
  └─ Status lookup
```

### Admin API Endpoints (Protected)

```
app/api/admin/auth/route.ts           (~100 lines) [ADMIN LOGIN]
  ├─ POST: Authenticate admin
  ├─ Password verification
  └─ Session/token creation

app/api/admin/stats/route.ts          (~150 lines) [DASHBOARD STATS]
  ├─ GET: Dashboard statistics
  ├─ Total orders count
  ├─ Revenue calculation
  ├─ Recent orders
  └─ Aggregate data

app/api/admin/food-items/route.ts     (~200 lines) [FOOD ITEMS API]
  ├─ GET: List food items
  ├─ POST: Create food item
  ├─ PUT: Update food item
  ├─ DELETE: Delete food item
  └─ MongoDB CRUD

app/api/admin/categories/route.ts     (~180 lines) [CATEGORIES API]
  ├─ GET: List categories
  ├─ POST: Create category
  ├─ PUT: Update category
  ├─ DELETE: Delete category
  └─ MongoDB CRUD

app/api/admin/menu/route.ts           (~200 lines) [MENU API]
  ├─ GET: Menu configuration
  ├─ POST: Update menu items
  ├─ Add/edit/delete items
  └─ MongoDB operations

app/api/admin/delivery/route.ts       (~180 lines) [DELIVERY API]
  ├─ GET: List delivery areas
  ├─ POST: Create area
  ├─ PUT: Update area
  ├─ DELETE: Delete area
  └─ MongoDB CRUD

app/api/admin/settings/route.ts       (~150 lines) [SETTINGS API]
  ├─ GET: Site settings
  ├─ POST: Update settings
  └─ MongoDB operations
```

---

## 🧩 Components

### Layout Components

```
components/site-layout.tsx            (~20 lines) [SITE LAYOUT WRAPPER]
  ├─ Navbar
  ├─ Main content
  ├─ Footer
  └─ Floating buttons

components/admin-layout.tsx           (~50 lines) [ADMIN LAYOUT WRAPPER]
  ├─ Admin sidebar
  ├─ Main content
  └─ Protected route

components/navbar.tsx                 (~90 lines) [NAVIGATION BAR]
  ├─ Logo
  ├─ Desktop nav links
  ├─ Mobile hamburger menu
  ├─ Scroll detection
  └─ Order button

components/footer.tsx                 (~140 lines) [FOOTER]
  ├─ Logo section
  ├─ Quick links
  ├─ Categories
  ├─ Contact info
  ├─ Social icons
  └─ Copyright

components/admin-sidebar.tsx          (~150 lines) [ADMIN SIDEBAR]
  ├─ Admin logo
  ├─ Navigation menu
  ├─ Admin sections
  ├─ Mobile collapse
  └─ Style toggle

components/floating-buttons.tsx       (~50 lines) [FLOATING ACTION BUTTONS]
  ├─ WhatsApp button
  └─ Messenger button

components/theme-provider.tsx         (~12 lines) [THEME WRAPPER]
  └─ Next-themes provider
```

### UI Components (shadcn/ui)

```
components/ui/accordion.tsx           Accordion widget
components/ui/alert-dialog.tsx        Alert dialog modal
components/ui/alert.tsx               Alert notifications
components/ui/aspect-ratio.tsx        Aspect ratio container
components/ui/avatar.tsx              User avatars
components/ui/badge.tsx               Badge labels
components/ui/breadcrumb.tsx          Breadcrumb navigation
components/ui/button-group.tsx        Button groups
components/ui/button.tsx              Standard buttons
components/ui/calendar.tsx            Date picker calendar
components/ui/card.tsx                Card containers
components/ui/carousel.tsx            Image carousel
components/ui/chart.tsx               Chart components
components/ui/checkbox.tsx            Checkboxes
components/ui/collapsible.tsx         Collapsible sections
components/ui/command.tsx             Command palette
components/ui/context-menu.tsx        Context menus
components/ui/dialog.tsx              Modal dialogs
components/ui/drawer.tsx              Drawer panels
components/ui/dropdown-menu.tsx       Dropdown menus
components/ui/empty.tsx               Empty states
components/ui/field.tsx               Form fields
components/ui/form.tsx                Form wrapper
components/ui/hover-card.tsx          Hover tooltips
components/ui/input-group.tsx         Input groups
components/ui/input-otp.tsx           OTP inputs
components/ui/input.tsx               Text inputs
components/ui/item.tsx                List items
components/ui/kbd.tsx                 Keyboard keys
components/ui/label.tsx               Form labels
components/ui/menubar.tsx             Menu bars
components/ui/navigation-menu.tsx     Navigation menus
components/ui/pagination.tsx          Pagination controls
components/ui/popover.tsx             Popover tooltips
components/ui/progress.tsx            Progress bars
components/ui/radio-group.tsx         Radio buttons
components/ui/resizable.tsx           Resizable panels
components/ui/scroll-area.tsx         Scrollable areas
components/ui/select.tsx              Dropdown selects
components/ui/separator.tsx           Visual separators
components/ui/sheet.tsx               Side sheets
components/ui/sidebar.tsx             Sidebar layout
components/ui/skeleton.tsx            Loading skeletons
components/ui/slider.tsx              Range sliders
components/ui/sonner.tsx              Toast notifications
components/ui/spinner.tsx             Loading spinners
components/ui/switch.tsx              Toggle switches
components/ui/table.tsx               Data tables
components/ui/tabs.tsx                Tab panels
components/ui/textarea.tsx            Text areas
components/ui/toast.tsx               Toast notifications
components/ui/toaster.tsx             Toast container
components/ui/toggle-group.tsx        Toggle groups
components/ui/toggle.tsx              Toggle buttons
components/ui/tooltip.tsx             Tooltips
components/ui/use-mobile.tsx          Mobile hook
components/ui/use-toast.ts            Toast hook
```

---

## 🔧 Utilities & Config

### Hooks

```
hooks/use-mobile.ts                   (~20 lines)
  └─ Mobile breakpoint detection

hooks/use-toast.ts                    (~30 lines)
  └─ Toast notification hook
```

### Library Files

```
lib/mongodb.ts                        (~150 lines) [DATABASE CONNECTION]
  ├─ MongoDB connection function
  ├─ Connection caching/pooling
  ├─ TypeScript interfaces
  │  ├─ Order interface
  │  ├─ FoodItem interface
  │  ├─ Category interface
  │  ├─ MenuItem interface
  │  ├─ DeliveryArea interface
  │  └─ SiteSettings interface
  └─ Error handling

lib/utils.ts                          (~10 lines) [UTILITY FUNCTIONS]
  └─ Class name merge (cn function)
```

---

## ⚙️ Configuration Files

### Root Configuration

```
package.json                          (~80 lines)
  ├─ Project metadata
  ├─ Scripts (dev, build, start, lint)
  ├─ Dependencies (30+ packages)
  └─ DevDependencies

package-lock.json                     (Dependency lock file)
  └─ Locked versions

tsconfig.json                         (~30 lines)
  ├─ TypeScript configuration
  ├─ Path aliases (@/*)
  └─ Compiler options

next.config.js                        (Not shown but in project)
  ├─ Next.js configuration
  └─ Build optimizations

tailwind.config.js                    (Not shown but implied)
  └─ Tailwind configuration

components.json                       (~30 lines)
  ├─ shadcn/ui configuration
  ├─ Component paths
  └─ Aliases
```

### Git Configuration

```
.gitignore                            (Standard Next.js ignore)
  ├─ node_modules
  ├─ .next
  ├─ .env.local
  └─ OS files
```

---

## 📊 File Statistics

| Category | Count | Lines |
|----------|-------|-------|
| **Documentation** | 6 | ~2,300 |
| **Pages** | 13 | ~4,000 |
| **API Routes** | 13 | ~1,500 |
| **Components** | 50+ | ~3,000 |
| **Config Files** | 5 | ~200 |
| **Total** | **87+** | **~11,000** |

---

## 🗂️ Directory Tree

```
tiny-bites-by-ruthbah/
├── app/
│   ├── api/
│   │   ├── admin/
│   │   │   ├── auth/route.ts
│   │   │   ├── categories/route.ts
│   │   │   ├── delivery/route.ts
│   │   │   ├── food-items/route.ts
│   │   │   ├── menu/route.ts
│   │   │   ├── settings/route.ts
│   │   │   └── stats/route.ts
│   │   ├── orders/
│   │   │   ├── [id]/route.ts
│   │   │   ├── route.ts
│   │   │   └── track/route.ts
│   │   ├── food/route.ts
│   │   ├── menu/route.ts
│   │   ├── settings/route.ts
│   │   └── upload/route.ts
│   ├── admin/
│   │   ├── categories/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── delivery/page.tsx
│   │   ├── food-items/page.tsx
│   │   ├── food-list/page.tsx
│   │   ├── layout.tsx
│   │   ├── menu/page.tsx
│   │   ├── orders/page.tsx
│   │   ├── page.tsx
│   │   └── settings/page.tsx
│   ├── contact/page.tsx
│   ├── delivery/page.tsx
│   ├── gallery/page.tsx
│   ├── menu/page.tsx
│   ├── order/page.tsx
│   ├── track/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── [40+ component files]
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── admin-layout.tsx
│   ├── admin-sidebar.tsx
│   ├── floating-buttons.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── site-layout.tsx
│   └── theme-provider.tsx
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   ├── mongodb.ts
│   └── utils.ts
├── public/
│   └── images/
├── components.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── .gitignore
├── README.md
├── PROJECT_OVERVIEW.md
├── ARCHITECTURE.md
├── QUICK_START.md
├── FEATURES.md
└── FILE_INDEX.md (this file)
```

---

## 🎯 Quick File Lookup

### Need to add a new page?
→ Create in `app/[page-name]/page.tsx`

### Need to add a new API?
→ Create in `app/api/[endpoint]/route.ts`

### Need to modify theme?
→ Edit `app/globals.css` (color variables section)

### Need to modify navigation?
→ Edit `components/navbar.tsx` or `components/admin-sidebar.tsx`

### Need to change component styles?
→ Edit the component file (e.g., `components/ui/button.tsx`)

### Need to modify database schema?
→ Edit `lib/mongodb.ts` (interfaces section)

### Need to add authentication?
→ Edit `/api/admin/auth/route.ts` and add middleware

---

## 📝 File Categories by Purpose

### Customer-Facing Pages
- `app/page.tsx` - Homepage
- `app/menu/page.tsx` - Menu browser
- `app/order/page.tsx` - Order form
- `app/track/page.tsx` - Order tracking
- `app/gallery/page.tsx` - Photo gallery
- `app/delivery/page.tsx` - Delivery info
- `app/contact/page.tsx` - Contact page

### Admin Pages
- `app/admin/page.tsx` - Dashboard
- `app/admin/orders/page.tsx` - Order management
- `app/admin/food-items/page.tsx` - Food management
- `app/admin/categories/page.tsx` - Category management
- `app/admin/menu/page.tsx` - Menu settings
- `app/admin/delivery/page.tsx` - Delivery management
- `app/admin/settings/page.tsx` - Site settings

### API Endpoints
- All files in `app/api/` directory

### Shared Components
- `components/navbar.tsx`
- `components/footer.tsx`
- `components/site-layout.tsx`
- All files in `components/ui/`

### Configuration & Setup
- `app/layout.tsx` - Root layout
- `app/globals.css` - Theme variables
- `lib/mongodb.ts` - Database config
- `components.json` - shadcn config
- `tsconfig.json` - TypeScript config

---

## 🔍 Finding Things

### Where is the theme/colors defined?
→ `app/globals.css` (CSS custom properties section)

### Where is the database schema?
→ `lib/mongodb.ts` (TypeScript interfaces)

### Where is the order creation logic?
→ `app/api/orders/route.ts` (POST handler)

### Where is the admin dashboard?
→ `app/admin/page.tsx` and `app/admin/dashboard/page.tsx`

### Where are the forms?
→ Each page that needs forms (order, admin pages)

### Where is the image upload?
→ `app/api/upload/route.ts` (backend) and `app/order/page.tsx` (frontend)

### Where is the order tracking?
→ `app/track/page.tsx` (frontend) and `app/api/orders/track/route.ts` (backend)

### Where are navigation links?
→ `components/navbar.tsx` (main nav) and `components/admin-sidebar.tsx` (admin nav)

---

## 💡 Pro Tips

1. **Use Relative Imports**: `@/components/button` instead of `../../../components/button`
2. **Check Types**: All major types defined in `lib/mongodb.ts`
3. **Theme Variables**: Use CSS variables for consistency (`var(--primary)`)
4. **Component Props**: Check component interfaces for available props
5. **API Patterns**: Check existing routes for patterns to follow
6. **Error Handling**: All routes have try-catch blocks
7. **Validation**: Use Zod for input validation before database operations

---

**Last Updated**: March 23, 2026

For more details, see:
- [`README.md`](./README.md) - Project overview
- [`PROJECT_OVERVIEW.md`](./PROJECT_OVERVIEW.md) - Detailed documentation
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) - System design
- [`QUICK_START.md`](./QUICK_START.md) - Getting started
