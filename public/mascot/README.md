# PerkPal — Pal

`perkpal-pal.png` is the transparent master illustration for Pal, generated with the built-in image-generation tool from the user's green coin-holding character sketch. The original image is preserved in the generated-images library. This project copy is used by the shared `Pal` component and the `Brand` lockup.

The core character is a rounded sage-green pal with a slight head tuft, a curved tail, short feet, simple dark eyes, and a friendly smile. Both hands hold one gold coin with a capital P. Keep those traits, proportions, and colors consistent in future pointing, waving, or celebration poses. Use the `pose` prop on the shared `Pal` component. Keep the core coin pose for the brand lockup; use reactions where they explain a page state or respond to an action.

## Final generation prompt

Use case: logo-brand. Asset: the official PerkPal mascot for a refined modern rewards wallet website. Use attached Image 1 only as a loose idea reference: a friendly simple green creature with a coin. Create ONE original isolated full-body green pal, facing viewer, holding ONE oversized warm gold coin in front of its belly with both little rounded hands. Friendly rounded pear-shaped bean body, two short feet, small curved tail on left, two simple dark oval eyes and small kind smile. One slight head tuft. No horns, no ears, no fur. Expressive and quietly charming. Adult-friendly premium editorial illustration: clean vector-like shapes, minimal soft dimensional shading, crisp silhouette, subtle warm texture at most. Body rich sage green #789b63 with darker forest edges #254d3d; coin ochre gold #e7b64c with simple inset rim and a single elegant capital P. Cream highlights. Restrained 2D/2.5D, not shiny 3D, not childish, no neon, no crypto aesthetic, no sparkles or floating coins. A naturally readable mark even at 40 pixels. Centered with narrow transparent padding all around. Genuine transparent background, no floor, no scene, no text other than P on the coin, no watermark. Do not copy the coin stack or black background from the sketch.

## Pose library

All three variants were generated with the built-in image-generation tool using the transparent master as the identity reference. Their exact prompt set is in [pose-prompts.json](pose-prompts.json).

| Pose | Asset | Where it appears |
| --- | --- | --- |
| `coin` | [perkpal-pal.png](perkpal-pal.png) | Shared logo, favicon, and wallet-preview branding |
| `pointing` | [perkpal-pointing.png](perkpal-pointing.png) | Homepage wallet preview and upcoming-deadline guidance |
| `celebrating` | [perkpal-celebrating.png](perkpal-celebrating.png) | Saved-item reaction, sign-in greeting, closing CTA, and all-clear expiration state |
| `searching` | [perkpal-searching.png](perkpal-searching.png) | Empty wallet searches and the not-found page |

`animate` adds a short entrance reaction, not a looping animation. Reduced-motion preferences disable those reactions. Logo instances stay still. Use `decorative` when nearby text already describes the state; otherwise each pose has its own accessible description.
