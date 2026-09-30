# ByteSpace

A responsive landing page for **ByteSpace**, an online course platform, built from the
"ByteSpace New" Figma design. It also has Login and Signup pages (the bonus task).

**Live demo:** https://bytespace-new-two-iota.vercel.app

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Pages

| Route     | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `/`       | Full landing page                                                  |
| `/login`  | Sign-in form (client-side validation, password visibility toggle)  |
| `/signup` | Registration form (password match check, terms agreement)          |

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts (Poppins + Inter), metadata
│   ├── page.tsx              # landing page, built from the section components
│   ├── globals.css           # Tailwind theme tokens (brand, lime, ink…) and utilities
│   └── (auth)/               # route group: shared split-screen layout
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── layout/               # Navbar (with mobile menu), Footer, NewsletterForm
│   ├── sections/             # Hero, Companies, Courses, Categories, Growth,
│   │                         # CreateCourses, CreatorCTA, Testimonials
│   ├── auth/AuthForm.tsx     # one form component for both login and signup
│   └── ui/                   # reusable parts: Button/ButtonLink, CourseCard,
│                             # AvatarStack, SectionHeading, Logo, Shapes, GlowBackdrop
└── lib/data.ts               # all page content (courses, tags, testimonials, links)
```

## Notes

- **Content lives in data.** All copy and lists are in `src/lib/data.ts`, so the section
  components stay presentational.
- **Interactive course filter.** Clicking a category tag filters the course grid, and
  `+ More` shows the remaining tags.
- **Decorative 3D shapes.** The squiggles, rings, cones and cylinders are hand-built SVG
  components (`ui/Shapes.tsx`) instead of exported bitmaps, so they stay sharp at any size.
- **Images.** Photos are free Unsplash / randomuser.me images stored in `public/images`,
  used in place of the Figma's cut-out renders.
- **Auth.** The Login and Signup pages are front-end only. No backend is connected.
- **Newsletter button.** In the Figma file the footer newsletter button says "Search". It is
  labelled "Subscribe" here because that matches what it does.
