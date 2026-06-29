# Implementation Plan - Ponman Global Computers Limited Website & E-Learning Portal

Develop a professional corporate website for Ponman Global Computers Limited with a built-in self-paced e-learning portal. Since no server-side database (Supabase/Postgres) is available for this session, all data persistence (user auth, courses, progress) will be handled via `localStorage`.

## Scope Summary
- **Corporate Website:** Home, About Us, Services, Contact Us.
- **E-Learning Portal:** User registration/login, Course Catalog, Course Detail/Learning View, Progress Tracking.
- **Admin Features:** Course CRUD (Create, Read, Update, Delete) for managing content.
- **Tech Stack:** React, Tailwind CSS (v4), Lucide React (icons), Shadcn UI components, `localStorage` for persistence.

## Non-Goals
- Remote database integration (Supabase/PostgreSQL).
- Real-time video streaming (will use embed links or placeholders).
- Payment gateway integration.

## Assumptions
- "Secure" in this context refers to client-side UI protection (protected routes) and simulated authentication.
- All media content will be hosted externally (e.g., YouTube/Vimeo/Cloudinary) or referenced via URL.
- The contact form will simulate submission (log to console/show success message).

## Affected Areas
- `src/App.tsx`: Routing and Global State.
- `src/components`: Navigation, Footer, Layouts, UI components.
- `src/pages`: Home, About, Services, Contact, Login, Register, Portal Dashboard, Course View, Admin Dashboard.
- `src/hooks`: Custom hooks for `localStorage` data management (auth, courses).

---

## Ordered Phases

### Phase 1: Foundation & Routing
- Set up React Router for all primary pages.
- Define a base layout with Navbar and Footer.
- **Owner:** `frontend_engineer`

### Phase 2: Corporate Pages (Static/Marketing)
- Build Home (Hero, Featured Services, CTA).
- Build About Us (Company profile, Mission/Vision).
- Build Services (List of IT services).
- Build Contact Us (Information and functional-looking form).
- **Owner:** `frontend_engineer`

### Phase 3: Auth & Data Mocking (Client-side)
- Implement `useAuth` hook and `useCourses` hook using `localStorage`.
- Build Login and Registration pages.
- Create initial seed data for the course catalog.
- **Owner:** `frontend_engineer`

### Phase 4: E-Learning Portal (User View)
- Build Portal Dashboard (Enrolled courses, progress overview).
- Build Course Catalog (Filterable list of available courses).
- Build Course Player/Learning View (Sidebar navigation, video/text content delivery).
- **Owner:** `frontend_engineer`

### Phase 5: Admin Management & Polishing
- Build Admin Dashboard for Course CRUD operations.
- Final CSS/UI refinements for responsiveness.
- **Owner:** `frontend_engineer` (for CRUD logic/UI) or `quick_fix_engineer` (for polish).

---

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Foundation, Routing, and Corporate UI.
2. frontend_engineer — E-learning portal logic and Admin CRUD.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:**
    - Initialize routing in `src/App.tsx` using `react-router-dom`.
    - Create professional UI components for the corporate site (Home, About, Services, Contact).
    - Create a mock Auth system using `localStorage` to handle "Login/Register".
    - Build the E-learning portal: Course listing, Course details (video embeds), and Progress tracking (saved to local storage).
    - Build an Admin interface to allow adding/editing courses in the local state.
- **Files:** `src/App.tsx`, `src/pages/*`, `src/components/*`, `src/hooks/*`.
- **Depends on:** none
- **Acceptance criteria:**
    - Responsive design on all pages.
    - User can "register", "login", and see a personalized dashboard.
    - User can "enroll" in a course and see progress update.
    - Admin can add a new course title/description/video-url which then appears in the catalog.
    - Contact form shows a success toast on "submit".

### 2. quick_fix_engineer
- **Scope:** Post-implementation polish.
- **Files:** `src/index.css`, `src/components/ui/*`.
- **Depends on:** frontend_engineer finishing the core portal.
- **Acceptance criteria:** Consistent spacing, typography checks, and fixing any mobile layout overflows.

**Do not dispatch:**
- supabase_engineer (No database access in this session).
