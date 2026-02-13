# Instagram Integration - Quick Start Guide

## Immediate (Right Now)

### To See It Working in Development

```bash
npm run dev
```

**What you see:**
- Beautiful Instagram showcase section with 6 sample posts
- Hover effects, animations, all working
- "Follow on Instagram" button links to @sharmishthadesignerstudio
- Fully responsive (mobile, tablet, desktop)

**No setup needed.** Placeholder posts display beautifully.

---

## After 5 Minutes: Add Real Instagram Posts

### Minimal Setup Path

#### 1. Get Access Token (2 minutes)
- Go: https://developers.facebook.com/tools/explorer/
- Select your app from dropdown (or create a simple one)
- Click "Get User Access Token"
- Select these permissions:
  - ☑️ instagram_basic
  - ☑️ instagram_content_publishing (optional)
- Copy the token shown

#### 2. Get Your Account ID (1 minute)
- In same Graph API Explorer
- Use: `POST`
- URL: `/{BUSINESS_ACCOUNT_ID}/media`
- Or run: `GET /me/instagram_business_accounts` to find your ID

#### 3. Add to `.env.local` (1 minute)

Create file: `.env.local` in project root

```bash
VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
```

#### 4. Restart dev server

```bash
npm run dev
```

**Done!** Your real Instagram posts now display.

---

## What Gets Displayed

### When Setup ✅
- **Real posts** from @sharmishthadesignerstudio
- **Live counts:** Likes, comments, timestamp
- **Click posts** to open on Instagram directly

### When Not Setup
- **9 beautiful placeholder posts** auto-display
- Still shows all animations, hover effects
- Still links to Instagram profile
- No errors or console warnings

---

## Folder Structure

For your reference:

```
sharmistha-studio/
├── src/
│   ├── App.tsx                          (Instagram section added)
│   ├── components/
│   │   └── sections/
│   │       └── InstagramShowcase.tsx    (NEW - 250 lines)
│   └── services/
│       └── instagram.ts                 (NEW - 210 lines)
├── .env.example                         (Template)
├── .env.local                           (Create manually)
├── INSTAGRAM_INTEGRATION.md             (Full setup docs)
└── INSTAGRAM_VISUAL_REFERENCE.md        (Design specs)
```

---

## What Changed in Your Project

### 1. **App.tsx** - Added Instagram Section
```tsx
import InstagramShowcase from './components/sections/InstagramShowcase';

// Inside <main>:
<InstagramShowcase
  title="FOLLOW OUR JOURNEY"
  subtitle="@sharmishthadesignerstudio"
  igProfileUrl="https://www.instagram.com/sharmishthadesignerstudio"
/>
```

### 2. **New Component: InstagramShowcase.tsx**
- 250 lines of clean React + Tailwind
- Responsive grid layout (1/2/3 columns)
- Hover animations with Framer Motion
- Links to Instagram

### 3. **New Service: instagram.ts**
- 210 lines of API integration
- Fetches real posts from Instagram Graph API
- Falls back to placeholders if API not configured
- React hook `useInstagramPosts()` for advanced use

---

## Visual Preview (What You'll See)

### Desktop
```
3-column grid of square Instagram posts
Hover any post: image zooms, gold overlay, caption appears
Click: opens post on Instagram in new tab

Below grid:
[📷 FOLLOW ON INSTAGRAM BUTTON] | Info text
```

### Mobile
```
1-column stacked posts
All animations work on tap
Button stretches full width
```

