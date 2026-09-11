# Next.js School Management

A school management system built with Next.js (App Router), Prisma, and PostgreSQL, with role-based authentication via Clerk and media uploads via Cloudinary.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | [Clerk](https://clerk.com) (role-based access) |
| Database / ORM | PostgreSQL via [Prisma 7](https://www.prisma.io) (`@prisma/adapter-pg`) |
| Forms & Validation | React Hook Form + Zod |
| Scheduling | react-big-calendar, react-calendar |
| Media | next-cloudinary |
| Charts | Recharts |
| Notifications | react-toastify |
| Dates | moment |
| Linting | ESLint 9 |

## Project Structure

```
.
├── app/          # Next.js App Router routes
├── components/   # Shared React components
├── lib/          # Utilities / server logic
├── prisma/       # Prisma schema & migrations
├── public/       # Static assets
├── proxy.ts
└── next.config.ts
```

## Getting Started

### Prerequisites

- Node.js (LTS)
- A PostgreSQL database
- A [Clerk](https://clerk.com) application (for auth keys)
- A [Cloudinary](https://cloudinary.com) account (for image uploads)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/school_management"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

> Adjust variable names to match what's actually read in `lib/` — this is a starting point based on the libraries in use.

### 3. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Media / Image Uploads

Image uploads (e.g. student/staff photos, attachments) are handled via [Cloudinary](https://cloudinary.com) through the `next-cloudinary` package.

1. Create a free Cloudinary account and grab your **Cloud Name**, **API Key**, and **API Secret** from the [Cloudinary console](https://console.cloudinary.com).
2. Set the three `CLOUDINARY_*` variables in `.env` (see above).
3. If you're using unsigned upload presets, create one in the Cloudinary console and reference its name from the upload component.

> Check `lib/` and `components/` for the actual upload widget/component names and confirm the preset/config matches.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
