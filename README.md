# ByteSpace

A responsive landing page for **ByteSpace**, an online course platform, built from the
"ByteSpace New" Figma design. It also has Login and Signup pages (the bonus task).

**Live demo:** https://bytespace-new-two-iota.vercel.app

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

**Fonts:** Poppins (headings) and Satoshi (body), the same as the Figma style guide. Satoshi is self-hosted via `next/font/local`.

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
│   ├── layout.tsx            # fonts (Poppins + Satoshi), metadata
│   ├── page.tsx              # landing page, built from the section components
│   ├── globals.css           # Tailwind theme tokens (brand, lime, ink…) and utilities
│   └── (auth)/               # route group: login and signup pages
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── layout/               # Navbar (with mobile menu), Footer, NewsletterForm
│   ├── sections/             # Hero, Companies, Courses, Categories, Growth,
│   │                         # CreateCourses, CreatorCTA, Testimonials
│   ├── auth/                 # AuthShell (blue layout + illustration) and AuthForm
│   └── ui/                   # reusable parts: Stage/Place/Ornament, CourseCard, InfoCards,
│                             # AvatarStack, Button, SectionHeading, Logo, GlowBackdrop
└── lib/data.ts               # all page content (courses, tags, testimonials, links)
```

## Notes

- **Built from the Figma file.** Colours, font sizes, spacing and copy come from the
  Figma frames and style guide. The photos, 3D ornaments, partner logos, category icons and
  the logo were exported from the same file (`public/images`).
- **Scalable illustrations.** Each illustration (hero, growth, creator, auth) is laid out in the
  Figma frame's own coordinates inside a `Stage` (`ui/Stage.tsx`). The stage keeps the frame's
  aspect ratio and sizes its contents in `%`/`em`, so the composition matches the design at
  1440px and scales down proportionally on smaller screens.
- **Content lives in data.** All copy and lists are in `src/lib/data.ts`, so the section
  components stay presentational.
- **Interactive course filter.** Clicking a category tag filters the course grid.
- **Auth.** The Login and Signup pages are front-end only. No backend is connected.
- **Deliberate differences from the Figma:**
  - The footer newsletter button reads "Subscribe" rather than "Search".
  - The "Year to Date" badge shows "+12%" rather than "+12$".
  - The copyright year is the current year.
