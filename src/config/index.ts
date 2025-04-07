import type { SiteConfig, SiteContent, TechnologyProps } from "@types";

const Flutter : TechnologyProps = {
  name: "Flutter",
  image: "/flutter.png"
}

const Python : TechnologyProps = {
  name: "Python",
  image: "/python.png"
}

const FastAPI : TechnologyProps = {
  name: "FastAPI",
  image: "/FastAPI.png"
}

const PostgreSQL : TechnologyProps = {
  name: "PostgreSQL",
  image: "/PostgreSQL.png"
}

const Docker : TechnologyProps = {
  name: "Docker",
  image: "/docker.png"
}

const Astro : TechnologyProps = {
  name: "Astro",
  image: "/astro.png"
}

const Pandas : TechnologyProps = {
  name: "Pandas",
  image: "/pandas.svg"
}

const CSharp : TechnologyProps = {
  name: "C#",
  image: "/csharp.png"
}

const DotNet : TechnologyProps = {
  name: ".NET",
  image: "/dotnet.png"
}

const Hl7Fhir: TechnologyProps = {
  name: "HL7 FHIR",
  image: "/hl7_fhir.png"
}

const NextJs: TechnologyProps = {
  name: "Next.js",
  image: "/nextjs.png"
}

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos Díaz — Software Engineer",
  author: "Carlos Díaz Abad",
  description:
    "Software Engineer based in Spain. I specialize in backend development and artificial intelligence.",
  lang: "en",
  siteLogo: "/carlos_big.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
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
      "I specialize in backend development and artificial intelligence solutions.",
  },
  experience: [
    {
      company: "Resiplus ADDInformatica",
      position: "Software Engineer R&D",
      startDate: "October 2023",
      endDate: "January 2025",
      summary: [
        "Developed and maintained microservices using .NET and C# in the R&D (Research and Development) department.",
        "Implemented design patterns, reducing development time by 30% and improving code maintainability.",
        "Contributed to HL7 FHIR integrations, enhancing interoperability between healthcare systems.",
        "Conducted testing to ensure high-quality, reliable software solutions.",
        "Part-time position while completing an Informatics Engineering degree."
      ],
      technologies: [CSharp, DotNet, Hl7Fhir]
    },
  ],
  projects: [
    {
      name: "Atheres Fit",
      summary: "A fitness platform with a mobile app for athletes and a web dashboard for trainers. MVP live on the App Store.",
      linkPreview: "https://atheresfit.com",
      image: "/atheres_fit.png",
      technologies: [Flutter, NextJs, PostgreSQL]
    },
    {
      name: "Fesho",
      summary: "An habit tracker with social media features and analytics. It was featured in the UPV ETSINF expo.",
      linkPreview: "https://www.feriaetsinf.org/proyectos/aplicaciones#:~:text=APP%2D11,Fesho",
      linkSource: "https://github.com/fes-ho/PIN-Code",
      image: "/fesho.png",
      technologies: [Python, FastAPI, PostgreSQL, Flutter]
    },
    {
      name: "Monuments ETL",
      summary: "An ETL pipeline processing Spanish monuments from diverse data sources, with a frontend displaying them on an interactive map.",
      linkSource: "https://github.com/SrIzan03/iei-code",
      image: "/iei_etl.png",
      technologies: [Python, Pandas, FastAPI, PostgreSQL, Astro, Docker]
    },
  ],
  about: {
    description: `
      Hi, I’m Carlos Díaz, a Software Engineer with a solid background in backend development and a growing passion for Artificial Intelligence. I’m deeply interested in the theoretical aspects of AI, constantly exploring its concepts, algorithms, and how it can shape the future of technology. I focus on building efficient, scalable systems while continuously expanding my knowledge in AI to better understand its potential. In addition to my technical skills, I have a strong interest in entrepreneurship and enjoy finding innovative ways to bring new ideas to life. My journey is about learning, growing, and contributing to the future of technology.
    `,
    image: "/carlos_big.jpeg",
  },
};
