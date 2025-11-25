# 💰 Expense Tracker

A modern, full-stack expense and budget tracking application built with **Next.js** and leveraging **Neon Serverless Postgres** for user-specific data management and Clerk for secure authentication. Visualize your finances with detailed dashboard graphs and maintain control over your spending.

| Live Demo | Frontend | Styling | Backend | Database | Auth | ORM |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://expense-tracker-kappa-rouge.vercel.app/) | [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) | [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) | [![Neon DB](https://img.shields.io/badge/Neon%20DB-40A9FF?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/) | [![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/) | [![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-A986F9?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/) |

***

## ✨ Key Features

Expense Tracker provides all the tools necessary for modern, secure, and insightful financial monitoring:

* 🔒 **Secure Authentication:** Seamless user login and management powered by **Clerk**.
* 👤 **User-Specific Data:** All budgets and expenses are stored securely and isolated based on the authenticated user.
* 📊 **Dashboard Visualization:** An intuitive dashboard displays a clear graph visualizing spending trends over time.
* 💵 **Budget Tracking:** Easily create, manage, and monitor spending against predefined budgets.
* 💸 **Expense Logging:** Quick and simple interface for logging daily expenses.
* 🎨 **Modern UI:** Built with **Tailwind CSS** for a clean, responsive, and aesthetically pleasing user experience.

***

## 🛠️ Tech Stack

This project utilizes the T3 stack principles combined with modern full-stack technologies:

* **Frontend Framework:** Next.js (with React)
* **Styling:** Tailwind CSS
* **Database:** Neon (Serverless PostgreSQL)
* **ORM:** Drizzle ORM
* **Authentication:** Clerk
* **Deployment:** Vercel

***

## 🚀 Installation & Local Setup

Follow these steps to set up the Expense Tracker application for local development.

### Prerequisites

* Node.js (v18+)
* npm or yarn
* A Neon account for a PostgreSQL database instance.
* A Clerk account for managing authentication keys.

### Step 1: Clone the Repository

```bash
git clone [https://github.com/Pi-Pika/Expense-Tracker.git](https://github.com/Pi-Pika/Expense-Tracker.git)
cd Expense-Tracker
```
Step 2: Install Dependencies
Install the required packages using your preferred package manager:

```bash

npm install
# OR
yarn install
```
Step 3: Environment Variables
Create a file named .env.local in the root directory and populate it with your keys.

Code snippet

# Clerk Keys
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

# Neon/Drizzle Database URL
```bash
DATABASE_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"
```
Step 4: Run Database Migrations
Use Drizzle Kit to push your schema to your Neon database:

```bash

npx drizzle-kit push:pg
```
Step 5: Run the Application
Start the development server:

```bash

npm run dev
# OR
yarn dev
```
Open http://localhost:3000 in your browser.

🧑‍💻 Usage
To begin tracking expenses, you must first log in using the Clerk authentication flow. All data (budgets, expenses, and dashboard graphs) are strictly tied to your authenticated user ID, ensuring privacy and personal financial management.

🤝 Contributing
Contributions are highly appreciated! Whether you are fixing a bug, adding a new feature, or improving documentation, please feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add amazing feature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.


📞 Contact
Project Link: https://github.com/Pi-Pika/Expense-Tracker

Developer: @Pi-PikaDeveloper: [@Pi-Pika](https://sites.google.com/diu.edu.bd/piash5606/home?authuser=3)
