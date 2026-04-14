# Baigs Tutorial - React + Vite Website

A premium multi-page website built using React, TypeScript, and Vite with page routes:

- Home (`/`)
- About (`/about`)
- Gallery (`/gallery`)
- Courses (`/courses`)
- Contact (`/contact`)

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Where to add your images

- Tutorial icon/logo:
  - Replace: `public/tutorial-icon.svg`
- About page image:
  - Update image source in: `src/pages/AboutPage.tsx`
  - Suggested file: `public/images/about.jpg`
- Gallery images:
  - Update `galleryItems` array in: `src/pages/GalleryPage.tsx`
  - Suggested files: `public/images/gallery-1.jpg` ... `public/images/gallery-6.jpg`

## Contact form email

The Contact page sends submissions to:

`ankittiwari3334@gmail.com`

using FormSubmit endpoint in `src/pages/ContactPage.tsx`.

### First-time FormSubmit activation

1. Submit the form once from your running site.
2. Open activation email sent to `ankittiwari3334@gmail.com`.
3. Click activation link.

After this, form submissions will arrive in your inbox.
