# Shadow View

Shadow View is a React prototype for a market research and charting interface. It combines a trading-inspired landing page, a candlestick chart with a watchlist, and an experimental 3D scene built with custom GLSL shaders. The interface currently uses sample data and placeholder controls; it is not connected to a market data feed or brokerage.

> **Repository status:** The project archive used to prepare this README is incomplete. It does not include the `assets/` or `public/` directories referenced by the source. Restore those files before expecting the app to compile and render as designed. See [Required files](#required-files).

## What is included

| Route | Current implementation |
| --- | --- |
| `/` | Promotional home page with market themed content, a feature video, and a scroll animated navigation bar. |
| `/chart` | Candlestick chart rendered with Lightweight Charts from a fixed ten candle dataset, plus a static watchlist and chart toolbar. |
| `/brokers` | Placeholder page. |
| `/more` | Experimental Three.js scene with particle meshes, smoke and dust shaders, pointer driven camera movement, postprocessing, and Leva controls. |

The interface displays controls such as search, alerts, trade, and publish. These are visual elements in the current code; corresponding search, alert, account, and order workflows are not implemented.

## Stack

- React 19 and React Router 7 for the interface and routes
- Create React App (`react-scripts`) for development and builds
- Lightweight Charts for the candlestick chart
- Three.js, React Three Fiber, Drei, and React Three Postprocessing for the 3D scene
- GLSL shaders loaded with `raw-loader` for the particle and smoke effects
- GSAP and ScrollTrigger for the navigation animation

## Getting started

Prerequisites: Node.js and npm, a modern browser with WebGL support for `/more`, and the missing files listed below.

```bash
git clone https://github.com/nowins3/shadow_view.git
cd shadow_view
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The source imports `gsap` directly, but it is not declared as a direct dependency in the supplied `package.json`. If dependency installation or compilation reports that `gsap` is missing, add it with `npm install gsap` and commit the updated package files.

Available scripts from `package.json`:

| Command | Purpose |
| --- | --- |
| `npm start` | Run the development server. |
| `npm run build` | Create a production build in `build/`. |
| `npm test` | Start the Create React App test runner; no test files were included in the supplied archive. |

## Required files

The supplied archive contains `shaders/*.glsl`, but the components import the shader files from `assets/shaders/`. Restore or relocate the shader files so their import paths resolve. It also omits the following resources referenced by the code:

```text
public/index.html
public/3D/hand.glb
public/3D/sand3.glb
public/3D/magnifying_glass_3d.glb
assets/css/App.css
assets/css/index.css
assets/css/Home.css
assets/css/Chart.css
assets/css/More.css
assets/css/Navbar.css
assets/css/Footer.css
assets/img/footer.jpg
assets/vids/feature-preview.mp4
assets/shaders/*.glsl
```

The model paths above follow the relative URLs in the source. With Create React App, place those files under `public/3D/` to serve them from the application root. For reliable access from every route, update the model URLs in the components to `/3D/...` if needed. The shaders can be copied from the existing `shaders/` directory into `assets/shaders/`, or their import paths can be corrected in the components.

## Project layout

```text
App.js                 Route definitions
pages/                 Home, chart, brokers, and 3D scene pages
components/Chart/      Candlestick chart, toolbar, and watchlist
components/3D/         Particle effects, smoke, loader, and camera controller
components/navbar/     Navigation elements
layouts/               Shared navigation and footer
shaders/               GLSL source files included in the archive
```

## Current scope

Chart candles and watchlist symbols are hardcoded. The market figures and promotional text on the home page are static. The chart toolbar and trading actions are presentational, and the brokers route is a placeholder. Any production use would require live data integration, implemented interactions, and a review of the promotional claims and other placeholder text.
