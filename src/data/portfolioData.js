export const PROFILE = {
  name: "Abhirami Sasikumar",
  role: "Full-Stack Software Developer",
  tagline: "Specializing in MERN Stack, Python/Django Backends, and React Native Mobile Apps.",
  email: "abhiramisindhusasikumar@gmail.com",
  phone: "+91 8590632019",
  linkedin: "https://www.linkedin.com/in/abhirami-sasikumar-",
  github: "https://github.com",
  location: "Kerala, India (Available Worldwide)",
  status: "Available for Full-Stack & Mobile Development Roles",
  bio: "Results-driven Full-Stack Software Developer with 2 years of production experience architecting, building, and deploying mission-critical web and mobile systems. Specialized in responsive frontends with React.js & the MERN Stack, high-throughput REST APIs with Python/Django, and native-grade mobile applications with React Native. Driven by a deep passion for research and technical exploration, backed by solid computer science foundations and containerized Docker deployments.",
};

export const CORE_PILLARS = [
  {
    id: "mern",
    title: "MERN Stack Web Development",
    subtitle: "React.js • Node.js • Express.js • MongoDB",
    desc: "Building interactive, high-performance web applications with modular React component design, GIS & map-based plotting, state management, RESTful APIs, and scalable MongoDB schemas.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "GIS & Map Plotting", "Tailwind CSS", "RESTful APIs", "JWT Auth"],
    stat: "Core Expertise"
  },
  {
    id: "django",
    title: "Python & Django Framework",
    subtitle: "Django • Django REST Framework • Python",
    desc: "Architecting secure, clean, and maintainable backend services with Django ORM, authentication systems, automated tasks, and high-performance REST APIs.",
    tags: ["Python 3", "Django", "Django REST Framework", "PostgreSQL / MySQL", "ORM Optimization", "APIs"],
    stat: "Backend Strength"
  },
  {
    id: "react-native",
    title: "React Native Mobile Apps",
    subtitle: "Cross-Platform Android & iOS Applications",
    desc: "Developing native-feel mobile applications with smooth UI, offline storage, role-based workflows, and integration with device APIs and services.",
    tags: ["React Native", "Android Development", "Cross-Platform", "Offline Storage", "Mobile UI/UX"],
    stat: "Mobile Delivery"
  },
  {
    id: "backend-devops",
    title: "Backend Architecture & DevOps",
    subtitle: "REST APIs • Docker • Microservices • Database Migration",
    desc: "Engineering scalable backend architectures, multi-tenant role-based access control (RBAC), database optimizations, and containerized Docker deployments.",
    tags: ["Docker", "Database Migration", "Role-Based Access Control", "Microservices", "Git / GitHub"],
    stat: "Production Ready"
  }
];

