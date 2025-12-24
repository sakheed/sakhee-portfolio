import React from 'react';
import { Download } from 'lucide-react';

function About() {
  const skills = [
    { category: "Languages", items: ["Python", "Swift", "Java", "C/C++", "JavaScript/Typescript", "R", "SQL", "HTML", "CSS"] },
    { category: "Technologies", items: ["React", "Docker", "Kubernetes", "gRPC", "Git", "CoreML", "Chakra UI", "Visio", "Oracle DB", "MongoDB Realm", "SharePoint"] },
    { category: "Relevant Coursework", items: ['Machine Learning', 'Computer Vision', 'Artificial Intelligence', 'Database Systems', 'Automata Theory', 'Linear Algebra', 'Intro to Algorithms', 'Intro to Software Engineering', 'Data Structures', 'Discrete Math', 'Data Mining', 'Corporate Finance I & II', 'Investments', 'Fundamentals of FinTech'] }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a  <span className="text-blue-600 font-semibold"> product driven technologist</span> with a dual degree in  <span className="text-blue-600 font-semibold"> computer science</span> and <span className="text-blue-600 font-semibold"> finance</span>, minors in <span className="text-blue-600 font-semibold"> artificial intelligence</span> and <span className="text-blue-600 font-semibold"> entreprenuership</span>, and a passion for <span className="text-blue-600 font-semibold"> building impactful solutions</span> at the intersection of finance and technology. 
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Throughout my internships at <span className="font-semibold">JPMC</span>, 
              <span className="font-semibold"> AmeriHealth Caritas</span>, and 
              <span className="font-semibold"> Siegfried Group</span>, I have thrived in fast-paced, 
              collaborative environments, working to <span className="text-blue-600 font-semibold"> automate legacy systems</span>, launch <span className="text-blue-600 font-semibold"> cloud-native tools</span>, and collaborate with cross-functional teams to align product features with stakeholder needs.
              {/* Whether migrating infrastructure to Kubernetes or mentoring student-startups as a Horn Entrepreneurship Ambassador, I’m constantly exploring how <span className="text-blue-600 font-semibold"> tech strategy can drive business transformation</span>. */}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
            Beyond engineering, I'm passionate about advocacy and education—serving as student body president, leading nonprofit initiatives like Project Stree, and organizing the Delaware Youth Environmental Summit.
            </p>


            <p className="text-lg text-gray-600 leading-relaxed">
              My experiences have taught me how to be an effective communicator, a quick learner, and an able leader. I look forward to a future in <span className="text-blue-600 font-semibold">technical product management</span>, where I can leverage my skills to bridge the gap between programming and business teams, creating impactful solutions. 
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noopener noreferrer" 
                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              <a href="#projects" 
                 className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                View Projects
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} 
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;