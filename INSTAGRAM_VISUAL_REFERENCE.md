# Instagram Showcase - Visual & Technical Reference

## Section Overview

### Page Position
```
NAVBAR (Fixed)
↓
HERO (Full-screen carousel)
↓
SEARCH SECTION
↓
EDITORIAL 1 (Image Left + Text)
↓
EDITORIAL 2 (Image Right + Text)
↓
TESTIMONIALS (Grid cards)
↓
★ INSTAGRAM SHOWCASE ★ ← YOU ARE HERE
↓
CONSULTATION (Booking form)
↓
FOOTER
```

---

## Visual Layout

### Desktop (1280px+)

```
┌─────────────────────────────────────────┐
│         FOLLOW OUR JOURNEY              │
│    📷 @sharmishthadesignerstudio       │
└─────────────────────────────────────────┘

┌──────┐  ┌──────┐  ┌──────┐
│Post 1│  │Post 2│  │Post 3│
│      │  │      │  │      │
└──────┘  └──────┘  └──────┘

┌──────┐  ┌──────┐  ┌──────┐
│Post 4│  │Post 5│  │Post 6│
│      │  │      │  │      │
└──────┘  └──────┘  └──────┘

    [FOLLOW ON INSTAGRAM] | [Text CTA]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   Latest From Our Feed
   [Visit Our Instagram Profile →]
```

### Tablet (768px - 1279px)

```
┌─────────────────────────┐
│  FOLLOW OUR JOURNEY     │
│ 📷 @sharmistha...      │
└─────────────────────────┘

┌──────────┐  ┌──────────┐
│  Post 1  │  │  Post 2  │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│  Post 3  │  │  Post 4  │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│  Post 5  │  │  Post 6  │
└──────────┘  └──────────┘

  [FOLLOW ON INSTAGRAM]
```

### Mobile (< 768px)

```
┌───────────────────┐
│ FOLLOW OUR JOURNEY│
│📷 @sharmistha... │
└───────────────────┘

┌───────────────────┐
│     Post 1        │
│                   │
└───────────────────┘

┌───────────────────┐
│     Post 2        │
│                   │
└───────────────────┘

┌───────────────────┐
│     Post 3        │
│                   │
└───────────────────┘

[FOLLOW ON INSTAGRAM]
```

---

## Hover Interaction (Desktop Only)

### Before Hover
```
┌─────────────────┐
│                 │
│  [Post Image]   │  Just a clean image
│                 │
│  Post Caption   │  Caption text visible
│  (small, below) │
└─────────────────┘
```

### On Hover
```
┌─────────────────┐
│  [Gradient Overlay - Gold to Transparent]
│      📷          │  Instagram icon appears
│   VIEW ON IG     │
│                  │
│                  │
│ ═══════════════  │  Caption slides up
│ Post Caption     │
│ 2 days ago       │  Timestamp visible
└─────────────────┘ with side badge
                    showing Instagram icon
```

**Effects:**
- Image zooms 10% (scale: 1 → 1.1)
- Gradient overlay fades in (0 → 0.8 opacity)
- Caption slides up from bottom
- Corner badge appears
- Smooth 300ms transition

---

## Color Specifications

| Element | Hex Code | Usage |
|---------|----------|-------|
| Primary (Gold) | #A88D6F | Titles, accents, hover states |
| Accent (Light Gold) | #D4AF8F | Secondary accents, buttons |
| Background (Ivory) | #F9F7F3 | Main background |
| Surface (Beige) | #F5F1E8 | Section dividers |
| Text (Charcoal) | #3A3A3A | All text |
| Text Light | #3A3A3A/70% | Secondary text |
| Overlay (Black) | #000000 | Gradients on images |
| White | #FFFFFF | CTA buttons, icon overlays |

---

## Typography Scale

| Element | Font Size | Weight | Letter Spacing | Line Height |
|---------|-----------|--------|-----------------|-------------|
| Main Title | 2.4rem - 3.2rem | 300 (light) | 0.1em | 1.2 |
| Subtitle | 1.6rem - 1.8rem | 300 (light) | 0.07em | 1.4 |
| Caption | 0.875rem - 1rem | 300 (light) | 0.05em | 1.5 |
| Timestamp | 0.75rem | 300 (light) | 0.05em | 1.5 |

**Font Family:**
- Sans: Lato (body, captions)
- Serif: Playfair Display (titles, display)

---

## Animation Timing

| Animation | Duration | Delay | Easing |
|-----------|----------|-------|--------|
| Container fade-in | 600ms | 200ms | ease-out |
| Post stagger | 600ms | 100ms between | ease-out |
| Post lift on hover | 300ms | n/a | ease-out |
| Image zoom | 500ms | on hover | ease-out |
| Overlay fade | 300ms | on hover | ease-out |
| Caption slide | 300ms | on hover | ease-out |
| Badge fade | 300ms | on hover | ease-out |

---

## Responsive Breakpoints

```
Mobile:  < 768px   (grid-cols-1)
Tablet:  768px+    (md:grid-cols-2)
Desktop: 1024px+   (lg:grid-cols-3)
```

