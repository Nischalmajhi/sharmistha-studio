# Sharmistha Designer Studio - Structural Replication Plan

## Analysis Complete ✅

I've analyzed the Gradwear.ca website structure and DOM hierarchy. Below is the **exact section order and structure** you'll be getting.

---

## Section Hierarchy (In Exact Order)

### 1. **Header** - Fixed Navigation
- Logo (Sharmistha SVG)
- Search control
- Cart icon
- User/Login control
- Mobile hamburger menu
- **Tech:** Fixed positioning, collapse animations, icon controls

### 2. **Hero Section** (fullheight-section)
**Copy:** "WE ARE PROUDLY CANADIAN" → "SHARMISTHA DESIGN STUDIO"
- **Header:** Split heading with outline text effect
- **Carousel:** Offset carousel with 3+ product images (sliding parallax)
- **CTA:** "Find your school" → "Explore Collections"
- **Social Links:** Facebook, Instagram, Twitter
- **Logo Badge:** Rounded logo on right (desktop only)
- **Tech:**
  - Parallax carousel offset effect
  - Fullheight container
  - Outline heading typography
  - Image parallax scaling
  - Smooth scroll to next section

### 3. **Search Section** (fullheight-section)
**Copy:** "FIND YOUR SCHOOL" → "EXPLORE COLLECTIONS"
- **Decorated Title** with animated underline (SVG)
- **Search Form:** Text input + button
- **Fallback Link:** "Can't find your school?"
- **Tech:**
  - Parallax vertical move (vmove) with speed values
  - SVG decoration animation (draw effect)
  - Form styling with Tailwind

### 4. **Editorial Section 1 - Image Left** (fullheight-section)
**Layout:** Image (left) + Text (right)
- **Heading:** "SOME THINGS SHOULD LAST A LIFETIME"
- **Subheading:** Description copy
- **Image:** Skewed parallax image (605x720)
- **Tech:**
  - Image media with skew effect (`image-media--top-right-skew`)
  - Parallax scale on image
  - Responsive grid (md/xl breakpoints)

### 5. **Editorial Section 2 - Image Right** (fullheight-section, reversed)
**Layout:** Text (left) + Image (right)
- **Heading:** "ICONIC CUSTOM DESIGNS ON PREMIUM APPAREL"
- **Subheading:** Description copy
- **Image:** Skewed parallax image (605x720)
- **Tech:**
  - Reversed layout class
  - Image media with different skew (`image-media--bottom-right-skew`)
  - Same parallax effects

### 6. **Testimonials Section** (fullheight-section)
**Copy:** "ROCKING THEIR GRADWEAR" → appropriate Sharmistha equivalent
- **Grid Layout:** Horizontal scrolling media grid
  - Image card (1x1 aspect ratio)
  - Testimonial card with avatar
- **Card Structure:**
  - Avatar image (circular, 180x180)
  - Name + Location/details
  - Testimonial text (truncated, expandable)
  - Optional modal expansion
- **Grid Parallax:** Individual column animations
- **Tech:**
  - Horizontal scrolling grid
  - Media grid with staggered parallax
  - Card component with avatar
  - Text truncation utility
  - Data attributes: `data-animate-from="lg"`

### 7. **Consultation/CTA Section** (from existing component)
- Booking or consultation call-to-action
- Schedule appointment button
- **Tech:** Standard form integration

### 8. **Footer**
- Social links (FB, IG, TW)
- Navigation links
- Copyright info
- **Tech:** Standard footer layout

---

## Key Technical Features

### Parallax System
- `data-parallax="vmove"` - Vertical movement
- `data-parallax="draw"` - SVG animation
- `data-parallax="scale"` - Image zoom
- `data-speed="-0.05"` - Configurable speed

### Responsive Breakpoints
- `d-lg-none` / `d-none d-lg-flex` - Desktop/Mobile toggling
- `col-md-*` / `col-xl-*` - Grid columns

### Animations
- Smooth scroll anchors (`data-smooth-scroll`)
- Parallax on scroll (via Lenis + Framer Motion)
- SVG line draw animations
- Staggered element reveals

### Container & Spacing
- `.container` - Max-width container
- `.fullheight-section` - Full viewport height
- Padding values: classes like `py-45 py-lg-60`
- Margin classes: `mb-20 mb-lg-0_5`

---

## Branding Replacement

### Text Changes
| Gradwear | Sharmistha |
|----------|-----------|
| "WE ARE PROUDLY CANADIAN" | "SHARMISTHA COLLECTION" (or similar) |
| "FIND YOUR SCHOOL" | "EXPLORE DESIGNS" |
| "SOME THINGS SHOULD LAST A LIFETIME" | "Heritage Meets Haute Couture" |
| "ICONIC CUSTOM DESIGNS ON PREMIUM APPAREL" | "Curated Indian Luxury Fashion" |
| "ROCKING THEIR GRADWEAR" | "Our Clientele" or "Bridal Moments" |

### Color Palette
- **Primary:** Warm ivory (#F5F1E8 or similar)
- **Accent:** Muted gold (#C4A876 or similar)
- **Text:** Dark brown (#2C2C2C)
- **Background:** Off-white

### Images
- Replace product photos with bridal/saree editorial images
- Keep same dimensions (605x720 for editorial, 1x1 for grid)
- Place high-quality editorial shots

---

## Component Architecture

```
src/
├── components/
│   ├── Navbar.tsx (edit: existing)
│   ├── Header.tsx (edit: existing)
│   ├── Hero.tsx (BUILD)
│   ├── SearchSection.tsx (BUILD)
│   ├── EditorialSection.tsx (BUILD - reusable)
│   ├── TestimonialSection.tsx (BUILD)
│   ├── Consultation.tsx (edit: existing)
│   ├── Footer.tsx (edit: existing)
│   └── shared/
│       ├── HeadingDecorated.tsx (NEW)
│       ├── ImageMedia.tsx (NEW)
│       ├── ParallaxImage.tsx (NEW)
│       └── MediaGrid.tsx (NEW)
├── sections/
│   ├── Hero/
│   ├── Search/
│   ├── Editorial/
│   └── Testimonials/
├── hooks/
│   └── useParallax.ts (NEW)
├── App.tsx (edit: update imports)
└── main.tsx
```

---

## Build Order (Incremental)

1. ✅ **Structure analyzed**
2. **Empty component scaffolds** - Create all component files
3. **Hero section** - Parallax carousel + heading
4. **Search section** - Form + decorative elements
5. **Editorial sections** - Image-text layout (reusable)
6. **Testimonials** - Grid + cards
7. **Polish & animations** - Refine timing, easing, responsiveness
8. **Test & optimize** - Performance, mobile, animations

---

## Key CSS Classes to Implement

- `.fullheight-section` - Full viewport height containers
- `.image-media--top-right-skew` - Image skew effect (CSS transform)
- `.heading-decorated` - Title with SVG underline
- `.outline-heading` - Text with outline stroke effect
- `.media-grid` - Horizontal scroll grid
- `.card` - Testimonial card style
- `.embed-responsive` - Aspect ratio container

---

## Next Steps

1. Review this plan
2. I'll create component scaffolds
3. Build Hero section first
4. Proceed section-by-section

Ready to start? Say **"Build it"** and I'll begin with empty components.

