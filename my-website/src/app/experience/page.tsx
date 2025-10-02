"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type JobProps = {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
  skills: string[];
  colorScheme: {
    bg: string;
    text: string;
    hover: string;
  };
};

const jobs: JobProps[] = [
  {
    role: "Lead Developer",
    company: "BuildLess",
    location: "Sydney, Australia",
    date: "Aug 2025 – Present",
    points: [
      "Led frontend and backend development for a 6-engineer team.",
      "Refactored React.js + TypeScript code for maintainability.",
      "Onboarded new team members and provided best practice guidance.",
      "Collaborated with cross-functional teams on feature planning.",
    ],
    skills: ["Leadership", "React.js", "TypeScript", "Full-stack Development", "Agile Collaboration"],
    colorScheme: { bg: "bg-white", text: "text-purple-600", hover: "hover:shadow-md" },
  },
  {
    role: "Software Engineer",
    company: "Startworks Technology Pvt Ltd",
    location: "Visakhapatnam, India",
    date: "Jul 2024 – Aug 2025",
    points: [
      "Optimized UI rendering and improved page load times by 20%.",
      "Developed and integrated Spring Boot REST APIs.",
      "Deployed stable applications to AWS EC2.",
      "Delivered key features contributing to client product growth.",
    ],
    skills: ["Next.js", "React.js", "Spring Boot", "AWS EC2", "Performance Optimization"],
    colorScheme: { bg: "bg-white", text: "text-orange-600", hover: "hover:shadow-md" },
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Ltd",
    location: "Hyderabad, India",
    date: "Nov 2020 – May 2023",
    points: [
      "Designed and maintained enterprise dashboards using React.js and Node.js.",
      "Developed reusable UI components reducing defects by 25%.",
      "Implemented Jest testing for robust coverage.",
      "Delivered client-critical features on time through cross-team collaboration.",
    ],
    skills: ["React.js", "Node.js", "Reusable Components", "Jest Testing", "Cross-team Collaboration"],
    colorScheme: { bg: "bg-white", text: "text-purple-600", hover: "hover:shadow-md" },
  },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center p-6 ">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Work Experience</h1>

      {/* Responsive cards grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {jobs.map((job, idx) => (
          <Card
            key={idx}
            className={`w-full sm:w-[45%] md:w-[30%] ${job.colorScheme.bg} ${job.colorScheme.hover} p-6 rounded-2xl shadow transition duration-300`}
            style={{ maxHeight: "60vh" }}
          >
            <CardHeader>
              <CardTitle className={`font-semibold mb-3 text-lg ${job.colorScheme.text}`}>
                {job.company} — {job.role}
              </CardTitle>
              <CardDescription>{job.date} | {job.location}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-gray-700 overflow-y-auto max-h-[50vh]">
              <ul className="list-disc list-inside space-y-1">
                {job.points.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
