import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      company: "JPMorgan Chase & Co.",
      position: "Software Engineering Intern",
      date: "Summer 2024",
      location: "Wilmington, DE",
      description: [
        "Developed a custom AI-powered chatbot using OpenAI LLMs and Python, streamlining daily operations for 50+ model reviewers.",
        "Designed and deployed containerized microservices using Kubernetes and Docker, accelerating deployment pipelines by 50%.",
        "Led migration from on-prem systems to AWS cloud, configuring secure S3 storage and optimizing resource provisioning.",
        "Refactored infrastructure by consolidating from 38 Dockerfiles to 6, improving maintainability and reducing image build times."
      ]
    },
    {
      company: "University of Delaware",
      position: "Infrastructure Teaching Assistant",
      date: "Fall & Spring 2024",
      location: "Newark, DE",
      description: [
        "Built Python and JavaScript automation tools to streamline onboarding and data analytics for 50+ teaching assistants.",
        "Enhanced system reliability by proactively testing and maintaining backend scripts used across multiple instructional platforms."
      ]
    },
    {
      company: "AmeriHealth Caritas",
      position: "Information Solutions Intern",
      date: "Summer 2023",
      location: "Philadelphia, PA", 
      description: [
        "Designed scalable solution architecture diagrams and built an internal SharePoint portal to centralize tech lab documentation.",
        "Collaborated across IT and operations teams to document data flow and improve stakeholder visibility into enterprise systems."
      ]
    },
    {
      company: "Siegfried Group",
      position: "Financial Planning & Analysis Intern",
      date: "Summer 2022",
      location: "Wilmington, DE",
      description: [
        "Automated repetitive monthly reporting tasks via scripting, enabling faster turnaround and increased forecasting accuracy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase size={24} className="text-blue-600" />
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <ul className="text-gray-600 list-disc list-inside space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
