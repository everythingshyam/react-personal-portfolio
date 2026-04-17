# React Personal Portfolio

A modern React application built with Vite, featuring Tailwind CSS for styling.

## Project Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the Tailwind CSS build process (in a separate terminal):
    ```bash
    npx tailwindcss -i ./src/styles/index.css -o ./src/styles/styles.css --watch
    ```

## Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- ESLint

## Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses SWC for Fast Refresh
