# NPM & Dependency Management Guide

This guide explains the technical lifecycle of managing packages in this project, ensuring that your `package.json`, `package-lock.json`, and `node_modules/` stay perfectly synchronized.

## 1. Initializing the Project (`package.json`)

The `package.json` file is the heart of your project. You should create it **before** installing any packages.

*   **How:** Run `npm init -y` in the root directory.
*   **When:** Do this at the very start of a new project.
*   **Why:** It creates a basic manifest that allows `npm` to track the packages you are about to install.

### Manual Additions
Some properties are not added automatically by `npm init` or `npm install`. You must add these manually using a text editor:
*   **`"type": "module"`**: Essential for Vite/VitePress to use modern JavaScript.
*   **`"scripts"`**: Custom commands like `dev` and `build`. `npm` doesn't know which build tool you are using, so you must define these shortcuts yourself.

## 2. Installing Packages Properly

Always use the command line to add new tools. This ensures "The Three-Way Sync."

### The Command: `npm install -D <package-name>`
When you run this command, `npm` performs three actions simultaneously:
1.  **Downloads** the code into `node_modules/`.
2.  **Registers** the package name and version in `package.json`.
3.  **Synchronizes** the `package-lock.json`.

### Why the `-D` flag?
We use `-D` (or `--save-dev`) for every tool in this project (VitePress, Tailwind, TypeScript). This tells `npm` that these are **Construction Tools**, not part of the final "run-time" website.

## 3. The Role of `package-lock.json`

The `package-lock.json` is a massive, auto-generated file that you should **never edit manually**.

*   **What it does:** It records the *exact* version of every tiny sub-dependency (the tools your tools use). 
*   **Why it matters:** It ensures that if you (or a GitHub Action) run `npm install` six months from now, you get the exact same environment, preventing "it works on my machine" bugs.
*   **How to keep it in sync:** Simply use `npm install` or `npm uninstall` commands. `npm` handles the synchronization for you.

## 4. Maintenance & Fresh Starts

### `npm install` (No arguments)
If you delete your `node_modules/` folder or clone the project onto a new computer:
*   **Action:** Run `npm install`.
*   **Result:** `npm` reads your `package.json` and `package-lock.json` and rebuilds your entire `node_modules/` folder to match the recorded state perfectly.

### `npm uninstall <package>`
If you no longer need a tool:
*   **Action:** Run `npm uninstall <package>`.
*   **Result:** It removes the code, deletes the entry in `package.json`, and cleans up the `package-lock.json` in one step.

## 5. Summary Checklist for Success
1.  **Start** with `npm init -y`.
2.  **Add** `"type": "module"` and your `scripts` to `package.json`.
3.  **Install** tools using `npm install -D <package>`.
4.  **Commit** both `package.json` and `package-lock.json` to Git (but **ignore** `node_modules/`).
