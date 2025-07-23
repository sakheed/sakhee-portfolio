import React, { useState } from "react";
import {
  Github,
  Globe,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import signalq from "./images/projects/signalq.PNG";
import haksafety from "./images/projects/haksafety.png";
import moviepedia from "./images/projects/moviepedia.png";
import sudoku from "./images/projects/sudoku.png";

const projectImages = { signalq, moviepedia, sudoku, haksafety };

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "SignalQ",
      image: projectImages.signalq,
      date: "September 2024 - Present",
      description:
        "Collaborated in an Agile Team to build an iOS app in Swift that records low-latency audio, employs machine learning algorithms to classify gunshots, triggers storage of associated geographic data in Realm database, and facilitates upload to remote server via GRPC.",
      technologies: ["Swift", "Machine Learning", "GRPC", "Realm", "iOS"],
      githubLink: "https://github.com/sakheed/capstone-ios-app",
      status: "Completed",
    },
    {
      title: "MoviePedia",
      image: projectImages.moviepedia,
      date: "December 2023",
      description:
        "Collaborated in Agile team to create a website for users to drag and drop movies into custom lists and admin to add new movies.",
      technologies: ["JavaScript", "HTML", "CSS", "React"],
      websiteLink: "https://amansjot.github.io/Team5-MoviePedia/",
      githubLink: "https://github.com/amansjot/Team5-MoviePedia",
      status: "Completed",
    },
    {
      title: "Sudoku AI Solver",
      image: projectImages.sudoku,
      date: "March 2024",
      description:
        "Created an AI algorithm to solve sudoku puzzles using advanced constraint satisfaction and backtracking algorithms.",
      technologies: ["Python", "AI", "Algorithms", "Constraint Satisfaction"],
      githubLink: "https://github.com/sakheed/sudoku",
      status: "Completed",
    },
    {
      title: "HAKSafety",
      image: projectImages.haksafety,
      date: "April 2023",
      description:
        "Worked in an Agile team to develop and deploy an online panic button using TypeScript, React, HTML, CSS, & Chakra. Won first place for M&T Bank's Hack, out of 50 projects.",
      technologies: ["TypeScript", "React", "Chakra UI", "HTML", "CSS"],
      websiteLink: "https://amansjot.github.io/HAKSafety/",
      githubLink: "https://github.com/amansjot/HAKSafety",
      status: "Award Winner",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      projects[currentProject].status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : projects[currentProject].status === "Award Winner"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {projects[currentProject].status}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {projects[currentProject].title}
                    </h3>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    {projects[currentProject].date}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {projects[currentProject].description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {projects[currentProject].websiteLink && (
                    <a
                      href={projects[currentProject].websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <Globe size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={projects[currentProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center space-x-2"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
