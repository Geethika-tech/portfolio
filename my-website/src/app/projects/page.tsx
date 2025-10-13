import { Github } from "lucide-react";

/* -------- Modern Project Card -------- */
type ProjectCardProps = {
  title: string;
  year?: string;
  shortDescription: string;
  detailedDescription?: string;
  technologies: string[];
  features?: string[];
  responsibilities?: string[];
  github?: string;
  link?: string;
};

function ProjectCard({
  title,
  year,
  shortDescription,
  detailedDescription,
  technologies,
  features,
  link,
  responsibilities,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 space-y-4 border-t-4 border-orange-500">

      {/* Title + Year */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex justify-between items-center">
        <span>{title}</span>
        {year && <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>}
      </h3>

      {/* Short Description */}
      <p className="text-gray-700 dark:text-gray-300 font-medium">{shortDescription}</p>

      {/* Detailed Description */}
      {detailedDescription && (
        <p className="text-gray-600 dark:text-gray-400">{detailedDescription}</p>
      )}

      {/* Technologies Used */}
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-700 dark:to-pink-700 dark:text-purple-200 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      {features && (
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsibilities */}
      {responsibilities && (
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">My Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold hover:bg-purple-600 transition"
          >
            <Github size={16} /> View on GitHub
          </a>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold hover:bg-purple-600 transition"
          >
            View here
          </a>
        )}
      </div>


    </div>
  );
}

/* -------- Page Component -------- */
export default function Page() {
  // Work projects
  const workProjects = [
    {
      title: "Team Feature Delivery Platform",
      year: "2025",
      shortDescription:
        "Led development of a scalable platform, coordinating frontend and backend feature delivery with a 6-member team.",
      detailedDescription:
        "This platform enables teams to collaborate efficiently, track progress, and deploy features seamlessly across multiple environments.",
      technologies: ["React.js", "TypeScript", "Node.js", "Firestore","Firebase"],
      features: ["Team collaboration", "Feature tracking", "Backend integration"],
      responsibilities: ["Led development", "Managed team workflow", "Handled backend API integration"],
    },
    {
      title: "Performance-Optimized Dashboard",
      year: "2024",
      shortDescription:
        "Built an interactive dashboard with lazy loading, reducing UI load times by 20% and improving user experience.",
      detailedDescription:
        "This dashboard allows real-time analytics, performance tracking, and visual reporting for business metrics.",
      technologies: ["Next.js", "React.js", "Typescript", "SpringBoot", "Node.js", "AWS", "Sql"],
      features: ["Lazy loading", "Interactive charts", "Real-time updates"],
      responsibilities: ["Developed frontend UI", "Optimized backend API calls", "Improved performance"],
    },
    {
      title: "Enterprise Dashboard Suite",
      year: "2023",
      shortDescription:
        "Designed and maintained dashboards serving multiple teams, with reusable components and automated Jest tests.",
      detailedDescription:
        "A suite of dashboards for enterprise analytics, enabling data-driven decisions across departments.",
      technologies: ["React.js", "Typescript", "Node.js", "Jest","Sql"],
      features: ["Reusable components", "Automated testing", "Multi-team access"],
      responsibilities: ["Maintained dashboards", "Implemented automated tests", "Collaborated with QA"],
    },
  ];

  // Personal projects
  const personalProjects = [
    {
      title: "Personal Portfolio",
      year: "2025",
      shortDescription:
        "Developed a responsive personal portfolio site showcasing projects, skills, and experience.",
      detailedDescription:
        "The portfolio demonstrates work experience, personal projects, and technical skills in a modern, interactive format.",
      technologies: ["Next.js", "TailwindCSS", "Vercel"],
      github: "https://github.com/Geethika-tech/Portfolio",
      features: ["Responsive design", "Interactive sections", "Dark mode support"],
      responsibilities: ["Designed UI/UX", "Implemented React components", "Deployed on Vercel"],
    },
    {
      title: "Financial Dashboard ",
      year: "2025",
      shortDescription:
        "Built a Next.js financial dashboard application with interactive charts and real-time data visualization.",
      detailedDescription:
        "This is a full-stack financial dashboard application built with Next.js — including the newer App Router, Server Components, efficient data fetching, routing, and authentication.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS","PostgreSQL"],
      github: "https://github.com/Geethika-tech/Nextjs-dashboard",
      features: [ "Summary metrics","Chart","Searchable, filterable, and paginated invoices"],
      link:"https://personal-project-gp-nextjs-financial-dashboard.vercel.app/",
      responsibilities: ["Developed frontend", "Integrated APIs", "Implemented chart and other important features","Deployed on vercel"],
    },

  ];

  return (
    <main className="min-h-screen p-6 space-y-16">
      {/* Work Projects */}
      <section className="space-y-6">
        <h2 className="text-4xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mt-10 text-center">Work Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="space-y-6 p-8 rounded-3xl ">
        <h2 className="text-4xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mt-10 text-center">Personal Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