### Colors
- Title: Gold (#A88D6F)
- Background: Warm ivory (#F9F7F3)
- Overlays: Gold gradients
- Text: Deep charcoal (#3A3A3A)

---

## Customization (Easy)

### Change Title
In `App.tsx`:
```jsx
<InstagramShowcase
  title="OUR LATEST DESIGNS"  ← Change this
  subtitle="@sharmishthadesignerstudio"
/>
```

### Change Grid Columns (4 instead of 3)
In `InstagramShowcase.tsx`, line 149:
```jsx
// Currently:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Change to:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
```

### Change Number of Posts Displayed
In `App.tsx`, the component uses default 6 posts (can be customized):
```jsx
posts={posts.slice(0, 9)}  // Show 9 instead
```

### Use Custom Posts (No API needed)
```jsx
<InstagramShowcase
  posts={[
    {
      id: '1',
      image: 'your-image-url.jpg',
      caption: 'Your caption here',
      link: 'https://instagram.com/p/post-id',
      timestamp: '1 day ago'
    },
    // ... more posts
  ]}
/>
```

---

## Testing

### Check It's Working

```bash
# Start dev server
npm run dev

# Open http://localhost:5173
# Scroll to "FOLLOW OUR JOURNEY" section
# Hover over posts (desktop) → should zoom & overlay
# Click post → opens Instagram
# Click "FOLLOW ON INSTAGRAM" → links to profile
```

### Check Mobile
```bash
# Same dev server running
# Open on phone: http://[your-ip]:5173
# Test responsive grid, tap interactions
```

### TypeScript Check
```bash
# Verify no errors
npm run build
```

---

## Environment Variables Explained

### `.env.local` (Create this)
```bash
# Your Instagram Business Account Access Token
VITE_INSTAGRAM_ACCESS_TOKEN=abc123def456...

# Your Instagram Business Account ID
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=123456789
```

### `.env.example` (Reference only)
Shows what variables are available. Create your own `.env.local`.

### Why Use `.env.local`?
- Never pushed to Git (secure)
- Local development only
- Build time configuration via Vite

---

## Troubleshooting

**"I see placeholder posts, not real ones"**
→ Check `.env.local` is created with correct tokens
→ Verify `VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID` (not personal)
→ Check token is valid: https://developers.facebook.com/tools/explorer/

**"Nothing shows at all"**
→ Restart dev server after adding `.env.local`
→ Check browser console for errors
→ Verify npm packages installed: `npm list framer-motion`

**"Hover effects not working"**
→ You're on mobile (tap instead of hover)
→ Or browser doesn't support Framer Motion (try Chrome)

**"Button links to wrong Instagram"**
→ Edit `igProfileUrl` prop in `App.tsx`

---

## Next Steps

### Path 1: Use As-Is
✅ Works immediately
✅ Looks beautiful
✅ No setup needed
→ Just run `npm run dev`

### Path 2: Connect Real Instagram (5 mins)
✅ Follow the 4 steps above
✅ Uses your real posts
✅ Always fresh content
→ Recommended for production

### Path 3: Advanced Customization
✅ Modify hover effects
✅ Change grid layout
✅ Custom animations
→ Edit component files directly

### Path 4: Deployment
✅ Add tokens to hosting platform env vars
✅ Build & deploy normally
→ Ask me for deployment-specific setup

---

## Code References

If you want to dive deeper:

- **Main Component:** `src/components/sections/InstagramShowcase.tsx` (250 lines)
- **API Service:** `src/services/instagram.ts` (210 lines)
- **Integration:** `src/App.tsx` (lines 7, 82-86)
- **Docs:**
  - `INSTAGRAM_INTEGRATION.md` (Complete guide)
  - `INSTAGRAM_VISUAL_REFERENCE.md` (Design specs)

---

## Support

### Questions About Setup?
Refer to: `INSTAGRAM_INTEGRATION.md`

### Want to Change Styling?
Refer to: `INSTAGRAM_VISUAL_REFERENCE.md`

### Need to Modify Component?
Edit: `src/components/sections/InstagramShowcase.tsx`

### Need to Change API Logic?
Edit: `src/services/instagram.ts`

---

## Summary

✅ **Done:** Instagram showcase is fully built, styled, and animated
✅ **Works:** Beautiful with placeholder posts right now
✅ **Optional:** Connect real Instagram feed in 5 minutes
✅ **Responsive:** Mobile, tablet, desktop all working
✅ **Royal Aesthetic:** Matches luxury brand colors & animations

### Ready?

```bash
npm run dev
# Scroll to "FOLLOW OUR JOURNEY" section
# Hover posts, click to Instagram
# Enjoy! 🚀
```

