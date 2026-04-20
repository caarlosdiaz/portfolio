import type { SiteConfig, SiteContent, TechnologyProps } from "@types";

const Flutter: TechnologyProps = {
  name: "Flutter",
  image: "/flutter.png",
};

const Python: TechnologyProps = {
  name: "Python",
  image: "/python.png",
};

const FastAPI: TechnologyProps = {
  name: "FastAPI",
  image: "/FastAPI.png",
};

const PostgreSQL: TechnologyProps = {
  name: "PostgreSQL",
  image: "/PostgreSQL.png",
};

const Docker: TechnologyProps = {
  name: "Docker",
  image: "/docker.png",
};

const Pandas: TechnologyProps = {
  name: "Pandas",
  image: "/pandas.svg",
};

const CSharp: TechnologyProps = {
  name: "C#",
  image: "/csharp.png",
};

const DotNet: TechnologyProps = {
  name: ".NET",
  image: "/dotnet.png",
};

const Hl7Fhir: TechnologyProps = {
  name: "HL7 FHIR",
  image: "/hl7_fhir.png",
};

const NextJs: TechnologyProps = {
  name: "Next.js",
  image: "/nextjs.png",
};

const Kubernetes: TechnologyProps = {
  name: "Kubernetes",
  image: "/k8s.png",
};

const PyTorch: TechnologyProps = {
  name: "PyTorch",
  image: "/pytorch.svg",
};

const Transformers: TechnologyProps = {
  name: "Transformers",
  image: "/hf-logo.svg",
};

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos Díaz - Software Engineer",
  author: "Carlos Díaz Abad",
  description:
    "Software Engineer based in Copenhagen. I work at the intersection of backend systems and artificial intelligence.",
  lang: "en",
  siteLogo: "/carlos_big.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/carlos-diaz-abad/" },
    { text: "Github", href: "https://github.com/caarlosdiaz/" },
  ],
  socialImage: "/social.png",
  canonicalURL: "https://carlosdiazabad.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlos Díaz",
    specialty: "Software Engineer",
    summary:
      "Based in Copenhagen. I work on applied ML research end-to-end, from model design to the pipelines and compute that run it.",
  },
  experience: [
    {
      company: "Denmark Technical University",
      position: "Research Software Engineer",
      department:
        "Department of Applied Mathematics and Computer Science - Dynamical Systems Section",
      startDate: "November 2025",
      endDate: "Present",
      summary: [
        "Build and maintain a data pipeline processing 30 years of weather, road survey, and maintenance data across millions of road segments in Denmark, extending to European cities including Lisbon, Zagreb, Zilina, and Tartu in collaboration with local road authorities.",
        "Implement road deterioration forecasting using Dynamic Bayesian Networks and Palmgren-Miner fatigue models, integrating short-term and long-term climate forecasts with road condition assessments to optimize maintenance scheduling.",
        "Engineer feature extraction from heterogeneous temporal and spatial datasets to feed probabilistic and deterioration models.",
        "Deploy and run experiments on a NVIDIA GPU cluster, transitioning local workflows to accelerated compute.",
      ],
      technologies: [Python, PyTorch, Kubernetes, Docker],
    },
    {
      company: "Resiplus ADDInformatica",
      position: "Software Engineer R&D",
      startDate: "October 2023",
      endDate: "January 2025",
      summary: [
        "Developed a C#/.NET pipeline (4 microservices) that auto-generated ERP documentation from Git commit parsing code Deltas against DSL-defined XML schemas, extracting domain logic, and producing context-aware Markdown and PDF manuals.",
        "Developed HL7 FHIR integration services acting as a data exchange gateway between the internal ERP and external healthcare systems.",
      ],
      technologies: [CSharp, DotNet, Hl7Fhir],
    },
  ],
  education: [
    {
      institution: "ETH Zürich",
      degree: "MSc in Computer Science (SEMP Scholarship)",
      location: "Zürich, Switzerland",
      startDate: "2026",
      endDate: "2027",
    },
    {
      institution: "University of Copenhagen",
      degree: "MSc in Computer Science",
      location: "Copenhagen, Denmark",
      startDate: "2025",
      endDate: "2027",
      highlight:
        "Relevant coursework: Machine Learning, Deep Learning, Online and Reinforcement Learning, Advanced Computer Systems, Recommender Systems, Big Data Systems, Search Engines.",
    },
    {
      institution: "Polytechnic University of Valencia",
      degree: "BEng in Informatics Engineering",
      location: "Valencia, Spain",
      startDate: "2021",
      endDate: "2025",
      highlight:
        "Academic excellence distinctions in Industrial Formal Methods, Databases and Information Systems, and Model-Driven Software Development.",
    },
  ],
  projects: [
    {
      name: "Hybrid Recommender System",
      date: "2025 - University of Copenhagen",
      summary:
        "Collaborative filtering (KNN, SVD via scikit-surprise) and content-based (TF-IDF, GloVe, DistilBERT via HF transformers) models on a 98% sparse Amazon dataset, with NumPy/Pandas feature pipelines. A Reciprocal Rank Fusion ensemble of SVD + TF-IDF lifted coverage from 20% to 40% while preserving ranking quality. Also explored Qwen 3.5-4B item descriptions as a metadata replacement.",
      linkSource: "https://github.com/caarlosdiaz/recsys-ucph",
      image: "/hybrid_recommender_architecture.svg",
      technologies: [Python, PyTorch, Pandas, Transformers],
    },
    {
      name: "Atheres Fit",
      date: "2025 - Past project",
      summary:
        "A cross-platform fitness platform connecting athletes and trainers, with a web dashboard where trainers generated AI-tailored workout plans that auto-adjusted loads per athlete. MVP shipped to the Apple App Store.",
      image: "/atheres_fit.png",
      technologies: [Flutter, NextJs, PostgreSQL],
    },
    {
      name: "Fesho",
      date: "2025 - Past project",
      summary:
        "A habit tracker with social features and analytics. Featured at the UPV ETSINF expo.",
      linkPreview:
        "https://www.feriaetsinf.org/proyectos/aplicaciones#:~:text=APP%2D11,Fesho",
      linkSource: "https://github.com/fes-ho/PIN-Code",
      image: "/fesho.png",
      technologies: [Python, FastAPI, PostgreSQL, Flutter],
    },
  ],
  about: {
    description: `
      Hi, I’m Carlos Díaz, a research software engineer based in Copenhagen, working across ML and software engineering. I’m currently at the Technical University of Denmark, where I build probabilistic models and data pipelines that forecast road deterioration across European cities. I’m also doing an MSc in Computer Science at the University of Copenhagen, and in 2026 I’ll be at ETH Zürich on a SEMP scholarship. Before research, I shipped production services in C#/.NET, including HL7 FHIR healthcare integrations. Outside of work, I enjoy prototyping product ideas with friends.
    `,
    image: "/carlos_big.jpeg",
  },
};
