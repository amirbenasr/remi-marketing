---
name: nextjs-custom-favicon
description: Create a custom favicon for a Next.js App Router project using icon.tsx with ImageResponse — no external image tools needed
source: auto-skill
extracted_at: '2026-07-05T07:59:14.175Z'
---

# Custom Favicon in Next.js App Router

## Problem
Next.js projects ship with a default Vercel triangle favicon (`favicon.ico`). Replacing it with a custom logo typically requires external image tools (ImageMagick, sharp, etc.) to convert SVG/PNG to ICO format.

## Approach
Use Next.js App Router's **file-based metadata convention** with `icon.tsx` and `ImageResponse` from `next/og`. This generates the favicon PNG at build time from React/CSS code — no external dependencies.

## Steps

1. **Remove the old Vercel favicon:**
   - Delete `src/app/favicon.ico`

2. **Create `src/app/icon.tsx`:**
   ```tsx
   import { ImageResponse } from "next/og";

   export const size = { width: 32, height: 32 };
   export const contentType = "image/png";

   export default function Icon() {
     return new ImageResponse(
       (
         <div
           style={{
             width: "100%",
             height: "100%",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             borderRadius: "50%",
             backgroundColor: "#E5E5E5",
             borderWidth: 1,
             borderColor: "#CCCCCC",
             borderStyle: "solid",
           }}
         >
           <span
             style={{
               fontSize: 18,
               fontWeight: 700,
               color: "#000000",
               fontFamily: "Arial, Helvetica, sans-serif",
             }}
           >
             R
           </span>
         </div>
       ),
       { ...size }
     );
   }
   ```

3. **Adapt the JSX for your logo:**
   - Change colors, text, shapes, sizes to match your brand
   - `ImageResponse` supports basic CSS: flexbox, borderRadius, backgroundColor, borders, fonts
   - Note: `borderRadius: "50%"` creates a circle; adjust for square icons

4. **Build & verify:**
   ```bash
   pnpm build
   ```
   The `icon.tsx` route handler generates `/icon` as a PNG at build time. Next.js automatically adds it to `<head>` as a favicon link.

5. **Optional — also keep a legacy ICO fallback:**
   - For older browsers, you can keep a `favicon.ico` alongside `icon.tsx`
   - Next.js will serve both; modern browsers prefer the PNG from `icon.tsx`

## Why this works
- Next.js App Router recognizes `icon.tsx` (and `icon.svg`, `icon.png`, etc.) as **file-convention metadata files** in the `app/` directory
- `ImageResponse` renders JSX → PNG using the same Satori engine as Open Graph images
- No build-time dependency on image conversion tools (sharp, canvas, etc.)
- The favicon is version-controlled as code, not as a binary asset

## Caveats
- `ImageResponse` JSX has limitations: no shadows, no gradients, limited font support (system fonts work reliably)
- For complex logos with many details, a hand-crafted SVG placed as `icon.svg` may look better
- Safari doesn't support SVG favicons, so the PNG from `icon.tsx` is actually better for compatibility
