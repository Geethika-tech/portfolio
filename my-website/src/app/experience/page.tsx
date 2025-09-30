export default function Page() {
  return (

    <main className="min-h-screen flex justify-center p-6">
      <div className="max-w-4xl w-full p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Work Experience
        </h1>

        {/* Work Experience Section */}
        <section className="space-y-6">
          <Job
            role="Lead Developer"
            company="BuildLess"
            location="Sydney, Australia"
            date="Aug 2025 – Present"
            points={[
              "Led frontend and backend development for a 6-engineer team, delivering features on schedule and improving code maintainability.",
              "Refactored React.js + TypeScript code for maintainability, reducing technical debt and improving readability.",
              "Supported knowledge transfer and onboarding for new team members, providing guidance on best practices and troubleshooting, while managing own deliverables and coordinating feature implementation across the team.",
              "Collaborated with cross-functional teams to plan features, ensuring alignment with product goals and user needs.",
            ]}
            skills={[
              "Leadership",
              "React.js",
              "TypeScript",
              "Full-stack Development",
              "Agile Collaboration",
            ]}
          />

          <Job
            role="Software Engineer"
            company="Startworks Technology Pvt Ltd"
            location="Visakhapatnam, India"
            date="Jul 2024 – Aug 2025"
            points={[
              "Optimized UI rendering for faster interactions by 20% (reduced average load time from 5s to 4s) through lazy loading in React.js + Next.js, improving user experience for ~200 daily users.",
              "Developed and integrated Spring Boot REST APIs, streamlining backend data retrieval and reducing response times by 18%.",
              "Deployed applications to AWS EC2, ensuring stable production releases and minimizing downtime.",
              "Delivered key features that directly contributed to client product growth and business milestones.",
            ]}
            skills={[
              "Next.js",
              "React.js",
              "Spring Boot",
              "AWS EC2",
              "Performance Optimization",
            ]}
          />

          <Job
            role="Senior Systems Engineer"
            company="Infosys Ltd"
            location="Hyderabad, India"
            date="Nov 2020 – May 2023"
            points={[
              "Designed and maintained enterprise dashboards using React.js and Node.js, supporting multiple teams with reliable, real-time data.",
              "Developed reusable UI components, cutting recurring defects by 25% and accelerating feature delivery across 5 enterprise dashboards.",
              "Implemented Jest testing, ensuring robust coverage and catching pre-production bugs.",
              "Collaborated across teams to deliver client-critical features on time and with high quality.",
            ]}
            skills={[
              "React.js",
              "Node.js",
              "Reusable Components",
              "Jest Testing",
              "Cross-team Collaboration",
            ]}
          />
        </section>

        {/* Volunteer Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Volunteer Experience
          </h2>

          <Job
            role="Website Developer"
            company="The Flannel Project"
            location="Sydney, Australia"
            date="May 2025 – Aug 2025"
            description="The Flannel Project is a non-profit initiative raising awareness and support for mental health programs."
            points={[
              "Enhanced user experience and accessibility for a Squarespace-based site, improving navigation and mobile responsiveness for ~100 monthly visitors.",
              "Advised the founder with design and UX improvements, aligning technical delivery with project goals.",
              "Optimized UI for responsiveness, ensuring consistent branding across devices.",
            ]}
            skills={[
              "Squarespace",
              "UX Design",
              "Accessibility",
              "Responsive Design",
              "Collaboration",
            ]}
          />
        </section>
      </div>
    </main>
  );
}

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
