<a name="readme-top"></a>

# Jotion - The connected workspace where better, faster work happens.

![Jotion - The connected workspace where better, faster work happens.](/.github/images/img_main.png "Jotion - The connected workspace where better, faster work happens.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/notion-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/notion-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/notion-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/notion-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/notion-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/notion-clone/pulls "GitHub pull requests")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://app-jotion.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
notion-clone/
  |- app/
    |-- (main)/
        |--- _components/
        |--- (routes)/documents/[documentId]/
        |--- layout.tsx
    |-- (marketing)/coures/[courseId]/
        |--- _components/
        |--- layout.tsx
        |--- page.tsx
    |-- (public)/
        |--- (routes)/preview/[documentId]/
        |--- layout.tsx
    |-- api/edgestore/[...edgestore]/
        |--- route.ts
    |-- error.tsx
    |-- globals.css
    |-- layout.tsx
    |-- not-found.tsx
  |- components/
    |-- modals/
    |-- providers/
    |-- ui/
    |-- cover.tsx
    |-- editor.tsx
    |-- icon-picker.tsx
    |-- mode-toggle.tsx
    |-- search-command.tsx
    |-- single-image-dropzone.tsx
    |-- spinner.tsx
    |-- toolbar.tsx
  |- config/
    |-- index.ts
  |- convex/
    |-- _generated/
    |-- .env.example
    |-- auth.config.js
    |-- documents.ts
    |-- environment.d.ts
    |-- schema.ts
    |-- tsconfig.json
  |- hooks/
    |-- use-cover-image.ts
    |-- use-origin.ts
    |-- use-scroll-top.ts
    |-- use-search.ts
    |-- use-settings.ts
  |- lib/
    |-- edgestore.ts
    |-- db.ts
  |- public/
  |- .env.example
  |- .env.local
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** and **convex** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:<deployment-name> # team: <team-name>, project: <project-name>

# convex public url
NEXT_PUBLIC_CONVEX_URL="<your-convex-url>"

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# edge store keys
EDGE_STORE_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
EDGE_STORE_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. Contents of `convex/.env.local`:

```env
# convex/.env.local

# clerk issuer url (go to your clerk dashboard > JWT Templates > New template > Convex > Save and copy your Issuer URL)
CLERK_ISSUER_URL=<your-clerk-issuer-url>
```

6. Convex Deployment

- Visit the Convex website: [https://convex.dev](https://convex.dev)
- Log in to your Convex account or sign up if you don't have one.
- Once logged in, navigate to the "Deployments" section.
- Create a new deployment or select an existing one.
- Replace `<deployment-name>`, `<team-name>`, and `<project-name>` in the `.env.local` file with your Convex deployment details.
- In the Convex dashboard, find the public URL associated with your deployment.
- Replace `<your-convex-url>` in the `.env.local` file with your Convex public URL.

7. Clerk Authentication Keys

- Visit the Clerk dashboard: [https://clerk.dev](https://clerk.dev)
- Log in to your Clerk account or sign up if you don't have one.
- Go to the "Projects" section and select your project.
- Navigate to the "API Keys" tab.
- Copy the "Publishable Key" and replace `<your-clerk-publishable-key>` in the `.env.local` file with the copied key.
- Copy the "Secret Key" and replace `<your-clerk-secret-key>` in the `.env.local` file with the copied key.
- Go to your Clerk dashboard > JWT Templates > New template > Convex > Save and copy your Issuer URL.
- Replace `<your-clerk-issuer-url>` with the url that you copied.
- Also, go to Convex dashboard > Settings > Environment Variables > Add `CLERK_ISSUER_URL` variable with value that you copied.

8. Edge Store Keys

- If you are using an Edge Store service, navigate to the respective dashboard or service provider.
- Obtain the "Access Key" and "Secret Key" for your Edge Store.
- Replace `<your-edge-store-access-key>` and `<your-edge-store-secret-key>` in the `.env.local` file with your Edge Store keys.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` in one tab and `npx convex dev` in another tab.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Create new pages](/.github/images/img2.png "Create new pages")

![Notion-styled editor](/.github/images/img3.png "Notion-styled editor")

![Search pages](/.github/images/img4.png "Search pages")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")

## :wrench: Stats

[![Stats for Jotion](/.github/images/stats.svg "Stats for Jotion")](https://pagespeed.web.dev/analysis/https-app-jotion-vercel-app/3wh1wtqo2u?form_factor=mobile "Stats for Jotion")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Jotion.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
- [@blocknote/core](https://www.npmjs.com/package/@blocknote/core): ^0.9.4
- [@blocknote/react](https://www.npmjs.com/package/@blocknote/react): ^0.9.4
- [@clerk/clerk-react](https://www.npmjs.com/package/@clerk/clerk-react): ^4.30.2
- [@clerk/themes](https://www.npmjs.com/package/@clerk/themes): ^1.7.9
- [@edgestore/react](https://www.npmjs.com/package/@edgestore/react): ^0.1.6
- [@edgestore/server](https://www.npmjs.com/package/@edgestore/server): ^0.1.6
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu): ^2.0.6
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.0.2
- [@radix-ui/react-popover](https://www.npmjs.com/package/@radix-ui/react-popover): ^1.0.7
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [cmdk](https://www.npmjs.com/package/cmdk): ^0.2.0
- [convex](https://www.npmjs.com/package/convex): ^1.7.1
- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react): ^4.6.7
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.307.0
- [next](https://www.npmjs.com/package/next): 14.0.4
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.2.1
- [react](https://www.npmjs.com/package/react): ^18
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-dropzone](https://www.npmjs.com/package/react-dropzone): ^14.2.3
- [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize): ^8.5.3
- [sonner](https://www.npmjs.com/package/sonner): ^1.3.1
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts): ^2.9.1
- [zod](https://www.npmjs.com/package/zod): ^3.22.4
- [zustand](https://www.npmjs.com/package/zustand): ^4.4.7
- [@types/node](https://www.npmjs.com/package/@types/node): ^20
- [@types/react](https://www.npmjs.com/package/@types/react): ^18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.0.1
- [eslint](https://www.npmjs.com/package/eslint): ^8
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 14.0.4
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [typescript](https://www.npmjs.com/package/typescript): ^5

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fnotion-clone "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/notion-clone&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/notion-clone&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/notion-clone&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/notion-clone&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
