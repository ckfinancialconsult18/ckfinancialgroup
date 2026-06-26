# CK Financial — Deployment Guide

This guide covers everything needed to deploy the CK Financial website from a local machine to production on Vercel with a custom domain.

---

## Prerequisites

- Node.js 18.17 or later
- npm 9+ or pnpm 8+
- A [Vercel](https://vercel.com) account (free tier works for launch)
- A domain name (e.g., `ckfinancial.com`) purchased via a registrar (Namecheap, GoDaddy, Google Domains, etc.)
- A Gmail account for `ckfinancialconsult@gmail.com` (already exists)

---

## 1. Local Setup

### Install Dependencies

```bash
cd ck-financial
npm install
```

### Verify the Build Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify all pages load correctly.

### Run a Production Build Locally

```bash
npm run build
npm run start
```

Fix any TypeScript or build errors before deploying.

---

## 2. Environment Variables

Create a `.env.local` file in the project root for local development:

```env
# Site URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Form — choose one option:

# Option A: Resend (recommended)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=ckfinancialconsult@gmail.com

# Option B: Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id

# Option C: SendGrid
SENDGRID_API_KEY=SG.your_key_here
```

For production on Vercel, add these via **Vercel Dashboard → Project → Settings → Environment Variables**.

---

## 3. Contact Form Backend (Resend — Recommended)

The contact form currently uses a simulated submit. To make it real:

### Step 1: Create a Resend account

Go to [resend.com](https://resend.com) and create a free account.  
Free tier allows 100 emails/day — more than enough to start.

### Step 2: Create an API route

Create `/src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, state, coverage, comments } = body;

    await resend.emails.send({
      from: "CK Financial Website <noreply@ckfinancial.com>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Quote Request — ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request from CK Financial Website</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">State</td><td style="padding: 8px; border: 1px solid #ddd;">${state}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Coverage Interest</td><td style="padding: 8px; border: 1px solid #ddd;">${coverage}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Comments</td><td style="padding: 8px; border: 1px solid #ddd;">${comments || "None"}</td></tr>
        </table>
      `,
    });

    // Auto-reply to client
    await resend.emails.send({
      from: "Courtney at CK Financial <ckfinancialconsult@ckfinancial.com>",
      to: email,
      subject: "I received your request — CK Financial",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out! I received your quote request and will be in touch within 1 business day.</p>
        <p>If you'd like to reach me sooner, you can call or text me directly at <a href="tel:4136038341">(413) 603-8341</a>.</p>
        <p>Looking forward to speaking with you,<br/>
        <strong>Courtney Kegresse</strong><br/>
        Licensed Insurance Broker | CK Financial<br/>
        (413) 603-8341</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
```

### Step 3: Install Resend SDK

```bash
npm install resend
```

### Step 4: Update the contact form

In `/src/app/contact/page.tsx`, replace the `handleSubmit` simulation with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try calling us directly.");
    }
  } catch {
    alert("Network error. Please try calling us directly.");
  } finally {
    setLoading(false);
  }
};
```

---

## 4. Deploying to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — CK Financial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ck-financial.git
git push -u origin main
```

### Step 2: Import Project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Select **"Import Git Repository"** and choose your `ck-financial` repo
4. Vercel auto-detects Next.js — keep default settings
5. Click **"Deploy"**

Your site will be live at `https://ck-financial.vercel.app` in ~2 minutes.

### Step 3: Add Environment Variables on Vercel

In Vercel Dashboard → Project → **Settings → Environment Variables**, add:

```
RESEND_API_KEY          →  re_your_key
CONTACT_EMAIL           →  ckfinancialconsult@gmail.com
NEXT_PUBLIC_SITE_URL    →  https://ckfinancial.com
```

Redeploy after adding variables.

---

## 5. Custom Domain Setup

### Step 1: Add domain in Vercel

1. Vercel Dashboard → Project → **Settings → Domains**
2. Add `ckfinancial.com` and `www.ckfinancial.com`
3. Vercel will show you DNS records to set

### Step 2: Update DNS at your registrar

Depending on your registrar, add these records:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | 76.76.21.21               |
| CNAME | www  | cname.vercel-dns.com      |

DNS propagation takes 5 minutes to 48 hours.

### Step 3: Enable HTTPS

Vercel automatically provisions a free SSL certificate via Let's Encrypt once DNS propagates. No action needed.

---

## 6. Google Verification & Analytics

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `https://ckfinancial.com`
3. Choose **"HTML tag"** verification method
4. Copy the `content` value from the meta tag (looks like `abc123...`)
5. In `/src/app/layout.tsx`, replace `your-google-site-verification` with this value
6. Redeploy, then verify in Search Console
7. Submit your sitemap: `https://ckfinancial.com/sitemap.xml`

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Install the package:
   ```bash
   npm install @next/third-parties
   ```
4. Add to `/src/app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from "@next/third-parties/google";
   // Inside <html> body, after </body> closing:
   <GoogleAnalytics gaId="G-XXXXXXXXXX" />
   ```

### Google Business Profile

Your Google Business Profile is already established. Once the site is live:
1. Add `https://ckfinancial.com` as your website URL in the profile
2. This helps Google associate the business with the site

---

## 7. Calendly Integration

The site links to `https://calendly.com/ckfinancialconsult` throughout.

To verify/update this link:
1. Log into your Calendly account
2. Find your scheduling link (it may be different from the default)
3. In `/src/lib/utils.ts`, update the `calendarLink` value:
   ```typescript
   calendarLink: "https://calendly.com/YOUR_ACTUAL_LINK",
   ```
4. Redeploy

---

## 8. Portrait Photo

The site currently displays "CK" text in placeholder circles. To add your photo:

### Step 1: Prepare the image

- Use a high-quality, professional headshot
- Recommended: square crop, at least 600×600px
- Format: `.jpg` or `.webp`
- Compress with [squoosh.app](https://squoosh.app) before uploading

### Step 2: Add the image to the project

Place it at:
```
public/images/courtney.jpg
```

### Step 3: Replace placeholder circles

Search for this pattern in components:
```tsx
<div className="... bg-navy flex items-center justify-center text-white ...">CK</div>
```

Replace with:
```tsx
import Image from "next/image";
<div className="relative w-full h-full">
  <Image src="/images/courtney.jpg" alt="Courtney Kegresse" fill className="object-cover" />
</div>
```

Key files to update:
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/MeetCourtneySection.tsx`
- `src/app/about/page.tsx`
- `src/app/learning-center/[slug]/page.tsx` (author card)

---

## 9. OG Image

The site references `/og-image.jpg` for social sharing previews.

### Option A: Create manually

- Dimensions: 1200×630px
- Include CK Financial logo/name and a tagline
- Save to `public/og-image.jpg`

### Option B: Use Vercel OG Image Generation

Create `/src/app/opengraph-image.tsx`:
```tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };

export default function OGImage() {
  return new ImageResponse(
    <div style={{ background: "#0B2545", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white" }}>
      <div style={{ fontSize: 64, fontWeight: 700 }}>CK Financial</div>
      <div style={{ fontSize: 28, color: "#C6A664", marginTop: 16 }}>Protect What Matters Most</div>
    </div>
  );
}
```

---

## 10. Performance Checklist

Before launch, verify:

- [ ] All pages load in under 2 seconds on Vercel
- [ ] Mobile view looks correct on iPhone and Android
- [ ] Contact form submits and Courtney receives the email
- [ ] All CTAs (Get My Free Quote, Schedule Consultation) work
- [ ] Phone number links open the dialer on mobile
- [ ] Calendly link opens correctly
- [ ] 404 page displays for invalid URLs
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

---

## 11. Ongoing Maintenance

### Adding New Articles

1. Open `/src/lib/articles-data.ts`
2. Add a new `Article` object to `ALL_ARTICLES`
3. Push to GitHub — Vercel auto-deploys

### Updating Carrier Information

The underwriting reference tools Courtney built separately are independent of this site. This site focuses on consumer education and lead generation.

### Updating Contact Info

All business information is centralized in `/src/lib/utils.ts` under the `BUSINESS` constant. Change it once and it updates everywhere.

---

## 12. Support

If you encounter any deployment issues:

- **Vercel documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Resend documentation:** [resend.com/docs](https://resend.com/docs)

---

*CK Financial website — Production deployment guide v1.0*
