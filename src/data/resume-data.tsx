import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jonathan Santos Silva",
  initials: "JJ",
  location: "Brazil, GMT-3",
  locationLink: "",
  about: "Doer and thinker. Having fun hacking backend applications.",
  summary:
    "I'm a software developer with 5 years of expertise in building microservices, event-driven pipelines, and REST APIs using Golang and Python. Additionally, I have experience managing various infrastructure components across different cloud providers such as AWS, Azure, and GCP.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39134841?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "perebaj@gmail.com",
    tel: "+5518996446051",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/perebaj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jjneno/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Federal University of São Carlos",
      degree: "Bachelor's Degree in Computer Engineer",
      start: "2018",
      end: "2023",
    },
    {
      school: "University of São Paulo - USP",
      degree: "Master's Degree in Computer Engineer",
      start: "2024",
      end: "in progress",
    },
  ],
  work: [
    {
      company: "Tino, Brazil",
      link: "https://www.tino.com.br/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "April/2023",
      end: "Current",
      description: "Building golang microservices and event-driven pipelines",
    },
    {
      company: "Birdie.ai - Palo Alto, CA",
      link: "https://birdie.ai/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "November/2020",
      end: "December/2023",
      description:
        "Startup development, starting from the angel investment stage and successfully securing $7 million in seed funding.",
    },
    {
      company: "Federal University of São Carlos - Brazil, SP",
      link: "https://www.ufscar.br/",
      badges: ["On-site"],
      title: "University Researcher",
      logo: ClevertechLogo,
      start: "March/2019",
      end: "November/2020",
      description:
        "Responsible for developing AI and Big Data projects utilized by companies in the region, as well as for the university.",
    },
  ],
  skills: [
    "Golang",
    "Python",
    "Kubernetes/Docker",
    "Terraform",
    "CI/CD",
    "AWS/Azure/GCP",
    "Rest API",
    "Postgres/MongoDB",
    "Event Driven Pipelines",
    "Unit, Integration & Load Tests",
    "Grafana/Prometheus",
    "ELK Stack",
  ],
  projects: [
    {
      title: "My Mind",
      techStack: ["Engineer Documentation"],
      description:
        "Most of my ideas, notes on engineering, articles, podcasts, and other things I come across are located in this Git repository. Over time, I noticed that the engineers who are references in our field have the habit of documenting their trajectories/careers.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/jjhandbook",
      },
    },
    {
      title: "Newsletter",
      techStack: ["Golang", "Web Scraping", "Goroutines/Channels", "MongoDB"],
      description:
        "A personal project to scrape the blog posts from my favorite Tech Magicians and sent it to my email.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/newsletter",
      },
    },
    {
      title: "Legitima",
      techStack: ["Golang", "Authentication/Authorization", "OAuth2"],
      description:
        "Legitima is not a framework; rather, it serves as a centralized authentication system that seamlessly integrates various authenticators such as Google, GitHub, and more.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/legitima",
      },
    },
    {
      title: "Onde Hoje",
      techStack: [
        "Golang",
        "Rest API",
        "Docker/Heroku",
        "Metrics",
        "PostgresDB/DB Migrations",
        "Structured Logs",
        "OpenAPI Swagger",
        "react/nextjs",
      ],
      description:
        "A Single place to share the underground. This app is designed for people who are looking for unique experiences and want to share their favorite parties/events in their cities.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://www.ondehj.app/",
      },
    },
    {
      title: "Contractus",
      techStack: [
        "Golang",
        "Rest API",
        "Docker/Heroku",
        "Metrics",
        "PostgresDB/DB Migrations",
        "Structured Logs",
        "Unit & Integration Tests",
        "OpenAPI Swagger",
        "Authentication/Authorization",
        "OAuth2",
      ],
      description:
        "Jamming around orders with API endpoints 🎸. This project is an attempt to gather some basic concepts of software development, from metrics and logs to authentication.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/contractus",
      },
    },
    {
      title: "Metrica",
      techStack: ["Golang", "Concurrency", "Goroutines/Channels", "Load Tests"],
      description:
        "Studies about the most basically race condition problems using golang concurrency stack",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/metrica",
      },
    },
    {
      title: "JJ Template",
      techStack: ["Golang"],
      description: "Automation of my golang projects using CLI",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/jjtemplate",
      },
    },
    {
      title: "Secret🤫🤫🤫",
      techStack: ["Golang", "Cryptography"],
      description: "Taking care of my secrets",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/secret",
      },
    },
  ],
} as const;
