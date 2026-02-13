# Instagram Integration Guide - Sharmistha Designer Studio

## What's Been Integrated ✅

A **beautiful, royal Instagram showcase section** that displays Sharmistha's work with:

✅ **Royal Grid Layout** - 3-column responsive grid (2 on tablet, 1 on mobile)
✅ **Hover Effects** - Instagram icon overlay + caption reveal + image zoom
✅ **Luxury Animations** - Staggered reveal, smooth transitions, elegant scroll triggers
✅ **Click to Instagram** - Each post links directly to Instagram
✅ **Live API Support** - Real Instagram posts via Graph API (with fallback placeholders)
✅ **Follow CTA** - "Follow on Instagram" button with gradient styling

---

## Section Location in Website Flow

The Instagram showcase appears in this order:

1. Hero (full-screen carousel)
2. Search/Explore
3. Editorial 1 (heritage collection)
4. Editorial 2 (luxury fashion)
5. Testimonials
6. **← Instagram Showcase (NEW)**
7. Consultation/Booking
8. Footer

---

## Component Files Created

### 1. **InstagramShowcase.tsx** - Main Display Component
Location: `src/components/sections/InstagramShowcase.tsx`

Features:
- Customizable title & subtitle
- Responsive 3-column grid (customizable)
- Hover revealing captions & Instagram icon
- Click-to-open links
- Staggered Framer Motion animations
- "Follow on Instagram" CTA button
- Live feed embed section (placeholder for future)

**Props:**
```tsx
interface InstagramShowcaseProps {
  title?: string;              // "FOLLOW OUR JOURNEY"
  subtitle?: string;           // "@sharmishthadesignerstudio"
  igProfileUrl?: string;       // Instagram profile link
  posts?: InstagramPost[];     // Array of posts to display
}
```

### 2. **instagram.ts** - API Service
Location: `src/services/instagram.ts`

Features:
- `fetchInstagramPosts()` - Fetches real posts from Instagram Graph API
- `useInstagramPosts()` - React hook for easy integration
- Placeholder posts (fall back if API not configured)
- Date formatting helper
- Error handling with console warnings

**How it Works:**
1. Checks for `VITE_INSTAGRAM_ACCESS_TOKEN` and `VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID`
2. Fetches posts from Instagram Graph API
3. Falls back to placeholder posts if credentials missing
4. Returns array of InstagramPost objects

---

## Setup: How to Enable Live Instagram Feed

### Step-by-Step Setup (5 minutes)

#### 1. Create a Facebook App
- Go to https://developers.facebook.com/apps
- Click "Create App"
- Select "Business" type
- Fill in app details

#### 2. Add Instagram Graph API Product
- In your app dashboard
- Go to "Products" → Click "+"
- Search for "Instagram Graph API"
- Click "Set Up"

#### 3. Get Your Business Account ID & Access Token
- Go to "Settings" → "Basic"
- Copy your App ID
- Go to "Tools" → "Graph API Explorer"
- Select your app from dropdown
- In the search box, type: `me?fields=id,name`
- Click "Get Token" → "Get User Access Token"
- Select these permissions:
  - `instagram_basic`
  - `instagram_content_publishing` (optional)
- Click "Get Token"
- Copy the token displayed

#### 4. Get Your Instagram Business Account ID
- In Graph API Explorer, run:
```
GET /me/instagram_business_accounts
```
- From the response, copy the `id` value

#### 5. Add to `.env.local`
```bash
VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id
```

#### 6. Restart dev server
```bash
npm run dev
```

**That's it!** Your live Instagram posts will now display.

---

## Features & Styling

### Hover Effects (Royal & Elegant)

**Desktop Hover Behavior:**
```
1. Image zooms in (110% scale)
2. Gradient overlay fades in (primary color → transparent)
3. Instagram icon appears in center
4. Caption slides up from bottom
5. Corner Instagram badge appears
```

**Mobile:**
- Touch-friendly sizing
- No hover (uses tap instead)
- Caption always visible on tap

### Colors Used
- `primary`: #A88D6F (Warm gold/bronze)
- `accent`: #D4AF8F (Light gold)
- `background`: #F9F7F3 (Warm ivory)
- Overlays: Black gradients with transparency

### Animations
- Stagger delay: 0.1s between posts
- Hover lift: 8px upward motion
- Duration: 300-600ms (smooth, not jarring)
- Easing: Built-in Framer Motion defaults (cubic-bezier)

---

## Customization

### Change Grid Layout
In `InstagramShowcase.tsx`, modify grid classes:
```jsx
// Current: 3-column desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// 4-column:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"

// 2-column:
className="grid grid-cols-1 md:grid-cols-2 gap-4"
```

### Change Title/Subtitle
In `App.tsx`:
```jsx
<InstagramShowcase
  title="OUR LATEST WORK"
  subtitle="@sharmishthadesignerstudio"
  igProfileUrl="https://www.instagram.com/sharmishthadesignerstudio"
/>
```

### Use Custom Posts (Static)
```jsx
<InstagramShowcase
  posts={[
    {
      id: '1',
      image: 'url-to-image',
      caption: 'Custom caption',
      link: 'https://instagram.com/p/post-id',
      timestamp: '2 days ago'
    },
    // ... more posts
  ]}
/>
```

