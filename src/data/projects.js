import cssbattleApi from '../assets/Project/cssbattle-api.webp';
import digistock from '../assets/Project/digistock.webp';
import digitap from '../assets/Project/digitap.webp';
import elearning from '../assets/Project/elearning.webp';
import moncentre from '../assets/Project/moncentre.webp';
import nourbannat from '../assets/Project/nourbannat.webp';
import onetask from '../assets/Project/onetask.webp';
import orgaspace from '../assets/Project/orgaspace.webp';
import rentohub from '../assets/Project/rentohub.webp';
import restaurantMayViet from '../assets/Project/restaurant-may-viet.webp';
import smartdesigner from '../assets/Project/smartdesigner.webp';
import webEcommerce from '../assets/Project/web-ecommerce.webp';

// `summary` = what it is, `why` = the problem it solves, `role` = what I did,
// `result` = where it stands today. `featured` projects appear on the home page.
// `tags` lists the technologies; leave it empty to hide the tag row.
export const projects = [
  {
    slug: 'digistock',
    title: 'DigiStock',
    type: 'Desktop app · DigiStudio',
    summary:
      'Stock management and point-of-sale desktop app: barcode checkout, purchases, suppliers, customer credit, multi-warehouse inventory and reports.',
    why: 'Small shops track stock, sales and customer credit on paper or in spreadsheets. DigiStock puts the counter and the back office in one fast, keyboard-driven app.',
    role: 'Built with DigiStudio: the desktop application (dashboard, POS with shortcuts and scanner support, stock, purchasing, clients, users) and its marketing website.',
    result: 'Desktop app with a free plan and a Premium tier (WhatsApp, multi-user), presented on digistock.digistudio.dev.',
    tags: [],
    image: digistock,
    links: { live: 'https://digistock.digistudio.dev/' },
    featured: true,
  },
  {
    slug: 'digitap',
    title: 'DigiTap',
    type: 'NFC product · DigiStudio',
    summary:
      'NFC business card linked to a personal page that gathers contact details, social links, website and actions, shared in a single tap or QR scan.',
    why: 'Paper cards get lost and go out of date. DigiTap keeps a professional identity on one page that can be updated any time, without an app.',
    role: 'Built with DigiStudio: the product website, the profile pages, and the dashboard with statistics and the Fidello loyalty programme.',
    result: 'Offered to restaurants, hotels, shops, events and companies, presented on digitap.digistudio.dev.',
    tags: [],
    image: digitap,
    links: { live: 'https://digitap.digistudio.dev/' },
    featured: true,
  },
  {
    slug: 'smart-designer',
    title: 'Smart Designer',
    type: 'Client project',
    summary:
      'Portfolio website for a freelance art director: services, filterable brand references, client logos and a contact form.',
    why: 'With 24 years in art direction and branding, the client needed a site that presents years of brand work as carefully as the work itself.',
    role: 'Developed the site in React with GSAP animations, and deployed it on Vercel.',
    result: 'Live at smartdesigner.pro.',
    tags: ['React', 'Vite', 'GSAP', 'Vercel'],
    image: smartdesigner,
    links: { live: 'https://www.smartdesigner.pro/' },
    featured: true,
  },
  {
    slug: 'rentohub',
    title: 'RentoHub',
    type: 'SaaS platform',
    summary: 'Rental management platform for car-rental agencies: vehicle listings, bookings and payment processing.',
    why: 'Agencies juggle listings, reservations and payments across separate tools. RentoHub brings them into one dashboard.',
    role: 'Full-stack development: React (Vite) front end, Node.js + Sequelize API, MySQL, JWT authentication.',
    result: 'Live in production at rentohub.app.',
    tags: ['React', 'Vite', 'Node.js', 'Sequelize', 'MySQL', 'JWT'],
    image: rentohub,
    links: { live: 'https://rentohub.app' },
  },
  {
    slug: 'chu-oujda-training',
    title: 'CHU Oujda · Training Platform',
    type: 'Internship',
    summary: 'Internal website where hospital staff discover training courses and request information or enrolment.',
    why: 'Training for hospital personnel needed a single place to be published and requested.',
    role: 'Built front end and API during my internship at CHU Oujda, and supported users after launch.',
    result: 'Delivered for CHU Oujda staff during the Jan–Feb 2025 internship.',
    tags: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL'],
    image: elearning,
    links: { code: 'https://github.com/ydxj/site-web-formation' },
  },
  {
    slug: 'nour-bannat',
    title: 'Nour Bannat · WooCommerce',
    type: 'Client project',
    summary: 'E-commerce website with product catalogue, collections and online ordering.',
    why: 'Gives the brand its own storefront to present collections and sell online.',
    role: 'Freelance build on WordPress and WooCommerce, from theme setup to catalogue and checkout.',
    result: 'Live at nourbannat.com.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    image: nourbannat,
    links: { live: 'https://nourbannat.com/' },
  },
  {
    slug: 'cssbattle-api',
    title: 'CSS Battle API',
    type: 'Open-source API',
    summary: 'Serverless API that scrapes CSSBattle player profiles with Puppeteer and returns clean JSON.',
    why: 'CSSBattle has no public API for player stats, so developers had no easy way to display them.',
    role: 'Designed and built the scraper and API, packaged for serverless deployment.',
    result: 'Deployed on Vercel at cssbattle-api.vercel.app.',
    tags: ['Node.js', 'Puppeteer', 'Serverless', 'Vercel'],
    image: cssbattleApi,
    links: { live: 'https://cssbattle-api.vercel.app' },
  },
  {
    slug: 'web-ecommerce',
    title: 'Web E-commerce',
    type: 'Full-stack app',
    summary: 'Marketplace for buyers and sellers with product listings, cart, orders and role-based dashboards.',
    why: 'An end-to-end exercise in auth, roles and transactional flows on a real-world use case.',
    role: 'Built the React front end and the Node.js / Express API with JWT auth and MySQL.',
    result: 'Open source on GitHub.',
    tags: ['React', 'GSAP', 'React Router', 'Node.js', 'Express', 'JWT', 'MySQL'],
    image: webEcommerce,
    links: { code: 'https://github.com/ydxj/webEcommerce' },
  },
  {
    slug: 'onetask',
    title: 'OneTask',
    type: 'Web service',
    summary: 'Sends one daily task by email based on the domain a user chooses: productivity, learning, sport…',
    why: 'One small, focused task a day is easier to act on than a long to-do list.',
    role: 'Built the React front end and the Node.js / Express service that schedules and sends emails.',
    result: 'Open source on GitHub.',
    tags: ['React', 'Bootstrap', 'Node.js', 'Express'],
    image: onetask,
    links: { code: 'https://github.com/ydxj/One-Task' },
  },
  {
    slug: 'restaurant-may-viet',
    title: 'Restaurant May Viet',
    type: 'Website',
    summary: 'Restaurant website with menu, online reservations and contact information.',
    why: 'Helps customers browse the menu and book a table without calling.',
    role: 'Designed and built the React site.',
    result: 'Open source on GitHub.',
    tags: ['React', 'Bootstrap', 'React Router'],
    image: restaurantMayViet,
    links: { code: 'https://github.com/ydxj/restaurant_may_viet' },
  },
  {
    slug: 'ecommerce-ui',
    title: 'E-commerce UI',
    type: 'Front end',
    summary: 'Storefront interface with cart and product management, including product images.',
    why: 'A focused front-end build of a complete shopping experience.',
    role: 'Built the React interface and styling.',
    result: 'Open source on GitHub.',
    tags: ['React', 'CSS'],
    image: orgaspace,
    links: { code: 'https://github.com/ydxj/ecommerce-website' },
  },
  {
    slug: 'moncentre',
    title: 'MonCentre',
    type: 'SaaS platform',
    summary: 'Platform for training centres to manage their profile, student enrolment and progress tracking.',
    why: 'Centres often track students in spreadsheets; MonCentre centralises enrolment and follow-up.',
    role: 'Full-stack development with React, Django and PostgreSQL.',
    result: 'In progress (about 70%).',
    tags: ['React', 'Django', 'PostgreSQL', 'Chart.js', 'REST API'],
    image: moncentre,
    links: { live: 'https://moncentre.app' },
    status: 'in-progress',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const shippedCount = projects.filter((project) => project.status !== 'in-progress').length;

export const primaryLink = (project) => project.links.live || project.links.code;
