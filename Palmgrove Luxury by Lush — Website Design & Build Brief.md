# Palmgrove Luxury by Lush — Website Design & Build Brief

Version 1.0 · 26 October 2026 · Prepared for the build agent

This document describes how the Palmgrove Luxury by Lush website should look, feel and behave. It is based on two photographs of the property (a bedroom interior and the night-time exterior and garden) and on the client's own Facebook announcement. Where a fact is not known, it is marked **\[CLIENT TO CONFIRM\]**. Do not invent prices, capacities, amenities, room names or reviews.

## 1. The brand in one paragraph

Palmgrove Luxury by Lush offers luxury short-stay apartments and a private garden venue in Makurdi, Benue State. The promise is a quiet, private retreat with thoughtful attention, where guests can also celebrate weddings, birthdays, bridal showers and intimate gatherings and stay on the same property. The client's own tagline is **"Beautiful Short Stays. Unforgettable Celebrations."** The website must feel warm, calm, unhurried and quietly expensive. It should never feel loud, crowded or like a template.

**Known facts (from the client's post):**

- Name: PALMGROVE LUXURY BY LUSH (wordmark: PALMGROVE large, "LUXURY BY LUSH" small beneath it)
- Address: No. 8 Jerry Agber Street, Bem Hotel Road, Makurdi, Benue State
- Call or WhatsApp: 09138833322 and 08069643439
- Services: luxury short-stay apartments; garden venue for weddings, birthdays, bridal showers and intimate gatherings
- Audience: couples (romantic escape), business travellers, people who need a break, and families or hosts planning a celebration

## 2. What our analysed photographs tell us (more images in /images directory, consider the sizes/dimensions as you build, so it aligns with layouts on mobile and desktop)

### Image 1 — the bedroom (portrait, Instagram-story crop)

- **Colour story:** warm ivory and cream walls and glossy white porcelain floor, a walnut wood-veneer headboard wall, and mustard-gold accents (satin cushions, bed runner, mirror frame, chair, backlit gold textured wall in the en-suite entrance).
- **Light:** very warm, amber, layered. A large woven globe pendant glows like a lantern, with smaller glass globe pendants on thin black lines beside the bed. A recessed tray ceiling with a fine dark inlay line adds precision.
- **Shapes:** a sculptural white wave or ribbon flowing across the headboard, thin vertical inlay lines in the wood panels, a rounded rectangular mirror, and a circular pendant. The mood is soft curves against clean vertical lines.
- **Feeling:** intimate, glamorous, modern, romantic. It reads as boutique-hotel luxury.
- **Problems to solve:** the photo has a baked-in text overlay ("Palmgrove Luxury by LUSH") and is a low-resolution story crop. Clean, high-resolution originals are required (see section 12).

### Image 2 — exterior and garden at night (landscape)

- **Colour story:** deep navy-black night sky, glowing warm-white LED lines under the upper balcony canopy, a mustard-yellow band beneath the balcony, cream plaster with dark brick and black slat (louvre) railings.
- **Landscape:** lush tropical planting (banana leaves, canna lilies with yellow flowers, young palms), climbing plants on poles, a large manicured lawn, uplit plants along a boundary wall, and tall solar lights.
- **Feeling:** a private resort in the middle of the city. The big lawn explains why it works as a wedding and event venue.
- **Problems to solve:** a parked car is visible at left and coiled wire sits on top of the perimeter wall at right. For hero and featured use, choose an angle that excludes both, or retouch them out. Shoot more of this scene at blue hour (just after sunset) for the best colour.

### The design idea that results

**Warm light in the dark.** Both photos glow: gold light against deep navy and walnut. The website should do the same, using ivory pages for reading and deep navy pages (especially the gallery) so the lit interiors and garden shine. Gold is a jewel, used sparingly.

## 3. Colour palette

The values below are starting points. Sample and adjust them from the final photographs.

- **Night Navy (primary dark):** #0C1220. Hero overlays, gallery background, footer.
- **Ivory (primary light):** #F6F0E4. Main page background.
- **Warm White:** #FFFDF8. Cards and form fields on ivory.
- **Mustard Gold (accent):** #C99A2E. Hairlines, icons, buttons on dark, large headings only.
- **Deep Gold (hover):** #A87E1F. Button hover and pressed states.
- **Soft Gold (glow):** #E6C76A. Small glows and highlights on dark backgrounds.
- **Walnut:** #6E4B33. Secondary headings and subtle section backgrounds.
- **Palm Green:** #2E5A3C, with a deeper tone of #1E3D2A. Garden section accents and small botanical details.
- **Stone Taupe:** #8D7F72. Captions and muted text.
- **Charcoal (body text on ivory):** #1F1B16.

**Rules:**

- Body text is charcoal on ivory, or ivory on navy.
- Gold on ivory does not meet contrast for small text. Use gold only for lines, icons and large type on ivory. Gold text on navy is fine.
- No bright blues, no neon, no gradients across the whole page. A soft gold glow behind a lamp-like circle is acceptable.
- Maintain at least WCAG AA contrast for all text.

## 4. Typography

- **Display and headings:** Cormorant Garamond (weights 300 to 500, with italics for emphasis). Elegant and slightly romantic.
- **Body and interface:** Jost (weights 300 to 500). Clean, geometric, easy to read on phones.
- **Labels, navigation, buttons:** Jost uppercase, letter-spacing about 0.18em, small size (12 to 13 px).
- **Sizes:** H1 clamp(2.6rem, 6vw, 5.5rem); H2 clamp(2rem, 4vw, 3.5rem); body 17 to 18 px with line-height 1.7.
- Use italic Cormorant for one or two emotional words in a heading (for example, "Beautiful short _stays_.").
- Load fonts from Google Fonts with a serif and a sans-serif fallback stack, and use font-display: swap.
- **Wordmark:** PALMGROVE in widely spaced serif capitals, with LUXURY BY LUSH in small spaced sans-serif capitals beneath. Use the client's logo if they have one; otherwise this text wordmark is the placeholder.

## 5. Visual motifs taken from the photos

These give the site a look that belongs only to Palmgrove.

1. **The wave line.** The white ribbon across the headboard becomes a thin flowing SVG line in gold, used as a section divider and as an animated line that draws itself as the user scrolls.
2. **The lantern circle.** The round woven pendant becomes circular image masks, round buttons and a soft amber glow (radial gradient, low opacity) behind key headings on dark sections.
3. **Vertical inlay lines.** The thin dark lines in the wooden wall become thin vertical hairlines used as dividers between columns and in the footer.
4. **Louvre texture.** The black slat railings become a very faint horizontal line pattern, at about 4% opacity, behind some dark sections.
5. **Leaf shadows.** Banana-leaf and canna-leaf silhouettes at very low opacity over the garden and celebration sections. Keep them subtle and never place them over text.

## 6. Photography and video direction

- **Look:** warm, natural, true to the photographs. Do not apply heavy filters, over-saturation or faux-HDR. Keep the mustard gold natural and not orange.
- **Hero:** a short muted looping video (8 to 15 seconds) of slow, steady movement: the garden at blue hour, then the balcony lights, then a slow push-in on the bedroom pendant. If no video is ready at launch, use the night exterior photo with a very slow zoom (scale 1.0 to 1.06 over 20 seconds).
- **Overlay on hero:** a gradient from transparent at the top to about 55% navy at the bottom so text stays readable.
- **Cropping:** keep the portrait and landscape originals. Never force everything into squares.
- **Alt text:** every image needs descriptive alt text. Examples: "Bedroom at Palmgrove Luxury with a walnut-panelled headboard, gold cushions and a glowing woven pendant lamp"; "Palmgrove Luxury apartments and garden lawn at night in Makurdi".

## 7. Layout, spacing and motion

- **Mobile first.** Most visitors will arrive from phones, often on mobile data. Design at 390 px wide first, then tablet (768 px) and desktop (1280 px and up).
- **Spacing:** generous. Section padding of 96 to 160 px on desktop and 64 to 88 px on mobile. Maximum text width about 640 px. Let the photography breathe.
- **Corners:** square or very slightly rounded (2 to 4 px) for images. Fully round only for the lantern-circle motif and small icon buttons.
- **Lines:** 1 px gold hairlines for dividers and button borders.
- **Motion philosophy:** slow and unhurried, like the "no rush to go anywhere" feeling in the client's post.
  - Scroll reveals: fade up by 24 px over 800 ms.
  - Easing: cubic-bezier(0.22, 0.61, 0.36, 1).
  - Hover transitions: 400 to 600 ms. Image zoom: 1.0 to 1.04 over 1200 ms.
  - Parallax: very subtle (about 6% offset) on large images only.
  - Honour prefers-reduced-motion by switching off parallax, zoom and auto-advance.
- **Do not use:** pop-ups, auto-playing audio, spinning carousels, cookie banners (unless analytics require one), chat widgets that cover content, or stock photos of other places.

## 8. Site structure

A small, elegant multi-page site (or a single page with anchor sections plus a separate Gallery page):

1. Home
2. Stay (the apartments)
3. Celebrate (the garden venue)
4. Gallery
5. Contact

### Navigation

- Desktop: wordmark left, links centred (Stay, Celebrate, Gallery, Contact), and a gold-outline button on the right: **Book on WhatsApp**.
- At the top of the home page the header is transparent over the hero. After scrolling about 80 px it becomes solid navy (or ivory on light pages) with a soft shadow.
- Mobile: wordmark left and a menu icon right, opening a full-screen navy overlay with large serif links. A **sticky bottom bar** on phones holds two buttons: **WhatsApp** and **Call**.

## 9. Home page, section by section

1. **Hero (full viewport, 100svh).** Looping video or slowly zooming night photo. Small gold label above: "MAKURDI · BENUE STATE". Headline: **Beautiful short stays. Unforgettable celebrations.** Sub-line: "Luxury short-stay apartments and a garden venue, in the quiet of Makurdi." Two buttons: **Book a Stay** (solid gold on navy) and **Plan a Celebration** (outline). A thin "scroll" line animates at the bottom centre.
2. **Opening statement (ivory).** A centred, large serif paragraph adapted from the client's post: "Put your phone on silent. A cosy couch, a cup of tea, a beautiful garden view — and no rush to go anywhere." Below it, a small wave-line divider.
3. **Two paths.** Two large side-by-side cards on desktop (stacked on mobile). Left: **Stay**, using the bedroom image with the line "Private apartments for romantic escapes, business trips and well-deserved breaks." Right: **Celebrate**, using the garden image with the line "A garden venue for weddings, birthdays, bridal showers and intimate gatherings." Each has an arrow link. On hover, the image zooms slowly and the gold hairline border appears.
4. **The apartments (feature).** One large photo beside text. Short paragraph about comfort and thoughtful attention. An amenities row with thin-line gold icons. Amenities must come from the client: **\[CLIENT TO CONFIRM\]**. Button: "See the apartments".
5. **The garden (full-bleed, navy).** A full-width night garden image, text overlaid at the left. Headline: "Celebrate and stay in the same place." List the event types from the client's post. Capacity and packages: **\[CLIENT TO CONFIRM\]**. Button: "Enquire about your event".
6. **Gallery preview.** An asymmetric collage of five photographs (a mix of portrait and landscape) with the link "View the full gallery".
7. **"What would you come for first?"** (taken from the client's closing question). Three large chips: _A quiet weekend_, _A romantic stay_, _A celebration_. Each opens WhatsApp with a pre-filled message (see section 11).
8. **Guest words.** Only show real guest reviews with permission. If there are none yet, leave this section out. Never fabricate testimonials.
9. **Find us.** Address, an embedded or linked Google Map, both phone numbers, and a WhatsApp button. Check-in and check-out times and any house rules: **\[CLIENT TO CONFIRM\]**.
10. **Footer (navy).** Wordmark, short tagline, navigation links, address, phone numbers, social links **\[CLIENT TO CONFIRM\]**, and a thin gold line. Credit line for the builder is optional.

## 10. The Gallery (in detail)

The gallery is the most important page, because guests and couples choose on photographs. It must feel like walking through the property.

### 10.1 Page theme and header

- Use the **Night Navy background** for the whole page. The photographs are warm and lit, so they glow against navy.
- Header block: small gold label "GALLERY", a large serif title "Moments at Palmgrove", and one line of text such as "Quiet rooms, a lantern-lit garden, and the details between."
- Directly below sits a **filter bar**: All · Apartments · Garden & Venue · Night · Details · Celebrations. Show "Celebrations" only when there are real event photographs. Filters are small uppercase text. The active filter has a gold underline. Switching filters fades and re-flows the grid (400 ms), without a page reload.

### 10.2 The grid

- **Desktop:** a masonry layout with 3 columns and a 20 px gap. **Tablet:** 2 columns. **Phone:** 1 column, full width with a 12 px gap. One large image per screen feels luxurious and avoids clutter.
- Every tile keeps the image's **real aspect ratio**, so portrait photographs such as the bedroom stay portrait and landscape photographs such as the garden stay landscape. Limit portrait height to 85% of the screen height.
- **Featured tiles:** roughly every seventh image (a strong landscape, such as the night exterior) spans two columns on desktop for rhythm.
- Order images to alternate between interior and exterior, and between wide and tall, so neighbouring tiles contrast.
- No borders or drop shadows. Images sit directly on the navy.

### 10.3 Hover and tile details (desktop)

- The image slowly scales from 1.0 to 1.04 over 1.2 seconds.
- A 1 px soft-gold hairline fades in around the tile.
- A caption slides up at the bottom left over a faint dark gradient: the title in italic serif (for example, "The Gold Room", **\[CLIENT TO CONFIRM names\]**) and the category in small gold capitals.
- The cursor becomes a small gold circle labelled **View**.
- On touch devices there is no hover. Show the caption below the image in small text, or reveal it on tap.

### 10.4 The lightbox (full-screen viewer)

- Clicking or tapping a tile opens a full-screen viewer on a 97% navy backdrop. The image is centred with object-fit: contain and sized to at most 92% of the screen height.
- **Controls:** a close button at the top right; previous and next arrows at the sides (on desktop); a counter at the bottom right ("03 / 24"); a caption at the bottom left.
- **Input:** keyboard (left and right arrows, Esc to close); swipe on touch; pinch or double-tap to zoom on mobile.
- **Preload** the next and previous images so movement feels instant.
- **Deep links:** each photo has a URL hash (for example #photo-3) so a specific image can be shared on WhatsApp.
- **Enquire button:** for apartment photos, show a small outline button **Ask about this space**. It opens WhatsApp with a pre-filled message naming the image's caption.
- An optional thumbnail strip along the bottom on desktop, with the current image outlined in gold.

### 10.5 Cinematic tour mode

- A button in the gallery header: **Watch the tour** (play icon inside a gold circle).
- It opens full-screen and plays the photographs as a slideshow: each image shows for about 6 seconds with a slow Ken Burns zoom (1.0 to 1.06), then crossfades over 1.2 seconds. A thin gold progress line runs along the bottom. A pause button and an exit button stay visible; Esc exits.
- The same mode is where ambient audio can be added later (section 13).
- Respect prefers-reduced-motion: show a static slideshow with manual next and previous.

### 10.6 Video tiles

- Short cinematic clips can sit in the grid alongside photographs, marked with a small gold play icon in the corner.
- On desktop hover, play a muted 3-second preview; on mobile, show the poster frame. Clicking opens the clip in the lightbox with full controls (sound only on user action).
- Vertical reels (9:16) are welcome and should keep their vertical shape.

### 10.7 Loading and performance

- Lazy-load all images below the fold, and show a blurred, low-quality placeholder (or the image's dominant colour) that fades into the sharp image.
- Tiles fade in with a short stagger (about 80 ms) as they enter the screen.
- Export each photograph in several widths (480, 800, 1200, 1800 and 2400 px) as AVIF and WebP with a JPEG fallback, using srcset and sizes.
- Reserve each tile's space using its aspect ratio to avoid layout jumps.

### 10.8 Gallery categories and starter captions

- **Apartments:** bedroom, lounge, kitchen or dining if any, bathroom, balcony, and close-ups of the pendant lamp, headboard and linen.
- **Garden & Venue:** the lawn from several angles, the building from the garden, set-ups for weddings and birthdays (once photographed).
- **Night:** blue-hour and night exteriors, the glowing balcony canopy, uplit plants.
- **Details:** gold cushions, the mirror, the textured gold wall, flowers, tea set, door handles.
- **Celebrations:** real events held at the venue, with the hosts' permission.

## 11. Other pages and conversion

### Stay page

- Opens with a large image and the title "Stay". Intro paragraph about quiet, private comfort.
- One section per apartment type (names, sizes, bed types and rates are **\[CLIENT TO CONFIRM\]**). Each has a small photo set, a short description, an amenities list, and a button **Check availability on WhatsApp**.
- Practical block: check-in and check-out times, house rules, cancellation, and parking **\[CLIENT TO CONFIRM\]**.
- Show rates only if the client agrees; otherwise write "Contact us for rates".

### Celebrate page

- Opens with the night garden image and the title "Celebrate".
- Event types as large lines: Weddings, Birthdays, Bridal showers, Intimate gatherings. Each has a photograph (once available) and a short description.
- Venue facts: capacity, hours, catering policy, decoration policy, parking and power backup **\[CLIENT TO CONFIRM\]**.
- A short **event enquiry form**: name, phone, event type, date, estimated guests, message. Submitting sends the details to the client by email and opens or links to WhatsApp. The mechanism is up to the builder (for example a form service or a WhatsApp deep link).

### Contact page

- Address, both numbers (tap to call), WhatsApp button, map, and a short enquiry form.
- **WhatsApp links:** convert the numbers to international format with Nigeria's country code, dropping the leading 0: 09138833322 becomes https://wa.me/2349138833322 and 08069643439 becomes https://wa.me/2348069643439.
- **Pre-filled messages** (URL-encoded): "Hello, I'd like to book a quiet weekend stay at Palmgrove Luxury." / "...a romantic stay..." / "...to plan a celebration..."

### Booking

- Launch with enquiry-based booking (WhatsApp, call, form). An online booking engine and deposit payments can come in a later phase (section 14).

## 12. Assets needed from the client

- Logo files (SVG or high-resolution PNG), or confirmation to use the text wordmark.
- **Clean, high-resolution original photographs** with no text overlay. Minimum 2400 px on the long edge for hero images. The two supplied images are suitable references but are not enough to launch.
- Shoot list: every room from the doorway and from the far corner; bedroom details; bathroom; lounge; balcony and the spiral staircase; the building at golden hour and blue hour; the lawn empty and set up for an event; plant details; the front entrance and signage.
- Video: 30 to 60 seconds of raw footage for the hero loop and the tour.
- Apartment names, sizes, amenities, rates policy, check-in and check-out times, house rules.
- Garden capacity, event rules, available packages.
- Social media links, Google Business Profile, a Google Maps pin.
- Real guest reviews (with permission) once available.

## 13. Phase 2 — ambient sound and light (for later)

The client may add audio once the site is live. I read the request "music aurora" as ambient music plus a soft glowing light effect that responds to it. Please confirm this interpretation with the client before building.

**Audio rules:**

- **Never auto-play.** Browsers block it and it feels intrusive. Sound is off by default.
- A small, quiet toggle sits in the bottom-left corner of the gallery and the tour mode: an equaliser icon and the words "Sound off" or "Sound on".
- When turned on, music fades in over 1.5 seconds and fades out over 1.5 seconds when turned off, the tab is hidden, or a video starts.
- Remember the visitor's choice for the session.
- Load audio only after the toggle is first used, to protect mobile data. Use compressed AAC or MP3 loops under about 2 MB each.
- **Mood:** warm, slow, instrumental. About 60 to 80 BPM. Think soft piano, gentle acoustic guitar, warm ambient pads, or quiet lounge-style Afro-jazz. No lyrics.
- Optional per-category sound: Apartments (soft piano and warm pads), Garden and Night (light breeze, crickets, gentle guitar), Celebrations (a slightly brighter but still refined track).
- **Licensing:** use only royalty-free or properly licensed music. Do not use commercial songs without a licence.

**The "aurora" (visual aura):**

- An optional, very soft background glow behind the lightbox and the tour mode: two or three blurred blobs in soft gold and warm amber, drifting slowly.
- When sound is on, the blobs gently swell in step with the music (using the Web Audio API analyser). When sound is off, they drift on a slow timer.
- Keep opacity low (about 15 to 25%) so it never competes with the photograph. Respect prefers-reduced-motion by showing a static glow.

## 14. Technical notes for the builder

- **Suggested stack:** a static or server-rendered framework such as Next.js, deployed on a fast host such as Vercel.
- **Performance (Nigerian mobile networks):** target a Largest Contentful Paint under 2.5 seconds on a mid-range phone on 4G. Keep the hero video under about 4 MB (with a smaller version for mobile) and always provide a poster image. Preload only the hero image and fonts.
- **SEO:** page title "Palmgrove Luxury by Lush | Luxury Short-Stay Apartments & Garden Venue in Makurdi"; a meta description of about 150 characters; Open Graph image (the night exterior); LocalBusiness or LodgingBusiness structured data with the real address and phone numbers; a sitemap and robots file. Encourage the client to claim a Google Business Profile.
- **Accessibility:** semantic HTML, keyboard-operable lightbox with focus trapping and Esc to close, visible focus rings, descriptive alt text, sufficient contrast, and a captions or transcript option for any video with speech.
- **Analytics:** a lightweight, privacy-friendly option is enough, and avoid cookie banners where possible. Track clicks on the WhatsApp and call buttons because those are the conversions.
- **Forms:** validate on the client, include spam protection (a honeypot field), and never expose private email addresses in the page source.

## 15. Phasing

- **Phase 1 (launch):** Home, Stay, Celebrate, Gallery with lightbox and tour mode, Contact, WhatsApp integration, SEO and analytics.
- **Phase 2:** ambient audio and the soft aurora glow; hero video upgrade; additional event photography and real guest reviews.
- **Phase 3 (optional):** availability calendar and online deposits (for example with Paystack), a blog or journal for local guides, and a small client-side admin to update photographs and rates without a developer.

## 16. Quick do and don't list

**Do:** keep the pages calm and spacious; lead with real photographs of the property; keep gold rare; make WhatsApp one tap away on every page; mark every unknown fact as a placeholder.

**Don't:** use stock images; auto-play audio; over-animate; invent prices, capacities, amenities, names or reviews; leave the baked-in text overlay on any gallery image; let cars, wires or clutter appear in hero images.