### Classes Used
```scss
// Grid
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6

// Spacing
py-20 md:py-24 px-4 max-w-7xl mx-auto

// Image containers
aspect-square rounded-lg overflow-hidden

// Text sizing
text-2xl md:text-3xl (subtitles)
text-sm md:text-base (captions)
```

---

## State Management

### Component State
```tsx
// No useState needed - all animations via Framer Motion
// Posts passed as props or fetched from API

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

### Props Flow
```
App.tsx
  ↓
InstagramShowcase.tsx
  ├── title
  ├── subtitle
  ├── igProfileUrl
  └── posts (array of InstagramPost)
```

---

## Shadow & Depth

### Box Shadow Classes
```
md:shadow-sm        (card hover)
hover:shadow-md     (on follow button)
```

### Actual Shadow Values
```css
/* sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05) */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

/* On hover: slightly more elevation */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
```

---

## Button Styling

### Follow Button
```
Layout:    Flex with gap
Background: Gradient from primary → accent
Text:      White, light weight, tracking-wider
Padding:   px-8 md:px-12 py-4 md:py-5
Hover:     shadow-lg, slight scale up
Transition: 300ms all
Icon:      Instagram icon (20px)
```

### "Learn More" / "Read More" Links
```
Color:     Primary (#A88D6F)
Hover:     Accent color
Underline: Visible
Transition: 200ms color
```

---

## Accessibility

✅ **Implemented:**
- Semantic HTML (section, div, a, img)
- Alt text on images
- ARIA labels on buttons
- Keyboard accessible links
- Focus states (via Tailwind)
- Sufficient color contrast

✅ **Mobile Touch Targets:**
- Minimum 44px × 44px
- Posts are full width on mobile
- Button also 44px+ height

✅ **Screen Reader:**
- Image alt text
- Link text is descriptive
- Icon + text combo for buttons

---

## Performance Optimizations

✅ **Already Implemented:**
- Image lazy loading (`loading="lazy"`)
- Optimized Unsplash URLs (width specified)
- Framer Motion optimized (GPU acceleration)
- CSS classes don't bloat (Tailwind)
- No unnecessary re-renders (no useState in showcase)

✅ **Further Optimizations (if needed):**
- Image preloading for hover state
- Intersection Observer for lazy-load posts
- Service Worker caching
- Static site generation (SSG) for build-time fetch

---

## CSS Grid Details

### Desktop Grid (lg:grid-cols-3)
```
┌──────────────┬──────────────┬──────────────┐
│   Column 1   │   Column 2   │   Column 3   │
│   (1fr)      │   (1fr)      │   (1fr)      │
├──────────────┼──────────────┼──────────────┤
│   Column 1   │   Column 2   │   Column 3   │
└──────────────┴──────────────┴──────────────┘

Gap: 1.5rem (24px) on desktop, 1rem (16px) on tablet
```

---

## Z-Index Layering

| Layer | Z-Index | Element |
|-------|---------|---------|
| Background | 0 | Image |
| Overlay | 10 | Gradient overlay |
| Content | 20 | Icon + Caption |
| Badge | 25 | Corner Instagram badge |

---

## Interaction States

### Post Card States
```
Default:   Normal opacity, no overlay
Hover:     Scaled up, overlay visible, caption shown
Active/Tap: Same as hover (mobile)
Disabled:   N/A (all are clickable)
```

### Button States
```
Default:   Gradient background
Hover:    Enhanced shadow, text stays same
Active:    Slight scale down (0.98)
Focus:     Outline visible (keyboard nav)
```

---

## Real vs Placeholder Posts

### Real (API Connected)
```
{
  id: "17970..." (from Instagram)
  image: "cdn.instagram.com/...",
  caption: "Actual post caption",
  link: "instagram.com/p/ABC...",
  timestamp: "2 days ago" (formatted),
  likes: 324,
  comments: 28
}
```

### Placeholder (Fallback)
```
{
  id: "1",
  image: "unsplash.com/...",
  caption: "Bridal elegance...",
  link: "instagram.com/sharmishthadesignerstudio",
  timestamp: "2 days ago",
  likes: 324,
  comments: 28
}
```

Both render identically - seamless fallback.

---

## Browser Support

✅ Fully Supported:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+

⚠️ Degraded experience (no animations):
- IE 11 (no Framer Motion)
- Old browsers (use fallback posts)

---

## Content Guidelines

### Image Specifications
- **Aspect Ratio:** Square (1:1) required
- **Minimum Size:** 400×400px
- **Optimal Size:** 600×600px
- **Format:** JPG, PNG
- **Theme:** Bridal, sarees, design process, customer moments

### Caption Length
- **Ideal:** 50-100 characters (fits in overlay)
- **Maximum:** 200 characters (will truncate gracefully)
- **Format:** Elegant, brand voice

### Posting Frequency
- **Recommended:** 3-5 posts per week
- **Content Mix:**
  - 50% Final designs/products
  - 30% Behind-the-scenes
  - 20% Customer features/events

