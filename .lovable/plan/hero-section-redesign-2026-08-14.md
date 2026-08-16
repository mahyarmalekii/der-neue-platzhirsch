# Hero Section Redesign

The user is unhappy with the current hero section and its background image. I will redesign it with a more dramatic, atmospheric, and high-end aesthetic.

## Changes
- **New Hero Asset**: Generate a new, cinematic background image for the hero section that feels more authentic to a premium Berlin restaurant.
- **Enhanced Typography**: Refine the hero text layout and animations for a more "creative" and high-end feel.
- **Atmospheric Effects**: Add subtle noise/grain and better gradient overlays to the hero to make it feel less "ugly".
- **Refined Layout**: Adjust the hero's composition to better frame the restaurant name and location.

## Technical Details
- Generate `hero_v2.jpg` via `ai_gateway` (image generation).
- Update `Hero` component in `src/routes/index.tsx` to use the new asset and refined styling.
- Add a subtle grain overlay utility in `src/styles.css` if not already present.
- Implement a more sophisticated entrance animation for the hero text.
