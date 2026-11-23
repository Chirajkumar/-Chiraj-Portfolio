import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio showcasing my projects, technical skills, experience, certifications, and education.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    liveDemo: "https://chirajkumar.github.io/-Chiraj-Portfolio/",
  },
  {
    title: "Temple Billing Multi-Counter System",
    description:
      "Developed a web-based temple billing application for managing multiple billing counters and temple services.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Chirajkumar/Temple-Billing-Multi-Counter",
  },
  
  {
    title: "Decentralized Voting System with Multimodal Biometric Authentication",
    description:
      "Developed a secure blockchain-based voting system with Face Recognition, Palm Recognition, and OTP authentication for voter verification.",
    technologies: [
      "Python",
      "OpenCV",
      "Blockchain",
      " Supabase ",
    ],
    github: "https://github.com/Chirajkumar/Online-Voting-System",
  },

  {
    title: "Karthik Sales Ecommerce ",
    description:
      "Developed a web-based sales and inventory management system with product, stock, billing, and order management features",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Chirajkumar/Karthik-Agarbatti-Sales-website",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Project Header */}
              <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-sm sm:text-base text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm sm:text-base transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm sm:text-base transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}