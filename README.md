# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Setup
Run the following command to start the tailwind server:
```bash
npx tailwindcss -i ./src/styles/index.css -o ./src/styles/styles.css --watch
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
