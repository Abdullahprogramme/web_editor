import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import Preview from './Preview';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [activeTab, setActiveTab] = useState('html'); // State to manage active tab

  return (
    <div className="h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Web Editor</h1>
          <div className="flex space-x-4">
            <a href="https://github.com/Abdullahprogramme" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/abdullahtariq78/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-end space-x-2 px-4 pt-1 mb-1"> {/* Reduced margin and padding */}
        <button
          onClick={() => setActiveTab('html')}
          className={`py-2 px-6 rounded-md font-semibold focus:outline-none transition-all ${
            activeTab === 'html'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg'
              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`py-2 px-6 rounded-md font-semibold focus:outline-none transition-all ${
            activeTab === 'css'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg'
              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          CSS
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
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
  );
}

export default App;
