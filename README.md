# Dewo landing page

React + Vite landing page with a centered interactive ASCII cloud hero and responsive layout.

## Development

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://127.0.0.1:5173).

## Production

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host.

## Structure

- `src/App.jsx` composes the page sections.
- `src/components/` contains Header, Hero, Ecosystem, HowItWorks, Protocol, Mission, FAQ, Closing, and Footer.
- `Hero.jsx` manages motion preferences. `CloudEffect.jsx` renders image-colored ASCII particles with pointer repulsion and spring recovery on Canvas 2D. Animation pauses when offscreen or the tab is hidden, and respects reduced-motion preferences.
- `src/styles.css` contains responsive styles.
- `public/` contains the original cloud image and logo.

Mission content is illustrative; the page does not connect to live contracts.
