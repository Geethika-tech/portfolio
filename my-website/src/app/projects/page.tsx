import { Github } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="max-w-5xl w-full rounded-2xl p-8 space-y-12">

       {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* BuildLess Project */}
            <ProjectCard
              title="Team Feature Delivery Platform"
              company="BuildLess"
              description="Led development of a scalable platform, coordinating frontend and backend feature delivery with a 6-member team."
              tags={["React.js", "TypeScript", "Team Leadership"]}
            />

            {/* Startworks Project */}
            <ProjectCard
              title="Performance-Optimized Dashboard"
              company="Startworks"
              description="Built an interactive dashboard with lazy loading, reducing UI load times by 20% and improving user experience."
              tags={["Next.js", "Spring Boot", "AWS"]}
            />

            {/* Infosys Project */}
            <ProjectCard
              title="Enterprise Dashboard Suite"
              company="Infosys"
              description="Designed and maintained dashboards serving multiple teams, with reusable components and automated Jest tests."
              tags={["React.js", "Node.js", "Jest"]}
            />

            {/* Personal Project with GitHub link */}
            <ProjectCard
              title="Personal Portfolio"
              company="Personal Project"
              description="Developed a responsive personal portfolio site showcasing projects, skills, and experience."
              tags={["Next.js", "TailwindCSS", "Vercel"]}
              github="https://github.com/Geethika-tech/Portfolio"
            />

            <ProjectCard
                          title="Financial Dashboard"
                          company="Personal Project"
                          description="Built a Next.js financial dashboard application with interactive charts and real-time data visualization."
                          tags={["Next.js", "TypeScript", "Recharts", "TailwindCSS"]}
                          github="https://github.com/Geethika-tech/Nextjs-dashboard"
                        />
          </div>
        </section>
      </div>
    </main>
  );
}

/* -------- Job Component -------- */
type JobProps = {
  role: string;
  company: string;
  location: string;
  date: string;
  description?: string;
  points: string[];
  skills: string[];
};

function Job({ role, company, location, date, description, points, skills }: JobProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-gray-900">
        {company} — {role}
      </h3>
      <p className="text-sm text-gray-600">
        {date} | {location}
      </p>
      {description && <p className="text-gray-700">{description}</p>}

      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      {/* Skills Learned */}
      <div className="flex flex-wrap gap-2 pt-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------- Project Card Component -------- */
type ProjectCardProps = {
  title: string;
  company: string;
  description: string;
  tags: string[];
  github?: string;
};

function ProjectCard({ title, company, description, tags, github }: ProjectCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-200 space-y-3">
      <h3 className="text-lg font-bold text-gray-900">
        {title} <span className="text-sm text-gray-500">({company})</span>
      </h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs bg-purple-100 text-purple-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
        >
          <Github size={16} /> View on GitHub
        </a>
      )}
    </div>
  );
}
