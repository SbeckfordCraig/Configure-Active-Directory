# IndieArcade

A Newgrounds-style platform for indie game developers and artists to upload and share games, art, and animation — and for visitors to browse, play, and discover them.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) — frontend framework
- [Supabase](https://supabase.com) — auth, database, and file storage (coming in step 2)
- [Vercel](https://vercel.com) — hosting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the browse page.

## Project Status

Currently on **Step 1**: a browse page with placeholder/sample data, no backend yet.

Planned build order:
1. ✅ Scaffold the project and build the browse page with sample data
2. Wire up Supabase for real user accounts (sign up / log in / profile)
3. Build the upload system (art first, then HTML5/WebGL games)
4. Build the submission detail page (play/view embed, comments, likes)
5. Add monetization hooks (ad slots / affiliate links)
