
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink, Github, Code, Database, Layout } from 'lucide-react';

// Expanded Data including Projects
const portfolioData = {
  name: 'Nilo Pereira Siqueira',
  role: 'Systems Developer & IT Professional',
  contact: {
    email: 'nilosiqueiratj@email.com',
    phone: '(24) 99843-8644',
    linkedin: 'linkedin.com/in/nilosiqueira',
    location: 'Resende, RJ, Brazil',
  },
  summary: 'Information Technology professional with experience in technical support and systems development, seeking an opportunity to apply my skills in systems analysis, data manipulation, and process improvement. I am enthusiastic about contributing to a dynamic and innovative team.',
  experience: [
    {
      company: 'Hexa TI',
      title: 'IT Technician',
      period: 'August 2024 – September 2024',
      duties: [
        'Provided technical support to users at SAMER Hospital.',
        'Performed network system integration, ensuring the efficiency and continuity of hospital services.',
      ],
    },
    {
      company: 'INB (Indústrias Nucleares do Brasil)',
      title: 'Helpdesk Assistant',
      period: 'October 2024 – November 2024',
      duties: [
        'Provided technical support in computer maintenance and program installation.',
        'Handled access release and network configuration, including network cable crimping.',
        'Offered support in the use of corporate programs, ensuring the continuity of operations.',
      ],
    },
    {
      company: 'Easy Communication Technology',
      title: 'Systems Developer',
      period: 'September 2020 – October 2021',
      duties: [
        'Developed systems from scratch using low-code tools.',
        'Performed maintenance and optimization of existing systems.',
        'Executed software tests with Selenium IDE to ensure product quality.',
        'Collaborated with the team to identify and implement improvements in development processes.',
      ],
    },
  ],
  education: {
    degree: 'Higher Course in Systems Analysis and Development',
    institution: 'UNOPAR University',
    completion: 'Completed: March 2017',
  },
  skills: [
    { category: 'Programming Languages', list: ['JavaScript', 'Node.js', 'React.js', 'HTML', 'CSS'] },
    { category: 'Databases', list: ['SQL', 'Data Manipulation'] },
    { category: 'Development Tools', list: ['Selenium IDE', 'Low-code Tools'] },
    { category: 'Office Suite', list: ['Word', 'Excel', 'PowerPoint'] },
    { category: 'Languages', list: ['Basic English'] },
  ],
  certifications: [
    'Bootcamp Rocketseat - Javascript | ReactJS | NodeJS | React-Native',
    'UDEMY - Modern Javascript',
  ],
  projects: [
    {
      title: 'Low-Code System Development',
      description: 'Developed a complete business system from scratch using low-code platforms, reducing development time and meeting specific client needs.',
      tags: ['Low-code', 'System Design', 'Business Logic'],
      icon: <Layout size={24} />
    },
    {
      title: 'Hospital Network Integration',
      description: 'Executed the integration of network systems for SAMER Hospital, ensuring high availability and data consistency for medical services.',
      tags: ['Networking', 'Integration', 'Infrastructure'],
      icon: <Database size={24} />
    },
    {
      title: 'Automated Testing Suite',
      description: 'Implemented automated testing workflows using Selenium IDE to validate software reliability and catch regressions early.',
      tags: ['Selenium', 'QA', 'Automation'],
      icon: <Code size={24} />
    }
  ]
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-fade-in">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-4">
              {portfolioData.name.charAt(0)}
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
              Hello, I'm <span className="text-blue-600">{portfolioData.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 max-w-2xl">
              {portfolioData.role}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="flex space-x-4 mt-8">
              <button 
                onClick={() => setActiveTab('projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                View My Work
              </button>
              <button 
                 onClick={() => setActiveTab('contact')}
                className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition duration-300 shadow-sm"
              >
                Contact Me
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h2>
               <Section title="Experience">
                <div className="space-y-8">
                  {portfolioData.experience.map((job, index) => (
                    <ExperienceItem key={index} {...job} />
                  ))}
                </div>
              </Section>

              <Section title="Education">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{portfolioData.education.degree}</h3>
                  <p className="text-gray-600">{portfolioData.education.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{portfolioData.education.completion}</p>
                </div>
              </Section>
              
              <Section title="Skills">
                <div className="space-y-4">
                  {portfolioData.skills.map((skill, index) => (
                    <div key={index} className="flex flex-col sm:flex-row">
                      <h3 className="w-full sm:w-1/3 font-semibold text-gray-900 mb-2 sm:mb-0">{skill.category}</h3>
                      <div className="w-full sm:w-2/3 flex flex-wrap gap-2">
                        {skill.list.map((item, itemIndex) => (
                          <span key={itemIndex} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
              
              <Section title="Certifications">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {portfolioData.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="animate-fade-in max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed h-24 overflow-hidden">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                <p className="text-blue-100">I'm always open to discussing new projects or opportunities.</p>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-200">
                      <Mail size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 font-medium">Email Me</p>
                      <p className="text-lg text-gray-900 font-semibold">{portfolioData.contact.email}</p>
                    </div>
                    <ExternalLink size={18} className="ml-auto text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <a href={`tel:${portfolioData.contact.phone.replace(/\D/g, '')}`} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-200">
                      <Phone size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 font-medium">Call Me</p>
                      <p className="text-lg text-gray-900 font-semibold">{portfolioData.contact.phone}</p>
                    </div>
                    <ExternalLink size={18} className="ml-auto text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-200">
                      <Linkedin size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 font-medium">Connect on LinkedIn</p>
                      <p className="text-lg text-gray-900 font-semibold">{portfolioData.contact.linkedin}</p>
                    </div>
                    <ExternalLink size={18} className="ml-auto text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-lg text-gray-900 font-semibold">{portfolioData.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
