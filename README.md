# personal-blog-mern

A modern, highly optimized personal portfolio and blog website built using the MERN stack (MongoDB, Express, React, Node.js).

This project is currently in its **Inception Phase**. It is designed to serve as a complete personal digital hub, balancing professional showcase elements with a robust, custom-built blogging system.

- **GitHub Repository:** [https://github.com/everythingshyam/personal-blog-mern](https://github.com/everythingshyam/personal-blog-mern)

---

## 🚀 Project Features

The application is structured to deliver a fast, content-first user experience across both desktop and mobile viewports:

- **Modern Landing Page:** A clean, engaging introduction summarizing background, skills, and current focus.
- **Projects Showcase:** A dedicated space to feature engineering work, complete with live links, source code, and tech tags.
- **Hobbies & Interests:** A creative pane highlighting personal activities and recreational pursuits outside of technical development.
- **Full-Featured Blog:** A dynamic blogging engine designed for rich-text writing, categories, tags, and rapid loading times.
- **Professional Resume Integration:** An accessible, printable, and downloadable resume module for career and recruiting purposes.
- **Linktree-style Matrix:** A unified bio-link directory consolidating social profiles, professional contact details, and relevant affiliate links in one optimized layout.
- **Adaptive Layout System:** Smooth, responsive user interface with native support for **Light and Dark modes**, featuring high-contrast text accessibility.
- **The "Meta" Page:** A unique behind-the-scenes section detailing the project's architecture, references used during development, and a guide on how to clone and configure the repository to deploy your own version of the blog.

---

## 🛠️ Technologies Used

- **React 19:** Next-generation UI rendering using component architecture.
- **Vite 6:** A fast frontend build tool providing near-instant Hot Module Replacement (HMR).
- **Tailwind CSS v4:** A utility-first CSS framework configured natively through Vite for fast rendering and clean layouts.
- **ESLint:** Code linting and style enforcement.

---

## 💻 Project Setup & Local Development

Because this project uses the latest **Tailwind CSS v4** architecture paired with Vite 6, configuration is simplified. You **no longer need** to run a separate terminal script to watch or build your CSS. The Tailwind compiler plugin runs automatically inside the Vite pipeline.

### 1. Clone the Repository

```bash
git clone [https://github.com/everythingshyam/personal-blog-mern.git](https://github.com/everythingshyam/personal-blog-mern.git)
cd personal-blog-mern
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Once started, the application will be running locally at http://localhost:5173 (or the port displayed in your terminal).

## 📋 Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev` - Starts the local development server with automatic page reloads on changes.

- `npm run build` - Compiles and optimizes the frontend application into production-ready static assets inside the dist folder.

- `npm run lint` - Scans your JavaScript and React files for code quality issues, enforcing clean syntax.

- `npm run preview` - Boots up a local web server to test the production build locally before deploying it.

## 📖 Creating Your Own Blog

This project is built to be a template for others. Complete step-by-step instructions for database connections (MongoDB Atlas), environment variables configuration (`.env`), and production deployment maps will be documented on the live Meta Page as well as here in the README file as development progresses.
