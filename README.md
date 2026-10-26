# Satyam Yadav — Cybersecurity & AI Developer Portfolio

A futuristic, high-performance, single-page portfolio engineered for **Satyam Yadav** (Aspiring Full-Stack Web Developer & Cybersecurity / AI Enthusiast).

Featuring a **dark cyber command center aesthetic**, **live GitHub REST API integration**, an **interactive browser-based hacker terminal simulator**, a **lightweight 3D cyber wireframe globe**, **in-depth project case study modals**, and **integrated cybersecurity and social communication channels**.

---

## ⚡ Key Highlights & Features

### 1. Identity & Visual Design System
- **Deep Cyber Palette**: Deep black/green background (`#07100C`), glowing neon green accents (`#65FF9B`), forest green panels (`#0D1913`), and subtle scanline/grid HUD overlays.
- **Modern Typography**: Space Grotesk for bold modern sans-serif headings paired with JetBrains Mono and DM Mono for terminal output.
- **Cyber Command Center Telemetry**: Live ping latency simulation, status pills, verified repository count, and animated role badge (`> Full-Stack Web & Cybersecurity`).

### 2. Live GitHub REST API Integration
- **Dynamic Repository Sync**: Connects directly to the official GitHub API (`https://api.github.com/users/Cyberboysatyam/repos?sort=updated&per_page=100`).
- **Interactive Controls**:
  - Instant live keyword search by name, description, or topic.
  - Dynamic language filter chips (`All`, `Python`, `Shell`, `HTML`, etc.) generated automatically from public repositories.
  - Multi-criteria sorting: *Recently Updated*, *Most Stars (★)*, *Alphabetical (A-Z)*, *Most Forks*.
- **Reliable Fallbacks & Rate Limiting**:
  - Handles GitHub unauthenticated API rate limits (60 req/hr) gracefully by serving a verified repository snapshot.
  - Interactive **Sync Repos** button with loading feedback.
  - Shimmering cyber skeleton loading cards during network requests.

### 3. Interactive Hacker Terminal Simulator
- **Simulated Browser Shell**:
  - Built-in command prompt: `satyam@dev:~$`
  - Quick-command shortcut chips for mobile & 1-click execution: `help`, `about`, `skills`, `projects`, `tryhackme`, `instagram`, `whatsapp`, `github`, `contact`, `resume`, `whoami`, `matrix`, `clear`.
  - Command history navigation with **Arrow Up** and **Arrow Down** keys.
  - Full keyboard accessibility and mobile touch support.
  - Safe client-side sandbox strictly confined to browser state (no shell/OS access).

### 4. Verified Project Case Studies & Interactive Modals
- **Verified Repositories**:
  - `Whatsapp-Banner`: Python 3 red-team terminal utility for Termux & Linux (**28 Stars**).
  - `Brute-X`: Shell script exploring credential auditing research, password list detection, and network error handling (**1 Star**).
  - `SimpleVenom 1.2`: Shell payload generation automation utility (**1 Star**).
  - `Webpenal`: Responsive frontend web dashboard and control panel layout.
- **Architectural Concepts**:
  - `Nexus AI`: Conversational assistant client architecture and prompt template design.
  - `OSINT Tool`: Passive open-source reconnaissance and public domain discovery methodology.
- **Modal View Details**:
  - Each case study features an ASCII/diagram architecture workflow, verified technologies list, confirmed features, engineering lessons learned, and direct links to source code on GitHub.

### 5. 3D Cyber Wireframe Globe Canvas
- **High-Performance Pure Canvas**:
  - 3D rotating sphere constructed of geodesic rings and interconnected cyber network node points with depth attenuation.
  - Mouse-interactive: drag to rotate, hover parallax.
  - Resource-conscious: automatically pauses rendering when scrolled offscreen via `IntersectionObserver`.
  - Fully respects `prefers-reduced-motion: reduce`.

### 6. Education, Experience & Verified Communication Channels
- **Education Section**: Transparent, professional status: **Diploma in Information Technology (IT) — 2nd Year Dropout** (stepped away to pursue self-directed, practical hands-on software and security engineering).
- **Experience**: Highlights entry-level / fresher profile with strong drive for junior full-stack web and cybersecurity roles.
- **Verified Profiles & Social Area**:
  - **GitHub**: [github.com/Cyberboysatyam](https://github.com/Cyberboysatyam)
  - **Email**: [satyam.cybersec@gmail.com](mailto:satyam.cybersec@gmail.com) with 1-click copy action
  - **TryHackMe**: [TryHackMe — IllusionSatyam](https://tryhackme.com/p/IllusionSatyam)
  - **Instagram**: [@sudo.soul.rooted](https://www.instagram.com/sudo.soul.rooted/)
  - **WhatsApp**: [+91 8780892641](https://wa.me/918780892641?text=Hi%20Satyam%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.) with dedicated chat button and floating WhatsApp icon in the bottom-right corner.

---

## 📁 File Structure

```text
Satyam_Yadav_Portfolio_Website/
├── index.html        # Complete semantic HTML5 structure with accessible landmarks & modals
├── styles.css        # Pure Vanilla CSS3 design system, responsive HUD, & cyber styling
├── script.js         # Modular JavaScript engine (3D globe, terminal, GitHub API, modal dialogs)
├── resume.pdf        # Verified resume download asset
├── README.md         # Documentation & deployment guidelines
└── Satyam_Yadav_Portfolio_Website.zip # Complete deployable project archive
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Opening
Simply double-click `index.html` or open it in any modern browser (Chrome, Firefox, Safari, Edge, Brave).

### Option 2: Python HTTP Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Node.js (npx serve or live-server)
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (Free & Instant)
1. Push this repository to GitHub under your account `Cyberboysatyam`.
2. Go to your repository **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Within 1–2 minutes, your website will be live at:
   `https://cyberboysatyam.github.io/<repo-name>/`

### Deploy to Vercel / Netlify
- Drag and drop the project folder directly into the **Netlify Drop** or **Vercel** dashboard for zero-configuration instant global CDN deployment.

---

## 🔒 Security & Verification Notice

- **Ethical Integrity**: All security tools and shell scripts referenced are documented strictly for educational research, security auditing exercises, and defensive posture testing.
- **Accurate Claims**: Education, profile links, and project repositories represent verified authentic information without fictitious statistics or exaggerated credentials.
- **No Private Secrets**: All API requests utilize public read-only GitHub endpoints without exposing credentials or tokens.