### Adjust Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#A88D6F',    // Change gold
  accent: '#D4AF8F',     // Change light gold
  background: '#F9F7F3', // Change background
}
```

---

## How It Displays

### On Desktop (3-column grid)
```
[Post 1]  [Post 2]  [Post 3]
[Post 4]  [Post 5]  [Post 6]
```

Each post on hover:
- Image zooms 10%
- Gold gradient overlay appears
- Instagram icon (center)
- Caption slides up from bottom

### On Tablet (2-column)
```
[Post 1]  [Post 2]
[Post 3]  [Post 4]
```

### On Mobile (1-column)
```
[Post 1]
[Post 2]
[Post 3]
```

---

## What Gets Fetched from Instagram

When API is connected, for each post:
- ✅ Image URL
- ✅ Caption text
- ✅ Post permalink
- ✅ Timestamp (formatted: "2 days ago")
- ✅ Like count
- ✅ Comment count

---

## Fallback / Placeholder Posts

If you don't set up the API, **9 beautiful placeholder posts** display automatically. They include:

1. "Bridal elegance in every stitch" - 2 days ago
2. "New arrival! Vintage-inspired saree" - 4 days ago
3. "How to drape a saree like a pro" - 1 week ago
4. "Behind the scenes: Master artisans" - 1 week ago
5. "Beautiful wedding moments" - 2 weeks ago
6. "Exquisite embroidery details" - 2 weeks ago
7. "Consultation booking now open" - 3 weeks ago
8. "Heritage meets modernity" - 3 weeks ago
9. "Customer spotlight" - 3 weeks ago

---

## Environment Variables

Create a `.env.local` file (not tracked by git):

```bash
# .env.local
VITE_INSTAGRAM_ACCESS_TOKEN=your_long_token_here
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
VITE_INSTAGRAM_DEBUG=false
```

**Never commit `.env.local`** - it's in `.gitignore`

See `.env.example` for template.

---

## API Endpoint Used

```
https://graph.instagram.com/{BUSINESS_ACCOUNT_ID}/media
```

**Fields fetched:**
```
id, caption, media_type, media_url, permalink, timestamp, like_count, comments_count
```

**Rate Limits:**
- 200 calls per hour (Instagram's limit)
- Caching recommended for production

---

## Troubleshooting

### Posts Not Showing?
1. Check browser console for errors
2. Verify token is valid: https://developers.facebook.com/tools/explorer/
3. Ensure account is a "Business Account" (not personal)
4. Check token has `instagram_basic` permission

### Placeholders Showing Instead?
- Credentials not configured → add to `.env.local`
- API call failed → check networks tab in DevTools
- Token expired → get new token from Graph Explorer

### Styling Issues?
- Clear Tailwind cache: `rm -rf node_modules/.cache`
- Restart dev server: `npm run dev`
- Check colors in `tailwind.config.js`

---

## Production Deployment

### Before Going Live

1. **Use Long-Lived Tokens** (not user tokens)
   - Generate from: https://developers.facebook.com/tools/explorer/
   - Lasts 60 days

2. **Set up Token Refresh** (optional)
   - Implement server-side token refresh
   - Or use Platform-as-a-Service like Vercel

3. **Add Error Boundaries**
   - Component gracefully falls back to placeholders
   - Already built-in ✅

4. **Optimize Images**
   - Instagram returns optimized URLs
   - Lazy loading enabled ✅

5. **Cache Responses** (recommended)
   - Fetch posts on build time (static)
   - Or cache via service worker

---

## File Structure

```
src/
├── components/
│   └── sections/
│       └── InstagramShowcase.tsx    (Main component)
├── services/
│   └── instagram.ts                 (API service + hook)
└── App.tsx                          (Instagram section added)

.env.local                           (Create manually)
.env.example                         (Template)
```

---

## Next Steps

### Option 1: Use Placeholders (Right Now)
- No setup needed
- Looks beautiful as-is
- Works immediately with `npm run dev`

### Option 2: Connect Real Instagram (5 mins)
- Follow Setup steps above
- Add `.env.local` variables
- Restart dev server
- Live posts now display

### Option 3: Embed Live Feed Widget
- Use Elfsight, Feedify, or Instagram's official embed
- Can be added to the "Latest From Our Feed" section
- Better for always-fresh content

---

## Code Examples

### How to Use the Hook (Advanced)

```tsx
import { useInstagramPosts } from '@/services/instagram';

export function MyComponent() {
  const { posts, loading, error } = useInstagramPosts(12);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <img key={post.id} src={post.image} alt={post.caption} />
      ))}
    </div>
  );
}
```

### How to Fetch Manually

```tsx
import { fetchInstagramPosts } from '@/services/instagram';

async function loadPosts() {
  const posts = await fetchInstagramPosts(12);
  console.log(posts);
}
```

---

## Royal/Luxury Aesthetic Details

The Instagram section matches Sharmistha's luxury brand:

✨ **Color Palette**
- Warm gold (#A88D6F) - Premium, regal
- Ivory background (#F9F7F3) - Elegant, clean
- Deep charcoal text (#3A3A3A) - Professional, readable
- Light gold accents (#D4AF8F) - Luxurious highlights

✨ **Typography**
- Font-weight: light (300) - Elegant, breathy
- Letter-spacing: wide (0.07em) - Premium feel
- Size progression: responsive, clean hierarchy

✨ **Animations**
- No jarring movements (300-600ms duration)
- Soft easing (Framer Motion defaults)
- Staggered reveals (luxury feels unhurried)
- Smooth hover states (premium interaction)

✨ **Layout**
- Generous spacing (gap-4 → gap-6)
- Centered, balanced
- Rounded corners (rounded-lg = 8px)
- Clean grid structure

---

## Support & Updates

- **Instagram Embed**: New endpoints can be added to `services/instagram.ts`
- **Styling**: Change Tailwind classes for different layouts
- **Components**: Reusable pattern, can create variants
- **API**: Compatible with Instagram Business Account API v18.0+

