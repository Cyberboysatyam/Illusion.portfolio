/**
 * Satyam Yadav — Futuristic Developer & Cybersecurity Portfolio
 * Core Client-Side Application Engine (Vanilla JS, Zero Dependencies)
 * 
 * Modules:
 * 1. 3D Cyber Wireframe Globe & Network Nodes Canvas Engine
 * 2. Interactive Browser Terminal Simulator (Client-side Sandbox)
 * 3. Live GitHub REST API Integration & Dynamic Repositories
 * 4. Project Case Studies Modal & Workflow Diagrams
 * 5. Role Typing Text Animator
 * 6. Subtle 3D Card Tilt & Parallax Physics
 * 7. System Telemetry & Utility Handlers (Copy, Mobile Nav, Scrollspy)
 */

(function () {
  'use strict';

  // ==========================================================================
  // GLOBAL CONSTANTS & VERIFIED PROJECT DATA
  // ==========================================================================
  const GITHUB_USERNAME = 'Cyberboysatyam';
  const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
  const RESUME_FILENAME = 'resume.pdf';
  const CONTACT_EMAIL = 'satyam.cybersec@gmail.com';
  const TRYHACKME_URL = 'https://tryhackme.com/p/IllusionSatyam';
  const INSTAGRAM_URL = 'https://www.instagram.com/sudo.soul.rooted/';
  const INSTAGRAM_HANDLE = '@sudo.soul.rooted';
  const WHATSAPP_URL = 'https://wa.me/918780892641?text=Hi%20Satyam%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';
  const WHATSAPP_NUMBER = '+91 8780892641';

  // Verified snapshot dataset to ensure 100% offline & rate-limit resilience
  const VERIFIED_REPOSITORIES_FALLBACK = [
    {
      name: 'Whatsapp-Banner',
      html_url: 'https://github.com/Cyberboysatyam/Whatsapp-Banner',
      description: 'The tool Named "Whatsapp Lock Mini Tool" is designed for Cyber Crimes [Red Team] education. Works on Termux/Linux.',
      language: 'Python',
      stargazers_count: 28,
      forks_count: 0,
      updated_at: '2026-03-12T10:20:00Z'
    },
    {
      name: 'Brute-X',
      html_url: 'https://github.com/Cyberboysatyam/Brute-X',
      description: 'Powerful and versatile brute-force auditing research script with password list detection and loading error handling.',
      language: 'Shell',
      stargazers_count: 1,
      forks_count: 0,
      updated_at: '2025-11-04T15:30:00Z'
    },
    {
      name: 'simplevenom1.2',
      html_url: 'https://github.com/Cyberboysatyam/simplevenom1.2',
      description: 'Upgraded version of simplevenom payload automation script for educational cybersecurity lab testing.',
      language: 'Shell',
      stargazers_count: 1,
      forks_count: 0,
      updated_at: '2025-09-18T08:45:00Z'
    },
    {
      name: 'webpenal',
      html_url: 'https://github.com/Cyberboysatyam/webpenal',
      description: 'Web-based control panel and remote dashboard layout interface hosted on GitHub Pages.',
      language: 'HTML',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2025-08-10T12:00:00Z'
    },
    {
      name: 'IllusionxRAT',
      html_url: 'https://github.com/Cyberboysatyam/IllusionxRAT',
      description: 'Remote access tool control panel interface prototype designed for security lab testing.',
      language: 'HTML',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2025-07-22T14:10:00Z'
    },
    {
      name: 'illuion_fun',
      html_url: 'https://github.com/Cyberboysatyam/illuion_fun',
      description: 'Interactive web frontend experiment and prank webpage demonstration hosted on GitHub Pages.',
      language: 'HTML',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2025-06-15T09:30:00Z'
    }
  ];

  // In-depth Case Studies Database
  const CASE_STUDIES_DATA = {
    'whatsapp-banner': {
      title: 'Whatsapp-Banner (Lock Mini Tool)',
      badge: '● CONFIRMED REPOSITORY',
      stars: '★ 28 Stars on GitHub',
      diagram: 
`[User Terminal CLI (Termux / Linux)]
         │
         ▼
[Environment & Package Verification]
         │ (Installs: git, python3)
         ▼
[Modular Red-Team Script Routine]
         │
         ▼
[Defensive Security Lab & Educational Testing]`,
      overview: 'A lightweight, portable Python 3 automation script built for Linux distributions and Termux mobile environments. Created to demonstrate red-team penetration testing concepts and automated terminal execution pipelines in security labs.',
      features: [
        'Native Python 3 command-line execution with minimal external overhead',
        'Cross-platform compatibility across standard Linux systems (Debian, Ubuntu) and Android Termux',
        'Modular terminal menus with clean error trapping and parameter validation',
        'Self-documenting setup steps for reproducible security lab configurations',
        'Explicit educational disclaimers emphasizing authorized use only'
      ],
      technologies: ['Python 3', 'Linux CLI', 'Termux Environment', 'Git Version Control', 'Shell Automation'],
      lessons: 'Building for mobile Termux environments requires solving constrained Android sandboxing and avoiding heavy C-extension packages. Emphasized pure standard-library Python code for maximum portability.',
      sourceUrl: 'https://github.com/Cyberboysatyam/Whatsapp-Banner',
      status: 'Repository Confirmed · Active on GitHub'
    },
    'brute-x': {
      title: 'Brute-X (Credential Auditing Script)',
      badge: '● CONFIRMED REPOSITORY',
      stars: '★ 1 Star on GitHub',
      diagram:
`[Command Execution: bash BruteX]
         │
         ▼
[Target & Wordlist File Detection]
         │ (Validates list existence & encoding)
         ▼
[Network Dispatcher & Error Handler]
         │ (Handles slow response & connection drops)
         ▼
[Audit Logging & Terminal Reporting]`,
      overview: 'A versatile Bash/Shell script designed to explore authentication flow auditing, credential list parsing, and robust error recovery routines across command-line interfaces.',
      features: [
        'Automated password list file detection and readability verification',
        'Network loading error handling routines to prevent hung execution loops',
        'Lightweight bash shell implementation with zero bloated runtime dependencies',
        'Interactive menu system designed for quick terminal parameter tuning',
        'Defensive auditing workflow to test password policy robustness'
      ],
      technologies: ['Bash', 'Shell Scripting', 'Linux Terminal', 'Termux', 'cURL & Networking'],
      lessons: 'Shell scripts handling network requests must implement explicit timeouts and signal traps (SIGINT/SIGTERM) to avoid leaving orphaned child processes in background subshells.',
      sourceUrl: 'https://github.com/Cyberboysatyam/Brute-X',
      status: 'Repository Confirmed · Active on GitHub'
    },
    'simplevenom': {
      title: 'SimpleVenom 1.2 (Payload Automation Utility)',
      badge: '● CONFIRMED REPOSITORY',
      stars: '★ 1 Star on GitHub',
      diagram:
`[Execution: bash ./simplevenom.sh]
         │
         ▼
[Dependency Check (Metasploit / msfvenom)]
         │
         ▼
[Interactive Payload Profile Selection]
         │
         ▼
[Automated Payload Formulation & Output]`,
      overview: 'An upgraded shell automation utility created to simplify payload creation workflows for authorized penetration testing, vulnerability lab setups, and Metasploit integration.',
      features: [
        'Upgraded automated execution pipeline (bash ./simplevenom.sh)',
        'Preset payload configuration profiles for rapid testing',
        'Prerequisite environment validation to verify installed toolchains',
        'Designed strictly for educational demonstrations and ethical security coursework'
      ],
      technologies: ['Bash', 'Shell Scripting', 'Linux Administration', 'Payload Concepts', 'Metasploit Architecture'],
      lessons: 'Repetitive command-line parameters in security tooling can lead to manual typos. Scripted automation templates provide deterministic and reproducible results during lab assessments.',
      sourceUrl: 'https://github.com/Cyberboysatyam/simplevenom1.2',
      status: 'Repository Confirmed · Active on GitHub'
    },
    'nexus-ai': {
      title: 'Nexus AI (AI Assistant Architecture Concept)',
      badge: '● ARCHITECTURE CONCEPT',
      stars: 'In Active Design Phase',
      diagram:
`[Client Web UI / Terminal Frontend]
         │
         ▼
[Context & Prompt Orchestration Engine]
         │ (Formats system prompts & history)
         ▼
[LLM Inference API Gateway]
         │
         ▼
[Stream Response Renderer & Sanitizer]`,
      overview: 'A personal exploration into artificial intelligence architectures, examining how frontend client interfaces can coordinate conversational context, system prompts, and developer utility tools.',
      features: [
        'Modular conversational UI design concepts with cyber aesthetic themes',
        'Structured prompt engineering templates for developer and code assistance',
        'Client-side state management prototype for maintaining conversation turns',
        'Public repository documentation to be released alongside future stable prototypes'
      ],
      technologies: ['Artificial Intelligence', 'Prompt Engineering', 'JavaScript', 'REST APIs', 'To Be Documented'],
      lessons: 'Designing client-side interfaces for AI requires careful streaming UI paradigms, token consumption monitoring, and defensive sanitization of model outputs to prevent prompt injections.',
      sourceUrl: 'https://github.com/Cyberboysatyam',
      status: 'Concept Architecture · To Be Documented'
    },
    'osint-tool': {
      title: 'OSINT Investigation Tool (Workflow Concept)',
      badge: '● RESEARCH PROTOTYPE',
      stars: 'In Research Phase',
      diagram:
`[Target Identifier: Domain / Network Asset]
         │
         ▼
[Public Source Harvester] ──> (DNS, WHOIS, Public Endpoints)
         │
         ▼
[Data Normalization & Deduplication]
         │
         ▼
[Structured Intelligence Reconnaissance Report]`,
      overview: 'A research methodology and workflow concept focused on ethical open-source intelligence (OSINT) gathering, analyzing how public records and attack surface footprints can be mapped defensively.',
      features: [
        'Passive reconnaissance workflows mapping public DNS records and subdomains',
        'Data normalization pipeline to synthesize disparate public intelligence sources',
        'Strict ethical guidelines restricting data collection to authorized public records',
        'Codebase undergoing internal security review prior to repository publication'
      ],
      technologies: ['OSINT Methodologies', 'Python / Shell', 'DNS Protocols', 'Public APIs', 'To Be Documented'],
      lessons: 'Passive OSINT workflows must strictly adhere to rate limits, avoid triggering active alarms on target assets, and sanitize aggregated data to maintain confidentiality.',
      sourceUrl: 'https://github.com/Cyberboysatyam',
      status: 'Methodology Documented · To Be Documented'
    },
    'webpenal': {
      title: 'Webpenal & Frontend Projects',
      badge: '● CONFIRMED REPOSITORY',
      stars: 'Frontend UI Dashboard',
      diagram:
`[Web Browser Client]
         │
         ▼
[Modular CSS Design Tokens & Grid Layout]
         │
         ▼
[Vanilla JavaScript Event Handlers]
         │
         ▼
[Responsive Multi-Device Presentation]`,
      overview: 'Frontend web interfaces and control panel prototypes investigating clean dashboard architectures, remote management UI layouts, and zero-dependency responsive design.',
      features: [
        'Structured web control panel layout featuring dedicated status indicators',
        'Mobile-friendly responsive CSS design system utilizing Flexbox and Grid',
        'High-performance vanilla HTML5 and CSS3 with zero framework bloat',
        'Deployed directly on GitHub Pages for live testing and preview'
      ],
      technologies: ['HTML5 Semantic', 'CSS3 Layouts', 'Vanilla JavaScript', 'GitHub Pages'],
      lessons: 'Mastering vanilla web technologies without heavyweight frameworks produces lightning-fast load times, exceptional maintainability, and total control over layout mechanics.',
      sourceUrl: 'https://github.com/Cyberboysatyam/webpenal',
      status: 'Repository Confirmed · Active on GitHub'
    }
  };

  // Language badge color mapping
  const LANG_COLORS = {
    'Python': '#3572A5',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'JavaScript': '#f1e05a',
    'CSS': '#563d7c',
    'C': '#555555'
  };

  // ==========================================================================
  // MODULE 1: 3D CYBER NETWORK GLOBE CANVAS ENGINE
  // High-performance Canvas 2D/3D Wireframe with Interconnected Nodes
  // ==========================================================================
  function initCyberGlobe() {
    const canvas = document.getElementById('cyberGlobeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, centerX, centerY, radius;
    let rotationX = 0.2;
    let rotationY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let animFrameId = null;
    let isVisible = true;

    // Build Node Points around a Sphere
    const NODES_COUNT = 44;
    const nodes = [];

    function generateNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODES_COUNT; i++) {
        // Uniform sphere distribution (Fibonacci sphere)
        const y = 1 - (i / (NODES_COUNT - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = 0.1 * i * Math.PI * (3 - Math.sqrt(5)); // Golden angle

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        nodes.push({
          x: x,
          y: y,
          z: z,
          isHub: i % 7 === 0,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(width, height) * 0.42;
    }

    // 3D rotation math
    function project(x, y, z) {
      // Rotate around X axis
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y axis
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Perspective projection
      const fov = 400;
      const scale = fov / (fov + z2 * radius);
      const px = centerX + x2 * radius * scale;
      const py = centerY + y1 * radius * scale;

      return { x: px, y: py, z: z2, scale: scale };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp rotation toward target
      rotationX += (targetRotationX - rotationX) * 0.08;
      rotationY += (targetRotationY - rotationY) * 0.08;

      if (!isDragging && !prefersReducedMotion) {
        targetRotationY += 0.0035;
      }

      // 1. Draw Latitude and Longitude Rings
      ctx.lineWidth = 1;
      const ringLatitudes = [-0.65, -0.3, 0, 0.3, 0.65];
      for (const lat of ringLatitudes) {
        const ringRadius = Math.sqrt(1 - lat * lat);
        ctx.beginPath();
        let first = true;
        for (let a = 0; a <= Math.PI * 2; a += 0.2) {
          const x = Math.cos(a) * ringRadius;
          const z = Math.sin(a) * ringRadius;
          const p = project(x, lat, z);
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = 'rgba(101, 255, 155, 0.08)';
        ctx.stroke();
      }

      // Longitude Meridians
      const meridianAngles = [0, Math.PI / 3, (2 * Math.PI) / 3];
      for (const mAngle of meridianAngles) {
        ctx.beginPath();
        let first = true;
        for (let a = 0; a <= Math.PI * 2; a += 0.2) {
          const y = Math.cos(a);
          const rad = Math.sin(a);
          const x = rad * Math.cos(mAngle);
          const z = rad * Math.sin(mAngle);
          const p = project(x, y, z);
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = 'rgba(101, 255, 155, 0.08)';
        ctx.stroke();
      }

      // 2. Project Nodes and Sort by Z depth
      const projectedNodes = nodes.map(node => {
        const proj = project(node.x, node.y, node.z);
        return {
          ...node,
          px: proj.x,
          py: proj.y,
          pz: proj.z,
          scale: proj.scale
        };
      });

      // 3. Draw Interconnecting Cyber Lines
      ctx.beginPath();
      for (let i = 0; i < projectedNodes.length; i++) {
        const n1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n2 = projectedNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 0.65) {
            // Fade lines that are on the back side of the globe
            const avgZ = (n1.pz + n2.pz) / 2;
            const alpha = Math.max(0.04, (1 - dist3D / 0.65) * (0.35 + avgZ * 0.25));
            ctx.strokeStyle = `rgba(101, 255, 155, ${alpha.toFixed(3)})`;
            ctx.lineWidth = avgZ > 0 ? 1.2 : 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Individual Nodes & Hub Halos
      for (const n of projectedNodes) {
        const depthAlpha = Math.max(0.15, (n.pz + 1) / 2);
        const radiusPt = (n.isHub ? 3.5 : 2) * n.scale;

        // Glow halo for major hubs
        if (n.isHub && n.pz > -0.2) {
          ctx.beginPath();
          ctx.arc(n.px, n.py, radiusPt * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(101, 255, 155, ${(0.18 * depthAlpha).toFixed(3)})`;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(n.px, n.py, radiusPt, 0, Math.PI * 2);
        ctx.fillStyle = n.isHub
          ? `rgba(255, 255, 255, ${depthAlpha.toFixed(2)})`
          : `rgba(101, 255, 155, ${depthAlpha.toFixed(2)})`;
        ctx.fill();
      }

      // Outer Radar Ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(101, 255, 155, 0.16)';
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!prefersReducedMotion && isVisible) {
        animFrameId = requestAnimationFrame(draw);
      }
    }

    // Drag to rotate handlers (Mouse + Touch)
    function onPointerDown(clientX, clientY) {
      isDragging = true;
      lastMouseX = clientX;
      lastMouseY = clientY;
    }

    function onPointerMove(clientX, clientY) {
      if (!isDragging) return;
      const dx = clientX - lastMouseX;
      const dy = clientY - lastMouseY;
      lastMouseX = clientX;
      lastMouseY = clientY;

      targetRotationY += dx * 0.008;
      targetRotationX += dy * 0.008;
      // Clamp vertical tilt
      targetRotationX = Math.max(-1.1, Math.min(1.1, targetRotationX));

      if (prefersReducedMotion) draw();
    }

    function onPointerUp() {
      isDragging = false;
    }

    canvas.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onPointerUp);

    // Touch events for mobile
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onPointerUp);

    // Pause rendering when scrolled out of view to save battery/resources
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animFrameId && !prefersReducedMotion) {
            animFrameId = requestAnimationFrame(draw);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(canvas);
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      if (prefersReducedMotion) draw();
    });

    // Initialize
    generateNodes();
    resizeCanvas();
    draw();
  }

  // ==========================================================================
  // MODULE 2: INTERACTIVE BROWSER TERMINAL SIMULATOR
  // Client-Side Simulated Command Line with Rich Feedback
  // ==========================================================================
  function initTerminalSimulator() {
    const input = document.getElementById('terminalInput');
    const historyOutput = document.getElementById('terminalHistoryOutput');
    const screen = document.getElementById('terminalScreen');
    const btnClear = document.getElementById('btnClearTerminal');
    const btnCopy = document.getElementById('btnCopyTerminal');
    const container = document.getElementById('terminalContainer');
    const chips = document.querySelectorAll('.cmd-chip');

    if (!input || !historyOutput || !screen) return;

    const commandHistory = [];
    let historyIndex = -1;

    // Terminal Commands Dictionary
    const COMMANDS = {
      help: () => {
        return `
<div class="term-line"><span class="term-highlight">AVAILABLE COMMANDS:</span></div>
<div class="term-output-grid">
  <span class="term-output-cmd">help</span>
  <span class="term-output-desc">Display this command cheatsheet</span>
  <span class="term-output-cmd">about</span>
  <span class="term-output-desc">Display Satyam's profile, education &amp; focus</span>
  <span class="term-output-cmd">skills</span>
  <span class="term-output-desc">List verified technical toolkit and skills</span>
  <span class="term-output-cmd">projects</span>
  <span class="term-output-desc">Show verified GitHub repositories and concepts</span>
  <span class="term-output-cmd">tryhackme</span>
  <span class="term-output-desc">Open TryHackMe profile (IllusionSatyam)</span>
  <span class="term-output-cmd">instagram</span>
  <span class="term-output-desc">Open Instagram profile (@sudo.soul.rooted)</span>
  <span class="term-output-cmd">whatsapp</span>
  <span class="term-output-desc">Open WhatsApp chat (+91 8780892641)</span>
  <span class="term-output-cmd">github</span>
  <span class="term-output-desc">Open official GitHub profile (Cyberboysatyam)</span>
  <span class="term-output-cmd">contact</span>
  <span class="term-output-desc">View all direct contact &amp; social channels</span>
  <span class="term-output-cmd">resume</span>
  <span class="term-output-desc">Download Satyam Yadav's resume PDF</span>
  <span class="term-output-cmd">whoami</span>
  <span class="term-output-desc">Display active authenticated profile</span>
  <span class="term-output-cmd">matrix</span>
  <span class="term-output-desc">Stream simulated cyber matrix telemetry</span>
  <span class="term-output-cmd">clear</span>
  <span class="term-output-desc">Clear the terminal screen buffer</span>
</div>`;
      },

      about: () => {
        return `
<div class="term-line"><span class="term-highlight">=== PROFILE DOSSIER: SATYAM YADAV ===</span></div>
<div class="term-line">Identity: <span class="term-prompt">CyberBoy Satyam</span></div>
<div class="term-line">Role: <span class="term-cmd">Aspiring Full-Stack Web Developer · Cybersecurity &amp; AI Enthusiast</span></div>
<div class="term-line">Education: <span class="term-highlight">Diploma in Information Technology (IT) — 2nd Year Dropout</span> (Stepped away to pursue self-directed, practical hands-on engineering).</div>
<div class="term-line">Focus: Combining responsive frontend engineering with defensive security tooling and terminal automation scripts.</div>
<div class="term-line">Location: India · Open to Remote &amp; On-Site Development Opportunities.</div>
<div class="term-line">Philosophy: "Code with Purpose, Hack with Precision."</div>`;
      },

      skills: () => {
        return `
<div class="term-line"><span class="term-highlight">=== VERIFIED TECHNICAL TOOLKIT ===</span></div>
<div class="term-line"><span class="term-prompt">[+] Programming:</span> Python 3, JavaScript (ES6+), HTML5 Semantic, CSS3 / Flexbox / Grid, Bash / Shell Scripting</div>
<div class="term-line"><span class="term-prompt">[+] Environments:</span> Linux (Ubuntu / Debian), Termux (Android CLI), Git / GitHub, VS Code</div>
<div class="term-line"><span class="term-prompt">[+] Security:</span> OSINT Reconnaissance, Red-Team Tooling, Credential Auditing Research, Educational Labs</div>
<div class="term-line"><span class="term-prompt">[+] AI &amp; APIs:</span> Prompt Architecture, REST API Consumption, JSON Parsing, Browser DevTools</div>`;
      },

      projects: () => {
        return `
<div class="term-line"><span class="term-highlight">=== CONFIRMED REPOSITORIES &amp; PROJECTS ===</span></div>
<div class="term-line">1. <span class="term-prompt">Whatsapp-Banner</span> (Python) — Red-team security automation utility for Termux/Linux. <span class="term-highlight">[28 Stars]</span>
   <a href="https://github.com/Cyberboysatyam/Whatsapp-Banner" target="_blank" class="term-link">https://github.com/Cyberboysatyam/Whatsapp-Banner</a></div>
<div class="term-line">2. <span class="term-prompt">Brute-X</span> (Shell) — Credential auditing research script with password list detection. <span class="term-highlight">[1 Star]</span>
   <a href="https://github.com/Cyberboysatyam/Brute-X" target="_blank" class="term-link">https://github.com/Cyberboysatyam/Brute-X</a></div>
<div class="term-line">3. <span class="term-prompt">simplevenom1.2</span> (Shell) — Upgraded payload generation automation script. <span class="term-highlight">[1 Star]</span>
   <a href="https://github.com/Cyberboysatyam/simplevenom1.2" target="_blank" class="term-link">https://github.com/Cyberboysatyam/simplevenom1.2</a></div>
<div class="term-line">4. <span class="term-prompt">webpenal</span> (HTML/JS) — Web-based control panel UI hosted on GitHub Pages.
   <a href="https://github.com/Cyberboysatyam/webpenal" target="_blank" class="term-link">https://github.com/Cyberboysatyam/webpenal</a></div>
<div class="term-line">5. <span class="term-prompt">Nexus AI</span> — AI assistant architecture concept (In design phase).</div>
<div class="term-line">6. <span class="term-prompt">OSINT Tool</span> — Passive open-source intelligence research methodology.</div>
<div class="term-line">Type <span class="term-highlight">'repo &lt;name&gt;'</span> for dedicated case study details.</div>`;
      },

      tryhackme: () => {
        window.open(TRYHACKME_URL, '_blank', 'noopener,noreferrer');
        return `<div class="term-line">Opening TryHackMe profile in new tab: <a href="${TRYHACKME_URL}" target="_blank" class="term-link">TryHackMe — IllusionSatyam ↗</a></div>`;
      },

      instagram: () => {
        window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
        return `<div class="term-line">Opening Instagram profile in new tab: <a href="${INSTAGRAM_URL}" target="_blank" class="term-link">${INSTAGRAM_HANDLE} ↗</a></div>`;
      },

      whatsapp: () => {
        window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
        return `<div class="term-line">Opening WhatsApp direct chat in new tab: <a href="${WHATSAPP_URL}" target="_blank" class="term-link">${WHATSAPP_NUMBER} ↗</a></div>`;
      },

      github: () => {
        window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank', 'noopener,noreferrer');
        return `<div class="term-line">Opening official GitHub profile in new tab: <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="term-link">https://github.com/${GITHUB_USERNAME}</a></div>`;
      },

      contact: () => {
        return `
<div class="term-line"><span class="term-highlight">=== CONTACT &amp; SOCIAL TRANSMISSION CHANNELS ===</span></div>
<div class="term-line">Email: <a href="mailto:${CONTACT_EMAIL}" class="term-link">${CONTACT_EMAIL}</a></div>
<div class="term-line">WhatsApp: <a href="${WHATSAPP_URL}" target="_blank" class="term-link">${WHATSAPP_NUMBER} (Chat on WhatsApp) ↗</a></div>
<div class="term-line">TryHackMe: <a href="${TRYHACKME_URL}" target="_blank" class="term-link">TryHackMe — IllusionSatyam ↗</a></div>
<div class="term-line">Instagram: <a href="${INSTAGRAM_URL}" target="_blank" class="term-link">${INSTAGRAM_HANDLE} ↗</a></div>
<div class="term-line">GitHub Profile: <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="term-link">github.com/${GITHUB_USERNAME} ↗</a></div>
<div class="term-line">Location: India (IST · UTC+05:30) · Open to Remote Opportunities.</div>`;
      },

      resume: () => {
        const link = document.createElement('a');
        link.href = RESUME_FILENAME;
        link.download = 'Satyam_Yadav_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return `<div class="term-line"><span class="term-prompt">[✓]</span> Initiating download of <span class="term-highlight">Satyam_Yadav_Resume.pdf</span>...</div>`;
      },

      whoami: () => {
        return `<div class="term-line">Satyam Yadav (@${GITHUB_USERNAME}) — Aspiring Full-Stack Web Developer &amp; Security Researcher.</div>`;
      },

      clear: () => {
        historyOutput.innerHTML = '';
        return '';
      },

      matrix: () => {
        return `
<div class="term-line" style="color:var(--green); font-family:var(--mono);">
01000011 01011001 01000010 01000101 01010010 01000010 01011001<br>
[CYBER_CORE_ONLINE] // STREAM_ID: 0x8FA4B2 // LATENCY: 24ms<br>
SEC_AUDIT: OK · REPOS_SYNCED: 6 · PROTOCOL: TLS 1.3 · BUFFER: STABLE
</div>`;
      }
    };

    // Execute given raw command string
    function executeCommand(rawInput) {
      const trimmed = rawInput.trim();
      if (!trimmed) return;

      // Save to history
      commandHistory.push(trimmed);
      historyIndex = commandHistory.length;

      // Create history line in output
      const lineContainer = document.createElement('div');
      lineContainer.className = 'term-line';
      lineContainer.innerHTML = `<span class="term-prompt">satyam@dev</span>:<span class="term-path">~</span>$&nbsp;<span class="term-cmd">${escapeHTML(trimmed)}</span>`;
      historyOutput.appendChild(lineContainer);

      // Parse command & args
      const parts = trimmed.split(/\s+/);
      const cmdName = parts[0].toLowerCase();
      const cmdArg = parts.slice(1).join(' ').toLowerCase();

      let outputHTML = '';

      if (cmdName === 'clear') {
        COMMANDS.clear();
      } else if (COMMANDS[cmdName]) {
        outputHTML = COMMANDS[cmdName]();
      } else if (cmdName === 'repo') {
        if (!cmdArg) {
          outputHTML = `<div class="term-line" style="color:var(--yellow);">Usage: repo &lt;name&gt; (e.g., 'repo Whatsapp-Banner' or 'repo Brute-X')</div>`;
        } else {
          // Search in case studies
          const foundKey = Object.keys(CASE_STUDIES_DATA).find(k => 
            k.toLowerCase().includes(cmdArg) || CASE_STUDIES_DATA[k].title.toLowerCase().includes(cmdArg)
          );
          if (foundKey) {
            const data = CASE_STUDIES_DATA[foundKey];
            outputHTML = `
<div class="term-line"><span class="term-highlight">=== CASE STUDY: ${data.title} ===</span></div>
<div class="term-line">Status: <span class="term-prompt">${data.badge}</span> | Stars: <span class="term-highlight">${data.stars}</span></div>
<div class="term-line">Overview: ${data.overview}</div>
<div class="term-line">Source: <a href="${data.sourceUrl}" target="_blank" class="term-link">${data.sourceUrl}</a></div>
<div class="term-line"><button class="btn-case-detail" data-project="${foundKey}" style="margin-top:6px;">Open Full Modal Case Study →</button></div>`;
          } else {
            outputHTML = `<div class="term-line" style="color:var(--red);">Repository '${escapeHTML(cmdArg)}' not found in case study directory. Type 'projects' to see list.</div>`;
          }
        }
      } else if (cmdName === 'date') {
        outputHTML = `<div class="term-line">${new Date().toUTCString()}</div>`;
      } else {
        outputHTML = `<div class="term-line" style="color:var(--red);">Command not found: '${escapeHTML(trimmed)}'. Type <span class="term-prompt">'help'</span> for a list of available commands.</div>`;
      }

      if (outputHTML) {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'term-output';
        resultContainer.innerHTML = outputHTML;
        historyOutput.appendChild(resultContainer);
      }

      // Auto-scroll to bottom of screen
      screen.scrollTop = screen.scrollHeight;
      input.value = '';
    }

    // Input keyboard events
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(input.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          input.value = '';
        }
      }
    });

    // Quick Command Chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.getAttribute('data-cmd');
        if (cmd) {
          input.value = cmd;
          executeCommand(cmd);
          input.focus();
        }
      });
    });

    // Clear Button
    btnClear?.addEventListener('click', () => {
      COMMANDS.clear();
      input.focus();
    });

    // Copy Terminal Text
    btnCopy?.addEventListener('click', () => {
      const fullText = screen.innerText;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast('Terminal output copied to clipboard');
      }).catch(() => {
        showToast('Failed to copy text');
      });
    });

    // Clicking anywhere in the terminal container focuses input
    container.addEventListener('click', (e) => {
      if (!e.target.closest('a') && !e.target.closest('button')) {
        input.focus();
      }
    });
  }

  // ==========================================================================
  // MODULE 3: LIVE GITHUB REST API INTEGRATION
  // Dynamic Repositories, Search, Language Filters, and Sorting
  // ==========================================================================
  function initLiveGitHubIntegration() {
    const reposGrid = document.getElementById('reposGrid');
    const searchInput = document.getElementById('repoSearchInput');
    const sortSelect = document.getElementById('repoSortSelect');
    const filterGroup = document.getElementById('languageFilters');
    const apiStatusText = document.getElementById('apiStatusText');
    const btnSync = document.getElementById('btnSyncRepos');
    const hudRepoCount = document.getElementById('hudRepoCount');

    if (!reposGrid) return;

    let allRepos = [];
    let currentFilterLang = 'all';
    let currentSearchTerm = '';
    let currentSort = 'updated';

    // Format ISO date into "Oct 26, 2026"
    function formatDate(isoStr) {
      if (!isoStr) return 'Recently';
      try {
        const d = new Date(isoStr);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      } catch {
        return isoStr.slice(0, 10);
      }
    }

    // Render repository cards based on active filters
    function renderRepos() {
      // Filter by language
      let filtered = allRepos.filter(repo => {
        if (currentFilterLang !== 'all') {
          const repoLang = (repo.language || 'Other').toLowerCase();
          if (repoLang !== currentFilterLang.toLowerCase()) {
            return false;
          }
        }

        // Filter by search query
        if (currentSearchTerm) {
          const q = currentSearchTerm.toLowerCase();
          const nameMatch = (repo.name || '').toLowerCase().includes(q);
          const descMatch = (repo.description || '').toLowerCase().includes(q);
          const langMatch = (repo.language || '').toLowerCase().includes(q);
          if (!nameMatch && !descMatch && !langMatch) return false;
        }

        return true;
      });

      // Sort
      filtered.sort((a, b) => {
        if (currentSort === 'stars') {
          return (b.stargazers_count || 0) - (a.stargazers_count || 0);
        } else if (currentSort === 'forks') {
          return (b.forks_count || 0) - (a.forks_count || 0);
        } else if (currentSort === 'name') {
          return (a.name || '').localeCompare(b.name || '');
        } else {
          // Recently updated default
          return new Date(b.updated_at || 0) - new Date(a.updated_at || 0);
        }
      });

      // Empty State
      if (filtered.length === 0) {
        reposGrid.innerHTML = `
<div class="repos-status-message">
  <div class="status-message-icon">⌕</div>
  <h4>No repositories found</h4>
  <p>No public repositories match your current search "${escapeHTML(currentSearchTerm)}" or language filter.</p>
  <button class="button button-secondary button-sm" id="btnResetFilters">Reset Filters</button>
</div>`;
        document.getElementById('btnResetFilters')?.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          currentSearchTerm = '';
          currentFilterLang = 'all';
          updateFilterPillsUI();
          renderRepos();
        });
        return;
      }

      // Render Cards
      reposGrid.innerHTML = filtered.map(repo => {
        const lang = repo.language || 'Code';
        const dotColor = LANG_COLORS[lang] || '#65ff9b';
        const desc = repo.description 
          ? escapeHTML(repo.description) 
          : 'Public developer repository and automation scripts on GitHub.';
        const stars = repo.stargazers_count || 0;
        const forks = repo.forks_count || 0;
        const formattedDate = formatDate(repo.updated_at);

        return `
<article class="repo-card" data-repo-name="${escapeHTML(repo.name)}">
  <div class="repo-card-top">
    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link" title="Open repository on GitHub">
      <span aria-hidden="true">&lt;/&gt;</span>
      <span>${escapeHTML(repo.name)}</span>
    </a>
    <span class="repo-vis-badge">Public</span>
  </div>

  <p class="repo-description">${desc}</p>

  <div class="repo-card-footer">
    <div class="repo-lang-badge">
      <span class="lang-color-dot" style="background-color:${dotColor};"></span>
      <span>${escapeHTML(lang)}</span>
    </div>

    <div class="repo-stats-group">
      <span class="stat-item" title="GitHub Stars" style="${stars > 0 ? 'color:var(--yellow); font-weight:700;' : ''}">
        ★ ${stars}
      </span>
      <span class="stat-item" title="Forks">
        ⑂ ${forks}
      </span>
      <span class="repo-date" title="Last Updated">
        ${formattedDate}
      </span>
    </div>
  </div>
</article>`;
      }).join('');
    }

    // Dynamically populate language filter buttons from retrieved repos
    function updateLanguageFilters(repos) {
      if (!filterGroup) return;
      const languages = new Set();
      repos.forEach(r => {
        if (r.language) languages.add(r.language);
      });

      const buttons = [`<button class="lang-filter-btn ${currentFilterLang === 'all' ? 'active' : ''}" data-lang="all">All (${repos.length})</button>`];
      languages.forEach(lang => {
        const count = repos.filter(r => r.language === lang).length;
        const isActive = currentFilterLang.toLowerCase() === lang.toLowerCase();
        buttons.push(`<button class="lang-filter-btn ${isActive ? 'active' : ''}" data-lang="${escapeHTML(lang.toLowerCase())}">${escapeHTML(lang)} (${count})</button>`);
      });

      filterGroup.innerHTML = buttons.join('');

      // Re-attach listeners
      filterGroup.querySelectorAll('.lang-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentFilterLang = btn.getAttribute('data-lang') || 'all';
          updateFilterPillsUI();
          renderRepos();
        });
      });
    }

    function updateFilterPillsUI() {
      filterGroup?.querySelectorAll('.lang-filter-btn').forEach(b => {
        if (b.getAttribute('data-lang') === currentFilterLang) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }

    // Fetch from GitHub REST API with Graceful Rate-Limit & Offline Fallback
    async function fetchGitHubRepos() {
      if (apiStatusText) apiStatusText.textContent = '● API Status: Fetching live repos...';
      if (btnSync) btnSync.classList.add('syncing');

      try {
        const response = await fetch(GITHUB_API_URL, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            allRepos = data;
            // Cache in sessionStorage for speed
            try {
              sessionStorage.setItem('cached_repos', JSON.stringify(data));
            } catch {}
            if (apiStatusText) apiStatusText.textContent = `● GitHub API: Live (${data.length} Repos Synced)`;
            if (hudRepoCount) hudRepoCount.textContent = `${data.length} Public`;
            updateLanguageFilters(allRepos);
            renderRepos();
            return;
          }
        }

        // If rate limited or non-200
        if (response.status === 403 || response.status === 429) {
          console.warn('GitHub API unauthenticated rate limit reached (60/hr). Using verified snapshot.');
          if (apiStatusText) apiStatusText.textContent = '● GitHub API: Verified Snapshot (Rate Limit Safe)';
        } else {
          if (apiStatusText) apiStatusText.textContent = '● GitHub API: Using Verified Snapshot';
        }
        fallbackToVerifiedData();

      } catch (err) {
        console.warn('Network issue fetching GitHub API. Falling back to verified snapshot:', err);
        if (apiStatusText) apiStatusText.textContent = '● GitHub API: Offline / Verified Cache';
        fallbackToVerifiedData();
      } finally {
        if (btnSync) btnSync.classList.remove('syncing');
      }
    }

    function fallbackToVerifiedData() {
      // Check if we previously cached data
      const cached = sessionStorage.getItem('cached_repos');
      if (cached) {
        try {
          allRepos = JSON.parse(cached);
        } catch {
          allRepos = VERIFIED_REPOSITORIES_FALLBACK;
        }
      } else {
        allRepos = VERIFIED_REPOSITORIES_FALLBACK;
      }
      if (hudRepoCount) hudRepoCount.textContent = `${allRepos.length} Public`;
      updateLanguageFilters(allRepos);
      renderRepos();
    }

    // Search input listener
    searchInput?.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.trim();
      renderRepos();
    });

    // Sort select listener
    sortSelect?.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderRepos();
    });

    // Sync button listener
    btnSync?.addEventListener('click', () => {
      fetchGitHubRepos();
      showToast('Syncing repositories with GitHub API...');
    });

    // Initial Fetch
    fetchGitHubRepos();
  }

  // ==========================================================================
  // MODULE 4: PROJECT CASE STUDIES ACCESSIBLE MODAL DIALOG
  // In-Depth Verified Technical Overviews, Architecture Workflows & Diagrams
  // ==========================================================================
  function initCaseStudyModals() {
    const modalOverlay = document.getElementById('caseStudyModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalBadge = document.getElementById('modalProjectBadge');
    const modalStars = document.getElementById('modalProjectStars');
    const modalDiagram = document.getElementById('modalDiagram');
    const modalOverview = document.getElementById('modalOverviewText');
    const modalFeatures = document.getElementById('modalFeaturesList');
    const modalTechChips = document.getElementById('modalTechChips');
    const modalLessons = document.getElementById('modalLessonsText');
    const modalFooterStatus = document.getElementById('modalFooterStatus');
    const modalSourceLink = document.getElementById('modalSourceLink');

    if (!modalOverlay) return;

    let lastActiveElement = null;

    function openModal(projectId) {
      const data = CASE_STUDIES_DATA[projectId];
      if (!data) return;

      lastActiveElement = document.activeElement;

      // Populate Modal Fields
      modalTitle.textContent = data.title;
      modalBadge.textContent = data.badge;
      modalBadge.className = data.badge.includes('CONFIRMED') ? 'case-badge verified' : 'case-badge concept';
      modalStars.textContent = data.stars;
      modalDiagram.textContent = data.diagram;
      modalOverview.textContent = data.overview;

      // Implemented Features
      modalFeatures.innerHTML = data.features.map(f => `<li>${escapeHTML(f)}</li>`).join('');

      // Technologies
      modalTechChips.innerHTML = data.technologies.map(t => `<span>${escapeHTML(t)}</span>`).join('');

      // Lessons
      modalLessons.textContent = data.lessons;

      // Status & Link
      modalFooterStatus.textContent = data.status;
      modalSourceLink.href = data.sourceUrl;

      // Show Dialog
      modalOverlay.classList.add('open');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Set focus to close button
      modalCloseBtn?.focus();
    }

    function closeModal() {
      modalOverlay.classList.remove('open');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
        lastActiveElement.focus();
      }
    }

    // Delegate clicks for any button with data-project
    document.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('[data-project]');
      if (targetBtn) {
        e.preventDefault();
        const projectId = targetBtn.getAttribute('data-project');
        if (projectId) openModal(projectId);
      }
    });

    modalCloseBtn?.addEventListener('click', closeModal);

    // Close on backdrop click
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // ==========================================================================
  // MODULE 5: ROLE TYPING TEXT ANIMATOR
  // Dynamic Hero Subtitle Transition
  // ==========================================================================
  function initRoleTypingAnimator() {
    const textEl = document.getElementById('roleTypingText');
    if (!textEl) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      textEl.textContent = 'Full-Stack Web & Cybersecurity';
      return;
    }

    const roles = [
      'Full-Stack Web & Cybersecurity',
      'AI & Intelligent Toolchains',
      'OSINT & Information Reconnaissance',
      'Linux & Termux Utility Developer'
    ];

    let roleIdx = 0;
    let charIdx = roles[0].length;
    let isDeleting = false;
    let pauseTimer = null;

    function typeLoop() {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        charIdx--;
        textEl.textContent = currentRole.substring(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          pauseTimer = setTimeout(typeLoop, 400);
          return;
        }
      } else {
        charIdx++;
        textEl.textContent = currentRole.substring(0, charIdx);
        if (charIdx === currentRole.length) {
          isDeleting = true;
          pauseTimer = setTimeout(typeLoop, 2800);
          return;
        }
      }

      const speed = isDeleting ? 40 : 85;
      pauseTimer = setTimeout(typeLoop, speed);
    }

    pauseTimer = setTimeout(typeLoop, 2200);
  }

  // ==========================================================================
  // MODULE 6: SUBTLE 3D CARD TILT & PARALLAX PHYSICS
  // Adds depth to interactive project cards
  // ==========================================================================
  function init3DCardTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 850) return; // Desktop only for performance

    const cards = document.querySelectorAll('.case-study-card, .repo-card, .dossier-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ==========================================================================
  // MODULE 7: SYSTEM TELEMETRY & UTILITY HANDLERS
  // Mobile Nav, Ping Latency, Copy Email, Contact Form
  // ==========================================================================
  function initSystemTelemetryAndUtils() {
    // Mobile navigation toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    menuToggle?.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.innerHTML = isOpen ? '<span aria-hidden="true">✕</span>' : '<span aria-hidden="true">☰</span>';
    });

    nav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        if (menuToggle) menuToggle.innerHTML = '<span aria-hidden="true">☰</span>';
      });
    });

    // Simulated network ping fluctuation
    const latencyEl = document.getElementById('headerLatency');
    if (latencyEl) {
      setInterval(() => {
        const ping = Math.floor(Math.random() * 16) + 21; // 21 - 36ms
        latencyEl.textContent = String(ping);
      }, 4200);
    }

    // Copy Email button
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    btnCopyEmail?.addEventListener('click', () => {
      navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
        showToast(`Email copied: ${CONTACT_EMAIL}`);
      }).catch(() => {
        showToast(`Contact: ${CONTACT_EMAIL}`);
      });
    });

    // Simulated Quick Reach Form (generates mailto)
    const contactForm = document.getElementById('contactQuickForm');
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const subject = document.getElementById('contactSubject')?.value || 'Developer Opportunity';
      const message = document.getElementById('contactMessage')?.value || '';

      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;
      showToast('Opening your default email client...');
    });

    // Scrollspy active nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');

    function updateScrollspy() {
      const scrollY = window.pageYOffset + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateScrollspy, { passive: true });
    updateScrollspy();
  }

  // ==========================================================================
  // HELPER FUNCTIONS
  // ==========================================================================
  function showToast(msg) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initCyberGlobe();
    initTerminalSimulator();
    initLiveGitHubIntegration();
    initCaseStudyModals();
    initRoleTypingAnimator();
    init3DCardTilt();
    initSystemTelemetryAndUtils();
  });

})();
