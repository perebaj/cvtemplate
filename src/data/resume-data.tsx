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
  about:
    "Doer and thinker. Having fun hacking backend applications.",
  summary:
    "I am a software developer with 4 years of experience in building microservices, event-driven pipelines, and REST APIs using Golang and Python. I have extensive experience in managing various infrastructure components such as Kubernetes, networks, databases, and serverless services across multiple cloud environments such as AWS, GCP, and Azure.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39134841?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "perebaj@gmail.com",
    tel: "+55996446051",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/perebaj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathan-silva-3436861b7/",
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
  ],
  work: [
    {
      company: "Birdie.ai",
      link: "https://birdie.ai/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2020-November",
      end: "2023-December",
      description:
        "Played a role as a developer at Birdie, starting from the angel investment stage and successfully securing 7 million in seed funding. At this time I worked on the development of APIs and microservices for data consumption through streaming and batch processing using Golang and Python, on cloud providers such as GCP, Azure, and AWS",
    },
    {
      company: "Federal University of São Carlos",
      link: "https://www.ufscar.br/",
      badges: ["On-site"],
      title: "University Researcher",
      logo: ClevertechLogo,
      start: "2019-March",
      end: "2020-November",
      description:
        "Studies about Big data and AI that were applied in projects such: Network Analysis and Optimization, CNNs for disease detection & Legal document Automantion",
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
    "Event Driven Pipelines",
    "Unit, Integration & Load Tests",
    "Grafana/Prometheus",
    "ELK Stack"
  ],
  projects: [
    {
      title: "My Mind",
      techStack: [
        "Engineer Documentation",
      ],
      description: "Most of my ideas, notes on engineering, articles, podcasts, and other things I come across are located in this Git repository. Over time, I noticed that the engineers who are references in our field have the habit of documenting their trajectories/careers",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/playground",
      },
    },
    {
      title: "JJ Template",
      techStack: [
        "Golang",
      ],
      description: "Automation of my golang projects using CLI",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/jjtemplate",
      },
    },
    {
      title: "Secret🤫🤫🤫",
      techStack: [
        "Golang",
        "Cryptography"
      ],
      description: "Taking care of my secrets",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/secret",
      },
    },
    {
      title: "Legitima",
      techStack: [
        "Golang",
        "Authentication/Authorization",
        "OAuth2"
      ],
      description: "Legitima is not a framework; rather, it serves as a centralized authentication system that seamlessly integrates various authenticators such as Google, GitHub, and more.",
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
        "Resp API",
        "Docker/Heroku",
        "Metrics",
        "PostgresDB/DB Migrations",
        "Structured Logs",
        "Unit & Integration Tests",
        "OpenAPI Swagger",
      ],
      description: "A Single place to share the underground. This app is designed for people who are looking for unique experiences and want to explore the hidden gems of their city.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/ondehj",
      },
    },
    {
      title: "Contractus",
      techStack: [
        "Golang",
        "Resp API",
        "Docker/Heroku",
        "Metrics",
        "PostgresDB/DB Migrations",
        "Structured Logs",
        "Unit & Integration Tests",
        "OpenAPI Swagger",
        "Authentication/Authorization",
        "OAuth2"
      ],
      description: "Jamming around orders with API endpoints 🎸",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/contractus",
      },
    },
    {
      title: "Metrica",
      techStack: [
        "Golang",
        "Concurrency",
        "Goroutines/Channels",
        "Load Tests"
      ],
      description: "Studies about the most basically race condition problem: Concurrent Counter",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/perebaj/metrica",
      },
    },
  ],
} as const;
