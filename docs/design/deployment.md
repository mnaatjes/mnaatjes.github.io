# Deployment: GitHub Actions & CI/CD

To maintain a professional, automated, and secure deployment of the `github.io` site, a GitHub Actions CI/CD pipeline is implemented.

## 1. Overview: The Build & Deploy Workflow

To understand how a modern static site is delivered, it is helpful to distinguish between the **Builder** and the **Host**.

### The "Smart" Builder (GitHub Actions)
GitHub Actions is a powerful, temporary virtual machine that GitHub spins up to run scripts. It can install software (like Node.js and npm), run complex build commands, and transform your Markdown into optimized HTML. This is where the "heavy lifting" happens.

### The "Dumb" Host (GitHub Pages)
GitHub Pages is a high-performance, static file server. It is "dumb" in that it cannot run scripts, execute databases, or process code. It only knows how to serve finished files to a user's browser. This makes it incredibly fast and secure.

### The "Hand-off" Process
The `.github/workflows/deploy.yml` file acts as the bridge between these two environments:
1.  **The Kitchen (Actions):** GitHub Actions "cooks" your source code (Markdown, Vue, Tailwind) into a finished "meal" (Static HTML/CSS/JS).
2.  **The Serving Window (Pages):** Once ready, Actions "hands off" only the finished `dist/` folder to the GitHub Pages hosting environment.

## 2. One Repository, Multiple Roles

Your `github.io` repository acts as a single container for three distinct functions:

*   **The Source:** Your raw Markdown, Vue components, and internal docs (`/docs` and `/src`).
*   **The Brain:** The automation logic stored in `.github/workflows/`. Simply having this directory "unlocks" GitHub Actions for the repository.
*   **The Result:** The hidden environment that hosts the final, public-facing website.

This architecture ensures that your source code stays private (or at least separate), while the world only ever sees a high-performance, static version of your portfolio.

## 3. The `deploy.yml` Configuration

The workflow is defined in `.github/workflows/deploy.yml`. It consists of two main jobs: **build** and **deploy**.

### Key Properties & Sections:

*   **`on: push: branches: [main, ref]`:** Specifies that the workflow should run on every push to the `main` or `ref` branches.
*   **`permissions: pages: write, id-token: write`:** Grants the workflow the necessary permissions to write to GitHub Pages and manage authentication.
*   **`jobs: build`:**
    *   **`Checkout`:** Uses the `actions/checkout@v4` action to pull the latest code from the repository.
    *   **`Setup Node`:** Uses `actions/setup-node@v4` to install the required version of Node.js and cache dependencies for faster builds.
    *   **`Install dependencies`:** Runs `npm install` to install all project-related libraries.
    *   **`Build with VitePress`:** Runs `npm run build`, which triggers VitePress to generate the static HTML/CSS/JS files.
    *   **`Upload artifact`:** This is the most critical step. It uses `actions/upload-pages-artifact@v3` to package **only** the contents of the `src/.vitepress/dist` directory. This ensures that only the compiled site, and not the source code or internal docs, is deployed to the web-root.
*   **`jobs: deploy`:**
    *   **`environment`:** Sets the deployment environment to `github-pages`.
    *   **`Deploy to GitHub Pages`:** Uses the `actions/deploy-pages@v4` action to send the packaged artifact to the GitHub Pages hosting environment.

## 3. Implementation Steps

1.  Create the `.github/workflows/deploy.yml` file with the specified content.
2.  Navigate to the repository settings on GitHub.com.
3.  Go to **Settings** > **Pages**.
4.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