export const PROJECTS = [
  {
    id: "nemom-block",
    category: "IoT & GIS Web Platform",
    role: "Backend Architecture & Deployment Lead",
    title: "IoT-Enabled Nemom Block Panchayat Software Dashboard",
    client: "ICFOSS",
    video: "./nemomblock.webm",
    image: "./nemom_dashboard.png",
    overview: "Production IoT & GIS telemetry platform. Led the backend architecture, schema design, and Docker deployment while assisting with frontend components. Dynamically bridges physical regional zones with real-time sensor streams.",
    highlights: [
      "Dynamic Multi-Datasource Management: Dynamically connects to multiple, independent InfluxDB instances with distinct hosts, organizations, buckets, and auth tokens.",
      "Relational Schema Mapping: Maps physical regions (Zones) to specific monitoring criteria (Rainfall, Temperature, etc.), linking parameters to device measurements and GPS coordinates.",
      "GIS Map Visualization: Plots coordinates, parameters, and live values dynamically using geographic boundary lines (GeoJSON block mapping), with dynamic color-coding based on threshold ranges.",
      "Time-Series Charting: Renders dynamic line charts showing trends over a sliding 24-hour window, pulling historical aggregates using modular Flux query builders.",
      "Multi-Tiered Access & Workflows: Implemented 3-tier user roles (Superadmin, Admins, Users) with a dynamic request-approval pipeline and role-based permissions."
    ],
    tech: ["Node.js", "Express.js", "InfluxDB (Flux)", "React.js", "GIS / GeoJSON", "Leaflet", "Docker", "MongoDB"]
  },
  {
    id: "openiot-mobile",
    category: "React Native & IoT Mobile Platform",
    role: "System Architecture, Backend & Mobile Lead",
    title: "Open IoT Platform: Web Dashboard & Mobile Application (Version 2)",
    client: "ICFOSS",
    video: "./OpenIotweb.webm",
    image: "./openiot_v2_architecture.png",
    mediaTabs: [
      { id: "video", label: "Web Dashboard", icon: "📹", footerLeft: "Web Dashboard (Clusters & Users)", footerRight: "Stream Recording" },
      { id: "image", label: "Mobile App", icon: "📱", footerLeft: "Mobile App Architecture & UI", footerRight: "Cross-Platform UI" }
    ],
    overview: "Production IoT telemetry platform featuring a cross-platform React Native mobile client alongside a dedicated Web Dashboard for cluster management and access control. Led the end-to-end system architecture, backend REST APIs, and client interfaces.",
    highlights: [
      "Cluster-Based Architecture: Organizes devices, parameters (Temperature, Humidity, Rainfall, CO2, etc.), and locations around specific 'Clusters' for dynamic configuration management.",
      "Dedicated Web Dashboard: Administrative console for Superadmins and Cluster Managers to configure clusters, manage devices, and oversee user access pipelines.",
      "Cluster-Gated Mobile Signup: New mobile users register using a unique Cluster ID to request access to their designated cluster and telemetry feeds.",
      "Superadmin (System Owner): Exercises total platform governance via the Web Dashboard, configuring clusters, device allocations, and provisioning Admin accounts.",
      "Admin (Cluster Manager): Provisioned by Superadmins to oversee specific clusters, reviewing, approving, or rejecting mobile user access requests via an approval pipeline.",
      "App Users (End Users): Standard mobile app users with role-scoped access to monitor nearby device readings, multi-location parameters, and real-time temporal trend graphs."
    ],
    tech: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Android", "REST APIs", "Cluster Architecture"]
  },
  {
    id: "idrb-monitoring",
    category: "Full-Stack GIS & Telemetry Platform",
    role: "Architecture, Backend Development & Deployment Lead",
    title: "IDRB Website and Backend CMS: Real-Time GIS & Telemetry Platform",
    client: "Irrigation Design & Research Board (Govt. of Kerala)",
    video: "./IDRB.webm",
    image: "./IDRB.png",
    mediaTabs: [
      { id: "video", label: "Home Page", icon: "📹", footerLeft: "IDRB Public Portal Home Page", footerRight: "Stream Recording" },
      { id: "image", label: "Inner Page", icon: "📊", footerLeft: "GIS Telemetry & Analytics Dashboard", footerRight: "Inner Analytics" }
    ],
    overview: "Contributed to the system architecture, backend development, responsive layout optimization, and production deployment of the IDRB web platform and its administrative CMS. Engineered real-time river basin monitoring, automated InfluxDB alert engines, and robust security protocols.",
    highlights: [
      "Real-Time GIS Mapping & Telemetry: Interactive Leaflet maps showing real-time water levels (WLS), rain gauges (ARG), and weather stations (AWS), with GeoJSON overlays detailing river basins, district boundaries, and dams/regulators with live color-coded risk status.",
      "Advanced Analytics & Charting: Interactive time-series data visualization using Recharts with click-and-drag temporal zooming, seamless toggling between graphic plots and precise tabular data views, and dynamic river rise rate tracking.",
      "Automated Alerting & Notifications: Background cron engines scanning InfluxDB telemetry for warning, critical, and record-breaking levels, automatically dispatching targeted alert emails to authorized regional personnel.",
      "Enterprise Administration & Security: Role-based access hierarchy spanning public users, regional inspectors, and admin moderators with OTP verification, Multi-Factor Authentication (MFA), and custom metadata schemas."
    ],
    tech: ["React.js", "Node.js", "Express.js", "InfluxDB", "Recharts", "GIS / Leaflet", "GeoJSON", "Cron / Email Alerts", "Docker"]
  },
  {
    id: "soil-nutrient-app",
    category: "IoT & Mobile Application Development",
    role: "System Architecture, Backend & Deployment Lead",
    title: "Soil Nutrient Analyser Mobile Application",
    client: "ICFOSS / Department of Agriculture",
    image: "./soil_nutrient_flow.png",
    overview: "Cross-platform IoT mobile application built for agricultural officers. Designed the end-to-end system architecture, backend REST APIs, deployment pipelines, and frontend features. Enables secure officer authentication, farmer demographic profiling, offline draft management, multi-point IoT sensor sampling, and automated nutrient averaging.",
    highlights: [
      "User Authentication & Verification: Secure officer registration and login with OTP (One-Time Password) verification, password reset, profile management, and account deletion workflows.",
      "Farmer Profiling & Demographics: Captures comprehensive field metadata including Farmer Name, Survey Number, District, Local Body Type (Corporation, Municipality, or Panchayath), Local Body Name, and Device Serial Number (SN).",
      "Workload Control & Offline Storage: Limits local unsynced draft entries (max 10 records) to optimize mobile memory and enforce regular batch synchronization with cloud servers.",
      "Multi-Point IoT Soil Data Collection: Interfaces with IoT soil probes to sample 12 key agricultural parameters (EC, Moisture, pH, N, P, K, Ca, Mg, S, Fe, Zn, Cu) with automated multi-point averaging.",
      "Geolocation Integration: Automatic GPS coordinate tagging (latitude & longitude) for each sampling point to guarantee authentic field geotagging and spatial traceability."
    ],
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "OTP Verification", "GPS Geotagging", "Offline Drafts"]
  },
  {
    id: "cms-migration",
    category: "Backend Architecture & API Systems",
    role: "System Architecture & Backend Engineering Lead",
    title: "A Custom Backend Content Management System & API Generator",
    client: "ICFOSS",
    video: "./CMS.webm",
    image: "./thettiyar_influxdb.png",
    overview: "Designed the end-to-end system architecture and engineered the backend to streamline telemetry and content delivery. Built dynamic REST API generation pipelines, project-wise device matrices, and robust data governance protocols.",
    highlights: [
      "Interactive Dashboard & Project-Wise Visualization: Centralized telemetry management interface providing project-wise metrics, real-time device health, and visual monitoring.",
      "Telemetry Controls & Device Matrix: Granular controls to configure hardware sensor matrices, inspect operational statuses, and manage telemetry parameter thresholds.",
      "Multi-Project Handling: Scalable multi-tenant architecture supporting concurrent organizational projects with isolated data boundaries and dynamic schema configurations.",
      "Dynamic API Generator: Custom engine that dynamically generates secure, high-performance REST API endpoints for telemetry datasets on-the-fly.",
      "API Security & Governance: Enterprise token-based access controls, rate-limiting safeguards, comprehensive audit logs, and granular role permissions.",
      "Centralized CSV Export Manager: Memory-efficient streaming data export service allowing rapid extraction of large historical sensor records without server memory spikes."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs", "Dynamic API Generator", "Streaming CSV", "Docker"]
  },
  {
    id: "icfoss-website-migration",
    category: "Full-Stack Modernization & Enterprise CMS",
    role: "Full-Stack & Backend Modernization Lead",
    title: "ICFOSS Website Revamping & CMS Migration",
    client: "ICFOSS",
    video: "./IcfossWebsite.webm",
    image: "./icfoss_landing_cms.png",
    overview: "Contributed to the full-stack revamping of the official ICFOSS institutional website and content management system. Modernized legacy PHP/Laravel architecture into a high-performance React and Node.js/Express ecosystem with MySQL, hardening web security and implementing fine-grained administrative controls.",
    highlights: [
      "Legacy Full-Stack Migration: Migrated legacy PHP/Laravel application to a modern full-stack architecture using React and Node.js/Express with MySQL, preserving database integrity.",
      "Security Hardening: Identified and resolved critical web security issues, hardening API endpoints, session handling, and backend authentication protocols.",
      "Content Logs Auditing: Implemented a robust data logging subsystem to track, monitor, and audit all content modifications made across the CMS.",
      "Category-Level Permissions: Engineered fine-grained, category-based permission matrices allowing granular administration by institutional staff members.",
      "Targeted UI Development & API Integration: Developed key frontend pages in React and seamlessly integrated robust backend REST APIs for seamless data flow."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Database Migration", "Security Hardening", "REST APIs", "Content Logs", "Role Permissions"]
  },
  {
    id: "sarangi-music-school",
    category: "Full-Stack Web Platform & UI/UX",
    role: "Full-Stack Web Developer (Freelance)",
    title: "Sarangi School of Music Web Platform",
    client: "Sarangi School of Music",
    link: "https://sarangischoolofmusic.in/",
    video: "./MusicSchool.webm",
    image: "./slis_portal.png",
    overview: "Production web platform engineered for Sarangi School of Music as a freelance initiative. Designed and developed the responsive interface, course curriculum showcases, admissions inquiry funnels, and performance media galleries.",
    highlights: [
      "Custom Brand & Responsive Experience: Crafted a modern, aesthetic web experience optimized for fluid cross-device browsing across desktop, tablets, and smartphones.",
      "Course Catalog & Curriculum Showcase: Interactive curriculum modules highlighting diverse musical disciplines (classical vocal, instruments, dance) with detailed syllabi.",
      "Admissions & Student Inquiry Funnel: Integrated streamlined inquiry workflows and direct communication funnels to capture prospective student enrollments.",
      "Multimedia Performance Gallery: Embedded media showcases and event galleries celebrating student recitals, musical productions, and institutional milestones.",
      "Production Deployment & Domain Management: Configured high-performance cloud hosting, custom domain DNS routing, SSL security, and web performance optimization."
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX Architecture", "Web Performance", "Production Deployment"]
  }
];

export const SKILLS_LIST = [
  {
    category: "Frontend Development",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "GIS & Map Plotting (Leaflet, GeoJSON)", "Recharts", "Responsive UI/UX", "HTML5 & CSS3", "State Management"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "Django", "Django REST Framework", "RESTful API Architecture", "Authentication (JWT / OTP / MFA)"]
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Android Development", "Cross-Platform UI", "Offline Data Storage", "Mobile Device APIs"]
  },
  {
    category: "Databases & DevOps",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Docker", "Git & GitHub", "Linux / VM Management", "Database Migration", "Postman"]
  }
];

export const CAREER_HISTORY = [
  {
    period: "Oct 2025 – Present",
    role: "Research Assistant – Open IoT",
    company: "ICFOSS",
    current: true,
    points: [
      "Leading full-stack web and cross-platform mobile application engineering across state initiatives.",
      "Architecting scalable backend microservices, dynamic REST APIs, and containerized Docker environments."
    ]
  },
  {
    period: "Mar 2025 – Sep 2025",
    role: "Project Assistant – Open IoT",
    company: "ICFOSS",
    points: [
      "Engineered multi-datasource time-series telemetry pipelines and GIS spatial mapping architectures.",
      "Developed high-throughput web dashboards and mobile clients with multi-tiered role access control."
    ]
  },
  {
    period: "Sep 2024 – Mar 2025",
    role: "Software Intern – Open IoT",
    company: "ICFOSS",
    points: [
      "Executed database migrations, modernized legacy backend modules, and strengthened RESTful API reliability.",
      "Assisted in frontend interface enhancements, cross-platform mobile features, and testing workflows."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Christ Nagar College, University of Kerala",
    period: "2022 – 2024"
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University Institute of Technology, University of Kerala",
    period: "2019 – 2022"
  }
];

