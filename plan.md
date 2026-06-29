# Implementation Plan - Additional Video Content for Learning Portal

The goal is to populate the e-learning portal with additional video content. Since the project currently uses `localStorage` via a custom hook (`src/hooks/useCourses.tsx`) for data persistence, this update will involve modifying the initial seed data and ensuring the UI correctly displays the expanded content.

## Scope Summary
- **Data Enrichment:** Update `src/hooks/useCourses.tsx` with a broader range of video-based course content.
- **Course Catalog Update:** Ensure the new content is visible and correctly categorized in `src/pages/portal/CourseCatalog.tsx`.
- **Course View Update:** Verify that video players in `src/pages/portal/CourseView.tsx` handle the new content correctly.

## Non-Goals
- Migrating to a real database (Supabase is out of scope per the existing `plan.md`).
- Building new UI features (the focus is on content population).

## Auth & RLS model
**Auth in scope:** No (Handled via client-side `localStorage` logic)
**Model:** no_auth_controlled_write (Simulated auth in `src/hooks/useAuth.tsx`)
**RLS strategy:** N/A (Client-side simulation)
**Frontend implication:** No real security; logic relies on `localStorage` state.

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** not_applicable (Using `localStorage`)

## Affected Areas
- `src/hooks/useCourses.tsx`: The source of truth for the course data and initial seed state.
- `src/pages/portal/CourseCatalog.tsx`: Displays the list of courses.
- `src/pages/portal/CourseView.tsx`: Displays the individual course content/video player.

---

## Ordered Phases

### Phase 1: Content Data Population
- Modify `src/hooks/useCourses.tsx` to include additional course objects.
- Each course should have:
    - Unique ID.
    - Professional title (focused on high-tech/diploma topics).
    - Description.
    - Category (e.g., "Diploma", "Certification").
    - Thumbnail URL (placeholders like Unsplash).
    - Video URL (YouTube/Vimeo embed links or placeholders).
    - Lessons/Modules structure.
- **Owner:** `frontend_engineer`

### Phase 2: UI Verification & Polish
- Check `CourseCatalog.tsx` to ensure layout handles the increased number of items gracefully (grid/pagination/scroll).
- Check `CourseView.tsx` to ensure the video player correctly renders the new video URLs.
- **Owner:** `quick_fix_engineer`

---

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Populate additional course data in the hook.
2. quick_fix_engineer — Verify UI rendering and fix minor layout issues.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1
- **Scope:** 
    - Read `src/hooks/useCourses.tsx`.
    - Update the `INITIAL_COURSES` or seed logic to add at least 5-8 new courses.
    - Focus on "Diploma in Software Engineering", "Data Science Professional", "Cloud Computing Specialist", etc.
    - Ensure video URLs are valid embed links or consistent placeholders.
- **Files:** `src/hooks/useCourses.tsx`
- **Depends on:** none
- **Acceptance criteria:** The `useCourses` hook returns a larger set of data.

### 2. quick_fix_engineer
- **Phases:** 2
- **Scope:** 
    - Review `src/pages/portal/CourseCatalog.tsx` and `src/pages/portal/CourseView.tsx`.
    - Ensure the course grid is responsive and looks good with many items.
    - Fix any broken image/video placeholders if they appear.
- **Files:** `src/pages/portal/CourseCatalog.tsx`, `src/pages/portal/CourseView.tsx`
- **Depends on:** Phase 1
- **Acceptance criteria:** Catalog page displays all new courses without layout breaking.

**Do not dispatch:**
- supabase_engineer (Project remains localStorage-based).
