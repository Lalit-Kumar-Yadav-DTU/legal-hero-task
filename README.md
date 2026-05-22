# ⚖️ Legal Work Platform - Hero Section

A modern, highly interactive, and pixel-perfect hero section built for a legal document management platform. This project demonstrates advanced layout techniques, smooth animations, and system-aware theming using the latest React and Next.js ecosystem.

> 🔗 **Live Demo:** [legal-hero-task.vercel.app](https://legal-hero-task.vercel.app/)
> 💻 **Repository:** [GitHub Source Code](https://github.com/Lalit-Kumar-Yadav-DTU/legal-hero-task)

---

## 📸 Previews

### Light Theme
<img width="1919" height="966" alt="Screenshot 2026-05-22 214527" src="https://github.com/user-attachments/assets/f7d4c56e-8786-4ef5-870d-8220d902d645" />


### Dark Theme
<img width="1919" height="966" alt="Screenshot 2026-05-22 214543" src="https://github.com/user-attachments/assets/45a301ad-11cb-44f6-bb8b-dc3ecf384039" />


---

## ✨ Core Features & Implementation Highlights

- **Pixel-Perfect CSS Mastery:** Implements a complex, split-screen layout with an organized-yet-chaotic floating card visualization using absolute positioning and Tailwind CSS.
- **Fluid Animations:** Utilizes **Framer Motion** for smooth entrance sequences, continuous floating idle animations, and interactive hover-scale effects (`zIndex` elevation).
- **System-Aware Dark Mode:** Integrated `next-themes` to seamlessly toggle between a bright, clean light mode and a deep, sophisticated dark mode without hydration errors.
- **Fully Responsive:** Adapts from a sprawling desktop visualization to a clean, highly readable stacked flex-layout on mobile devices.
- **Component Architecture:** Features a highly reusable `FloatingCard` component that accepts dynamic props for icons, variants, rotations, and delays.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React 
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theming:** `next-themes`
- **Deployment:** Vercel

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
git clone [https://github.com/Lalit-Kumar-Yadav-DTU/legal-hero-task.git](https://github.com/Lalit-Kumar-Yadav-DTU/legal-hero-task.git)
cd legal-hero-task
2. Install dependencies
Bash
npm install
3. Run the development server
Bash
npm run dev
Open http://localhost:3000 in your browser to see the application.

```bash

📁 Key File Structure
Plaintext
legal-hero-task/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout & ThemeProvider wrapper
│   │   ├── page.tsx           # Main entry point
│   │   └── globals.css        # Tailwind imports & dark variant configuration
│   ├── components/
│   │   ├── Hero.tsx           # Main layout, positioning logic, and toggle
│   │   ├── FloatingCard.tsx   # Reusable animated card component
│   │   └── ThemeProvider.tsx  # next-themes configuration

```
👨‍💻 Author
Lalit Kumar Yadav, Delhi Technological University DTU ,2026 
Software Engineering

LinkedIn: https://www.linkedin.com/in/lalit-kumar-yadav-75a804297/

GitHub: https://github.com/Lalit-Kumar-Yadav-DTU/legal-hero-task
