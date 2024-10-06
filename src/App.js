import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor.js';
import CssEditor from './CssEditor.js';
import Preview from './Preview.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');

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
      <div className="flex flex-1 overflow-hidden">
        <HtmlEditor htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
        <CssEditor cssCode={cssCode} setCssCode={setCssCode} />
      </div>
      <div className="flex-1 overflow-hidden">
        <Preview htmlCode={htmlCode} cssCode={cssCode} />
      </div>
    </div>
  );
}

export default App;
