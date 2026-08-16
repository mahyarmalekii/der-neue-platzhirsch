# Visual and Functional Upgrades for Der Neue Platzhirsch

The user requested high-quality assets, a reservation/order modal, and a scroll progress indicator.

## User Improvements
- **Higher Quality Assets**: Generate fresh, high-detail imagery and video for the restaurant to replace "ugly and fake" low-quality placeholders.
- **Reservation Modal**: Add a dedicated modal (date, time, party size, special requests) triggered by the sticky bar.
- **Scroll Progress Indicator**: Add a subtle visual tracker at the top of the viewport.

## Technical Implementation Details
- **Asset Generation**:
  - `schnitzel_hero.png`: Ultra-high detail golden crispy Wiener Schnitzel with garnishes on a clean background.
  - `terrace_ambient.jpg`: Authentic cinematic Berlin restaurant terrace atmosphere.
  - `kitchen_master.mp4`: High-quality close-up of sizzling butter and kitchen action.
- **Reservation Modal**:
  - Use shadcn/ui components (`Dialog`, `Button`, `Input`, `Textarea`, `Calendar`) for the form.
  - Submit handler with toast notification (simulated backend submission).
- **Scroll Progress**:
  - Global `ScrollProgress` component in `__root.tsx` or `index.tsx` that maps window scroll to a thin amber bar.
- **Refinement**:
  - Update `SchnitzelScene`, `Hero`, and `KitchenVideo` to use the new assets.
  - Link the "Tisch reservieren" and "Bestellen" buttons in `ReserveBar` to the new modal.

## User Experience
- The site will feel more premium with higher-fidelity visuals.
- The reservation flow becomes integrated rather than just a phone link.
- Scroll progress gives visual feedback on their position in the interactive journey.
