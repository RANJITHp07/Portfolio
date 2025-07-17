import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ranjith",
  lastName: "P",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar1.jpg",
  email: "ranjithp5841@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RANJITHp07",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ranjithp007",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://x.com/ranjithp989026",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/avatar1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Blending design sensibility with engineering precision</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">AI career coach</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ranjith P, a software engineer building scalable, user-centric solutions that empower businesses across platforms
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
    Software engineer based in India, passionate about transforming complex challenges into scalable, efficient solutions. His work spans innovative software systems, seamless user experiences, and bridging technology with business goals.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Neuro Spark Works Solutions Pvt Ltd",
        timeframe: "April 2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
           Led the full-stack development of Findigoo, a user-friendly tourism platform that streamlined bookings for water parks, resorts, and agrotourism, while overseeing DevOps to ensure reliable deployment and smooth operation—directly contributing to increased user engagement and revenue growth.
          </>,
          <>
           Implemented targeted SEO optimization strategies for Findigoo, significantly boosting search engine rankings and driving higher customer acquisition, which fueled platform expansion and market presence.
          </>,
          <>
          Developed responsive web applications using React and native mobile apps with React Native for Zupe, enhancing the platform’s accessibility and usability across devices, which contributed to increased user engagement and retention.
          </>,
          <>
          Delivered clean, efficient, and maintainable code that streamlined feature rollout and improved app performance, helping Zupe scale effectively and support its growing user base in the health and wellness sector.
          </>
        ],
        images: [
        ],
        
      },
      {
        company: "Freelancer",
        timeframe: "2023 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Collaboratively developed the Atropz Training Centre platform alongside a team of four, delivering a robust and 
            intuitive solution for one of Kerala’s premier German language institutes specializing 
            in nursing education—enhancing administrative efficiency and learner engagement.
            Collaboratively developed the Atropz Training Centre platform with a team of four, delivering a robust and
             user-friendly solution for one of Kerala’s premier German language institutes specializing in nursing education. This streamlined administrative processes and enhanced learner engagement, contributing to increased enrollments and institutional growth.
          </>,
          <>
        Played a key role in developing the Gefmart app, empowering channel partners and businesses to optimize procurement, reduce operational costs, and efficiently scale their electrical operations across Kerala—resulting in expanded market reach and improved profitability.
          </>,
          <>
          Designed and implemented a comprehensive task management system for a leading law firm, streamlining case workflows and improving deadline management. This boosted operational efficiency, enabling the firm to manage more cases
           effectively and increase client satisfaction, driving sustainable business growth.
          </>
        ],
        images: [
        ],
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend",
        // optional: leave the array empty if you don't want to display images
        sub_skills: [
          // Backend
          "Node.js",
          "Express.js",
          "Koa",
          "NestJS",
          "RESTful APIs",
          "GraphQL",
          "Prisma",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Microservices Architecture",
          "Authentication & Authorization (JWT, OAuth)",
          "API Design & Development",
          "Serverless (AWS Lambda, Azure Functions)",
          "Message Queues (RabbitMQ, Kafka)",
          "Unit & Integration Testing (Jest, Mocha)",
          "Logging & Monitoring (Winston, Prometheus)",
        ],
      },
      {
        title: "Frontend",
        // optional: leave the array empty if you don't want to display images
        sub_skills:  [
          // Frontend
          "React",
          "React Native",
          "Next.js",
          "Firebase",
          "Remix",
          "TypeScript",
          "JavaScript (ES6+)",
          "Redux / Zustand",
          "CSS3",
          "Sass / SCSS",
          "Tailwind CSS",
          "Webpack / Vite",
          "HTML5",
          "GraphQL (Apollo Client, Relay)",
          "Jest",
        ],
      },
      {
        title: "DevOps",
  sub_skills: [
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3)",
    "Google Cloud Platform (GCP)",
    "CI/CD (GitHub Actions)",
    "Grafana",
    "Nginx",
    "Linux & Shell Scripting",
    "Vercel",
    "Render"
  ],
},
{
  title: "Architecture & Engineering Practices",
  sub_skills: [
    "Clean Architecture",
    "MVP Architecture",
    "MVC Architecture",
    "Event-Driven Architecture",
    "Monorepo Management (Turborepo, Nx)",
    "Socket.IO Integration",
    "Code Quality Tools (ESLint, Prettier, Husky, Lint-Staged)",
  ],
}
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work,gallery };
