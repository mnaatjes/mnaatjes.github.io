# Deployment: GitHub Actions & CI/CD

To maintain a professional, automated, and secure deployment of the `github.io` site, a GitHub Actions CI/CD pipeline is implemented.

## 1. Overview: The Build & Deploy Workflow

GitHub Actions allows the site to be built and deployed automatically whenever changes are pushed to specific branches (`main` or `ref`). This ensures that the published site is always in sync with the source code, while keeping the web-root clean of source files.

## 2. The `deploy.yml` Configuration

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
