import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import Preview from './Preview';

// importing icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 lg:px-10 flex justify-between items-center">
          <span className="flex items-center">
              <FaHtml5 className="text-3xl mr-2 text-red-400" />
              <FaCss3Alt className="text-3xl mr-2 text-red-400" />
              <h1 className="text-3xl font-bold tracking-wide">
                Web Editor <span className="text-indigo-300">Pro</span>
              </h1>
          </span>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Abdullahprogramme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-all"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullahtariq78/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-all"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-start space-x-3 px-6 pt-2 mb-4">
        <button
          onClick={() => setActiveTab('html')}
          className={`py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none transition-all ${
            activeTab === 'html'
              ? 'bg-indigo-700 text-white hover:bg-indigo-600 shadow-md'
              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none transition-all ${
            activeTab === 'css'
              ? 'bg-indigo-700 text-white hover:bg-indigo-600 shadow-md'
              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          CSS
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        <div className="flex-1 overflow-hidden">
          {activeTab === 'html' ? (
            <HtmlEditor htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
          ) : (
            <CssEditor cssCode={cssCode} setCssCode={setCssCode} />
          )}
        </div>
        <div className="flex-1 overflow-hidden">
          <Preview htmlCode={htmlCode} cssCode={cssCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
