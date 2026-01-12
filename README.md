



----------------------Product-dashboard-Explorer-------------


Product Dashboard Explorer

A modern Product Dashboard application built using Next.js that allows users to browse products, search by name, filter by category, and manage a favorites list with a clean and responsive user interface.

https://github.com/veeresh-4/Product-Dashboard-Explorer.git

***Features Implemented**

 Product listing fetched from a public API

 Search products by name

 Filter products by category

 Add and remove products from Favorites

 Favorites persisted using browser localStorage

 Responsive layout for desktop and mobile

 Dynamic routing for product detail pages

 Fast client-side rendering with Next.js App Router


 ***Tech Stack***

Next.js (App Router)

React

TypeScript

Tailwind CSS

Fake Store API

LocalStorage for favorites

Git & GitHub for version control

//Setup Instructions**

Follow these steps to run the project locally:
//Clone the Repository

git clone https://github.com/veeresh-4/Product-Dashboard-Explorer.git
cd Product-Dashboard-Explorer

//Install Dependencies
npm install

//Run the Development Server
npm run dev


//Open your browser and visit:

http://localhost:3000

Project Structure
app/
 ├── components/        # Reusable UI components (Header, etc.)
 ├── products/          # Dynamic product detail pages
 ├── types/             # TypeScript type definitions
 ├── page.tsx           # Home page
 └── layout.tsx         # Application layout

**Assumptions & Trade-offs****

Favorites are stored in localStorage (no backend persistence)

Product data depends on availability of the public Fake Store API

Authentication and user accounts are not implemented (out of scope)

Focus was placed on core functionality and clean UI rather than heavy animations

Client-side state management used instead of global store for simplicity


 ***Commit History***

The repository maintains a meaningful and structured commit history, including:

Initial project setup

Product API integration

Favorites functionality

Search and category filters

UI layout and responsiveness improvements


***Author****

Veeresh Bardapure
 Frontend Developer
Skilled in Next.js, React, TypeScript, and Typescript, Tailwind.css,















This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






