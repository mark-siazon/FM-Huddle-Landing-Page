# FM Huddle Landing Page - GitHub Pages Deployment

This is the **GitHub Pages deployment branch** for the **FM Huddle Landing Page** project. The production build of the application is hosted and served from this branch.

## 🚀 Live Demo

You can view the live deployment here:  
[https://mark-siazon.github.io/FM-Huddle-Landing-Page/](https://mark-siazon.github.io/FM-Huddle-Landing-Page/)

## 📂 Branch Structure

- **`main` Branch**: Contains the source code for development.
- **`gh-pages` Branch**: Contains the production-ready files for deployment to GitHub Pages.

## 🛠 Deployment Process

### Build and Deploy

To deploy the app to GitHub Pages:

1. Switch to the `main` branch:

   ```bash
   git checkout main
   ```

2. Build the production files:

```bash
npm run build
```

3. Deploy the dist folder to the gh-pages branch:

```bash
npm run deploy
```

4. Configure settings in github pages set the branch to gh-pages /root, then save

## Deployment Scripts

- The deployment is handled using the gh-pages package. The following scripts are configured in package.json:
- predeploy: Runs npm run build to generate the production build.
- deploy: Publishes the contents of the dist folder to the gh-pages branch.

## 📝 Project Details

This project is a solution to the Huddle Landing Page challenge from Frontend Mentor. It demonstrates responsive web design using React, Tailwind CSS, and TypeScri

## 📄 License

This project is licensed under the MIT License.
