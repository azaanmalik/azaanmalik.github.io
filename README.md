# Muhammad Azaan Malik — Portfolio

A responsive, cinematic developer portfolio using **Jet Black `#050505`**, **Royal Amethyst `#3B0A6B`** and **Electric Cyan `#00E5FF`**.

## Highlights
- Original orbital 3D CSS sculpture with pointer-based tilt
- Lightweight animated particle canvas (no WebGL dependencies)
- Interactive project cards, filtering and scroll reveals
- Mobile navigation, keyboard focus styles and reduced-motion support
- 11 portfolio project entries with accurate public links or local/private labels
- Semantic HTML, SEO and Open Graph metadata
- Static GitHub Pages deployment, **no build tooling required**

Inspired by interaction patterns in [21st.dev](https://21st.dev) (spotlight cards, 3D tilt, animated backgrounds), implemented here as original code without copying third-party components.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a public repository named **`azaanmalik.github.io`** in the `azaanmalik` GitHub account (or any repo name if using a project URL).
2. Upload `index.html`, `style.css`, `script.js`, and `.nojekyll` to the repository **root**.
3. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and Save.
4. Once Pages finishes publishing, open **https://azaanmalik.github.io** (or the project's GitHub Pages URL).

This repository does not contain API secrets. Email is a `mailto:` link and requires the visitor's email application. GitHub project links open publicly available repositories; projects without a verified public URL are labeled accordingly.

## Customization

- `script.js` → project titles, descriptions, categories and links.
- `index.html` → about, education, contact and navigation.
- `style.css` → palette, responsive styling, effects.

Note: the education timeline currently retains the original CV's unconfirmed ongoing date, explicitly marked for update. Verify all career dates before professional publication.

## Quality notes

This is a static frontend, not a server-backed application. The canvas is throttled and pauses when not visible; reduced-motion preferences disable ambient animations. No actual deployment is claimed until GitHub Pages publishes successfully.
