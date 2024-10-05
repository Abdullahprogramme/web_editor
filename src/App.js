import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor.js';
import CssEditor from './CssEditor.js';
import Preview from './Preview.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-1 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Web Editor</h1>
        <div className="flex space-x-4">
          <a href="https://github.com/Abdullahprogramme" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/abdullahtariq78/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </a>
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