import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <iframe 
                  src={process.env.PUBLIC_URL + '/resume.pdf'}
                  title="Resume Preview"
                  className="w-full h-full"
                />
              </div>
              <div className="flex space-x-4">
                <a href={process.env.PUBLIC_URL + '/resume.pdf'}
                   target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                  <ExternalLink size={20} />
                  <span>View Resume</span>
                </a>
                <a href={process.env.PUBLIC_URL + '/resume.pdf'}
                   download
                   className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
