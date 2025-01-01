# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Frontend Mentor - Huddle Landing Page

This is a solution to the [Huddle landing page coding challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0.

Frontend Mentor challenges help improve skills by building realistic projects.

## Table of contents:

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview:

### The challenge:

**To do this challenge, you need a basic understanding of HTML, CSS and a tiny bit of JavaScript.**
Users should be able to:

- View the optimal layout depending on their device's screen size
- Get it looking as close to the design as possible.
- See a hover state on desktop

<br>

Preview of initial design:
![Design preview for the Order summary card coding challenge](./documentation/design/desktop-preview.jpg)

### Screenshots:

<div align="center">

| Fullscreen View (Desktop)                           |
| --------------------------------------------------- |
| ![](documentation/design-finished/0.1-Original.jpg) |

| Animated Preview                                          |
| --------------------------------------------------------- |
| ![](documentation/design-finished/0.3-animatedResult.gif) |

<br>

**Note: This is a Mobile-First Approach & Wait for the GIF to load**

<br>

All viewports were included (except for the 4k view), in case the observer wishes to see the minor changes.

<br>

| Desktop View (1440px)                              | Laptop View (1024px)                              | Tablet View (768px)                               |
| -------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| ![](documentation/design-finished/1.0-Desktop.jpg) | ![](documentation/design-finished/1.1-Laptop.jpg) | ![](documentation/design-finished/1.2-Tablet.jpg) |

| Mobile L (430px)                                   | Mobile M (375px)                                   | Mobile S (320px)                                   |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| ![](documentation/design-finished/1.3-MobileL.jpg) | ![](documentation/design-finished/1.4-MobileM.jpg) | ![](documentation/design-finished/1.5-MobileS.jpg) |

</div>

### Links:

- Live Site URL: [Website Link - Click Me](https://mark-siazon.github.io/)
- Solution URL: [FrontEndMentor - Click Me](https://www.frontendmentor.io/solutions/)

## My process:

### Built with:

- HTML5, CSS3, JS
- Figma / Mobile-First Approach

  - Grid Layout + Flexbox

- React JS
- PostCSS
- Vite JS Webpack

### What I learned:

Recap over some of the major learnings while working through this project:

#### General things I've learned:

- Review of Semantic HTML & CSS, CSS Flex Layout
- Learned how to also use Grid Layout
- Writing DRY code by combining similar styles

<hr>

## Author:

- Github - [@Iron-Mark](https://github.com/Iron-Mark)
- Github - [@Mark-Siazon](https://github.com/Mark-Siazon)
- Frontend Mentor - [@Iron-Mark](https://www.frontendmentor.io/profile/Iron-Mark)
  - _(The Assets used in this project is originally from FrontendMentor)_
