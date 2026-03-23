# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- MongoDB Atlas account
- Cloudinary account (for image uploads)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/amirfaisallin/tiny-bites-by-ruthbah.git
cd tiny-bites-by-ruthbah

# Install dependencies
npm install

# Or if using yarn
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/?appName=tinyBites
MONGODB_DB=sweet_delights

# Cloudinary Image Upload
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional: Admin Password
ADMIN_PASSWORD=your_secure_password
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure Quick Reference

```
📦 tiny-bites-by-ruthbah
 ┣ 📂 app/                    # Next.js app directory
 ┃ ┣ 📂 api/                  # API routes
 ┃ ┣ 📂 admin/                # Admin dashboard pages
 ┃ ┣ 📄 page.tsx              # Homepage
 ┃ ┣ 📄 layout.tsx            # Root layout
 ┃ ┗ 📄 globals.css           # Global styles
 ┣ 📂 components/             # React components
 ┃ ┣ 📂 ui/                   # shadcn/ui components
 ┃ ┗ 📄 navbar.tsx            # Navigation bar
 ┣ 📂 lib/                    # Utilities & config
 ┃ ┗ 📄 mongodb.ts            # Database connection
 ┣ 📂 public/                 # Static files
 ┣ 📄 package.json            # Dependencies
 ┗ 📄 tsconfig.json           # TypeScript config
```

---

## 🌐 Main Routes

### Customer Routes
| Route | Description |
|-------|-------------|
| `/` | Homepage with featured cakes |
| `/menu` | Browse all cakes by category |
| `/order` | Place a new cake order |
| `/track` | Track order by order number |
| `/gallery` | Photo gallery of cakes |
| `/delivery` | Delivery info & areas |
| `/contact` | Contact page |

### Admin Routes
| Route | Description |
|-------|-------------|
| `/admin` | Admin dashboard |
| `/admin/orders` | Manage orders |
| `/admin/food-items` | Manage cake items |
| `/admin/categories` | Manage categories |
| `/admin/menu` | Menu settings |
| `/admin/delivery` | Delivery areas |
| `/admin/settings` | Site settings |

---

## 🛠️ Key Features

### ✨ Customer Features
- Browse cake menu with filters
- 3-step ordering process
- Image upload for reference cakes
- Order tracking
- WhatsApp & Messenger integration

### 👨‍💼 Admin Features
- Manage orders & status
- Add/edit food items
- Configure delivery areas
- Menu customization
- Site settings
- Dashboard analytics

---

## 📦 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + Next.js 16 |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui (40+ components) |
| **Backend** | Next.js API Routes |
| **Database** | MongoDB |
| **File Storage** | Cloudinary |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |

---

## 🎨 Theme Customization

Edit `/app/globals.css` to change colors:

```css
:root {
  /* Primary Brand Color */
  --primary: oklch(0.55 0.12 35);  /* Golden Brown */
  
  /* Background & Text */
  --background: oklch(0.98 0.015 75);  /* Off-white */
  --foreground: oklch(0.30 0.06 35);   /* Dark Brown */
  
  /* Accents */
  --secondary: oklch(0.94 0.03 75);    /* Cream */
  --accent: oklch(0.75 0.10 80);       /* Gold */
}
```

Learn more about OKLCH colors: [oklch.com](https://oklch.com)

---

## 📊 Database Setup

### MongoDB Collections

The app automatically uses these collections:

1. **orders** - Customer orders
2. **food_items** - Cake products
3. **categories** - Cake categories
4. **menu_items** - Menu configuration
5. **delivery_areas** - Delivery zones
6. **settings** - Site settings

No manual setup needed—create documents via admin dashboard or API.

---

## 🔒 Security Notes

### Environment Variables
- **Never** commit `.env.local` to git
- Use `.env.local` for local development only
- Set environment variables in Vercel project settings for production

### Admin Authentication
- Change default `ADMIN_PASSWORD` immediately
- Implement JWT tokens for production
- Consider OAuth integration

### MongoDB
- Use IP whitelist in MongoDB Atlas
- Enable authentication
- Rotate credentials regularly

---

## 🐛 Troubleshooting

### "Failed to connect to MongoDB"
```
✅ Check MONGODB_URI in .env.local
✅ Verify MongoDB Atlas cluster is running
✅ Check IP whitelist includes your machine
✅ Test connection string in MongoDB Compass
```

### "Cloudinary image upload fails"
```
✅ Verify NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set
✅ Check CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET
✅ Ensure Cloudinary account is active
✅ Check file size limits
```

### "Port 3000 already in use"
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

---

## 📝 API Examples

### Get Menu Items
```bash
curl http://localhost:3000/api/food
```

### Get Menu Configuration
```bash
curl http://localhost:3000/api/menu
```

### Create Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "John Doe",
    "phone": "01711234567",
    "email": "john@example.com",
    "cakeType": "birthday",
    "size": "1kg",
    "flavor": "chocolate",
    "deliveryDate": "2025-03-28",
    "deliveryTime": "2:00 PM - 4:00 PM",
    "deliveryAddress": "123 Main St, Dhaka",
    "deliveryArea": "dhaka-city",
    "specialInstructions": "No nuts please"
  }'
```

### Track Order
```bash
curl http://localhost:3000/api/orders/track?orderNumber=TB250327001
```

---

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy

### Option 3: Git Push
```bash
git push origin main  # Vercel auto-deploys
```

---

## 📚 Useful Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **MongoDB**: https://docs.mongodb.com
- **Cloudinary**: https://cloudinary.com/documentation
- **React Hook Form**: https://react-hook-form.com

---

## 💡 Tips & Tricks

### Add a New Page
```tsx
// app/new-page/page.tsx
import { SiteLayout } from "@/components/site-layout"

export default function NewPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto">
        {/* Your content */}
      </div>
    </SiteLayout>
  )
}
```

### Add a New Admin Page
```tsx
// app/admin/new-section/page.tsx
import { AdminLayout } from "@/components/admin-layout"

export default function NewAdminPage() {
  return (
    <AdminLayout>
      {/* Your content */}
    </AdminLayout>
  )
}
```

### Use TypeScript for Type Safety
```tsx
import { FoodItem } from "@/lib/mongodb"

interface Props {
  items: FoodItem[]
}

export function ItemList({ items }: Props) {
  return (
    // Your JSX
  )
}
```

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add feature"`
3. Push branch: `git push origin feature/your-feature`
4. Open Pull Request

---

## 📞 Support

For issues or questions:
- Check existing GitHub issues
- Review documentation files
- Check troubleshooting section above
- Contact project maintainer

---

## 📄 License

This project is private. All rights reserved.

---

**Happy coding! 🍰**

For more details, see:
- [`PROJECT_OVERVIEW.md`](./PROJECT_OVERVIEW.md) - Complete project documentation
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) - System design & architecture
