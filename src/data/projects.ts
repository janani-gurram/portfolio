import architecturePdf from '../assets/UTSCHTP Architecture Overview.pdf'
import tetrisDemoVideo from '../assets/tetris_assembly_demo.mp4'
import stockPortfoDemoVideo from '../assets/stock_portfolio_short_demo.mp4'
import jobMatchingDemoVideo from '../assets/job_matching_demo.mp4'
import jobMatchingDemoPoster from '../assets/job_matching_demo_poster.jpg'

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  details: string[];
  year: string;
  demo?: string;
  demoPoster?: string;
  demoLink?: string;
  documentLink?: string;
}

export const projects: Project[] = [
  {
    "id": 8,
    "title": "Pantry Pal",
    "description": "A web app for tracking pantry ingredients, finding recipes, and planning meals around what you already have.",
    "technologies": [
      "Next.js",
      "React",
      "Express",
      "Firebase",
      "Google Cloud",
      "Meal Planning"
    ],
    "link": "https://github.com/janani-gurram/project-janani-and-rachel",
    "demoLink": "https://www.youtube.com/watch?v=tRbbwgVwjrE",
    "details": [
      "Track pantry ingredients with purchase dates, expiration dates, and frozen status; move purchased shopping-list items into the pantry.",
      "Search Spoonacular recipes by keyword, most matching ingredients, or fewest missing ingredients.",
      "Create groups, invite members, view their pantries, and find recipes using the combined ingredients.",
      "Save recipes and schedule meals, linking ingredients already in the pantry and adding missing ones to the shopping list.",
      "Create Google Tasks reminders for buying ingredients and defrosting frozen food ahead of a planned meal.",
      "Deployed the application on Google Cloud.",
      "Use a Next.js/React interface with an Express API, Firebase authentication, and Firestore storage."
    ],
    "year": "2024"
  },
  {
    "id": 3,
    "title": "Stock Portfolio Manager",
    "description": "A PostgreSQL and Express project modeling portfolios, holdings, and transactions, with API endpoints and a lightweight frontend to demonstrate the workflows.",
    "technologies": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Database Design"
    ],
    "link": "https://github.com/janani-gurram/stock-portfolio-manager",
    "demo": stockPortfoDemoVideo,
    "details": [
      "Create portfolios and track cash balances, holdings, and buy/sell history.",
      "Use PostgreSQL transactions for deposits, withdrawals, transfers, and trades, with rollback paths on errors.",
      "Manage stock lists with visibility controls, friend requests, and reviews through separate Express routes.",
      "Calculate covariance and beta statistics with database cache tables for previously requested results.",
      "Provide a lightweight HTML/CSS/JavaScript frontend to exercise the database-backed workflows."
    ],
    "year": "2024"
  },
  {
    "id": 4,
    "title": "Apache Superset Contribution",
    "description": "A merged Apache Superset fix that lets histograms handle NULL values, with regression tests for grouped and ungrouped datasets.",
    "technologies": [
      "Python",
      "Apache Superset",
      "Open Source",
      "Unit Testing"
    ],
    "link": "https://github.com/apache/superset/pull/35693",
    "details": [
      "Drop empty values from the input DataFrame before calculating histogram bins.",
      "Return an empty DataFrame safely when no values remain, instead of failing during rendering.",
      "Add regression tests for partially NULL and entirely NULL columns, both with and without grouping.",
      "Merged into Apache Superset in November 2025 as pull request #35693."
    ],
    "year": "2025"
  },
  {
    "id": 6,
    "title": "Pintos Operating System Project",
    "description": "A Pintos course project implementing priority scheduling, virtual memory, and growable files across separate assignment branches.",
    "technologies": [
      "C",
      "Pintos",
      "Operating Systems",
      "Virtual Memory"
    ],
    "link": "https://github.com/janani-gurram/pintos-c69-is-os-some",
    "details": [
      "Implemented priority-based thread selection and preemption, with priority donation support.",
      "Replaced busy-wait timer sleeping with a blocked-thread list ordered by wake-up time.",
      "Worked on supplemental page tables, frame management, swapping, and stack growth for virtual memory.",
      "Extended file storage with direct, indirect, and doubly indirect block pointers to support file growth."
    ],
    "year": "2025"
  },
  {
    "id": 2,
    "title": "IPv4 Router in Mininet",
    "description": "A user-space IPv4 router written in C and tested in Mininet, with ARP handling, route lookup, packet forwarding, and ICMP responses.",
    "technologies": [
      "C",
      "Mininet",
      "POX",
      "Routing",
      "Networking"
    ],
    "link": "https://github.com/janani-gurram/router-mininet",
    "details": [
      "Forward IPv4 packets using longest-prefix route lookup, decrement TTL, and update the IP header checksum.",
      "Answer ARP requests, cache replies, and release queued packets once the next-hop address is resolved.",
      "Generate ICMP echo replies and error responses for expired TTLs and unreachable destinations or ports.",
      "Run the C router in a Mininet topology with POX support and supplied ping, traceroute, and HTTP test tools."
    ],
    "year": "2025"
  },
  {
    "id": 7,
    "title": "UTSC HealthTech Platform Architecture",
    "description": "A team architecture project for a multi-clinic healthcare platform. My focus was clinic-level resource isolation and a Fitbit data integration design.",
    "technologies": [
      "System Design",
      "PostgreSQL",
      "OAuth 2.0",
      "FHIR",
      "Multi-tenancy"
    ],
    "link": "#",
    "documentLink": architecturePdf,
    "details": [
      "Proposed clinic-level rate limiting with Redis request counts and Sentry monitoring to identify and limit noisy tenants.",
      "Defined fallback behavior for rate-limited requests, including EMR API responses and frontend exponential backoff.",
      "Designed Fitbit authorization with OAuth 2.0 and PKCE, with encrypted tokens and per-clinic keys managed through AWS KMS.",
      "Specified nightly Celery jobs that prioritize patients with upcoming appointments, refresh expired tokens, and flag stale connections.",
      "Mapped Fitbit measurements to FHIR Observations using LOINC codes, with separate Fitbit and clinical databases to limit data access.",
      "Documented the proposal with sequence and component diagrams; these are architecture decisions rather than a deployed platform."
    ],
    "year": "2025"
  },
  {
    "id": 9,
    "title": "Job Matching Platform",
    "demo": jobMatchingDemoVideo,
    "demoPoster": jobMatchingDemoPoster,
    "description": "A swipe-to-match web app connecting job seekers and employers, with mutual matches, interview scheduling, and activity analytics.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Microsoft Azure",
      "AWS",
      "DevOps"
    ],
    "link": "#",
    "details": [
      "Support separate job-seeker and employer profiles, with job postings and candidate browsing.",
      "Record interest through swipes and surface mutual matches between candidates and employers.",
      "Provide interview scheduling and analytics for job-seeker activity and employer listings.",
      "Contributed backend endpoints for employer swiping, interview scheduling, and analytics.",
      "Deployed the application on Microsoft Azure and provisioned its relational database on AWS.",
      "Use a Next.js/React frontend and an Express/PostgreSQL backend, with database tests and Cypress end-to-end tests."
    ],
    "year": "2025"
  },
  {
    "id": 5,
    "title": "Shopping Mall Android App",
    "description": "An Android shopping app with separate shopper and store-owner views, product listings, carts, and order tracking.",
    "technologies": [
      "Java",
      "Android",
      "Firebase",
      "Mobile Development"
    ],
    "link": "https://github.com/janani-gurram/B07-Project",
    "details": [
      "Provide separate shopper and store-owner interfaces backed by Firebase Realtime Database.",
      "Let owners add products to their store and view incoming orders.",
      "Let shoppers browse store items, add them to a cart, and place orders.",
      "Copy placed orders to shopper and owner order views and remove ordered items from the cart.",
      "Separate the login screen into model, view, and presenter classes."
    ],
    "year": "2023"
  },
  {
    "id": 1,
    "title": "Tetris in MIPS Assembly",
    "description": "A Tetris game in MIPS assembly for MARS, with all seven tetrominoes, piece hold, and three difficulty levels.",
    "technologies": [
      "MIPS Assembly",
      "MARS",
      "Game Development"
    ],
    "link": "https://github.com/janani-gurram/tetris-assembly",
    "demo": tetrisDemoVideo,
    "details": [
      "Move and rotate all seven tetrominoes, with collision checks against the board and settled pieces.",
      "Hold a piece for later and swap it with the active piece using the C key.",
      "Advance through three levels with increasing gravity as lines are cleared.",
      "Display the line-clear score in hexadecimal and show the current level on the MARS bitmap display.",
      "Poll memory-mapped keyboard input and track the board and active piece state in assembly."
    ],
    "year": "2024"
  }
];
