import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      company: "J.P. Morgan Chase",
      position: "Software Engineer I",
      date: "July 2025 - Present",
      location: "Wilmington, DE",
      description: [
        "Built Databricks dashboards analyzing cloud spending, enabling senior leadership to optimize resource allocation across 10+ infrastructure and development teams.",
        "Designed and managed production-grade AWS infrastructure using Terraform, eliminating manual setup and ensuring consistency.",
        "Developed Python and SQL data transformation pipelines processing large-scale data to support firmwide FP&A forecasting."
      ]
    },
    {
      company: "J.P. Morgan Chase",
      position: "Software Engineering Intern",
      date: "July 2024 - August 2024",
      location: "Wilmington, DE",
      description: [
        "Created a custom AI-powered chatbot using OpenAI LLMs and Python, improving productivity for 50+ model reviewers.",
        "Led a major infrastructure refactor by consolidating 38 Dockerfiles into 6 reusable base images, cutting image build times by over 50% and significantly improving maintainability.",
        "Built and deployed containerized microservices with Kubernetes."
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
      position: "Enterprise Architecture Intern",
      date: "June 2023 - August 2023",
      location: "Newton Square, PA", 
      description: [
        "Built internal dashboards visualizing enterprise system integrations across cloud and on-prem environments, improving visibility into data flows and dependencies.",
        "Worked closely with engineers and business stakeholders to improve technical documentation and architectural clarity."
      ]
    },
    {
      company: "The Siegfried Group",
      position: "Financial Planning and Analysis Intern",
      date: "November 2021 - May 2023",
      location: "Wilmington, DE",
      description: [
        "Automated recurring financial reports using Python to bridge finance and engineering workflows, for data-driven decision-making."
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
                  <ul className="space-y-3 mt-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-600 rounded-full mr-3"></span>
                        <span className="text-gray-600 leading-relaxed">{point}</span>
                      </li>
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
