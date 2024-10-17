import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // You can choose any Prism theme

// importing clear and copy icons
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { AiOutlineClear } from 'react-icons/ai';

function CssEditor({ cssCode, setCssCode }) {
  const [highlightedCode, setHighlightedCode] = useState('');
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  const handleCssChange = (e) => {
    setCssCode(e.target.value);
  };

  useEffect(() => {
    // Automatically highlight the user's code input using Prism
    setHighlightedCode(Prism.highlight(cssCode, Prism.languages.css, 'css'));
  }, [cssCode]);

  useEffect(() => {
    const handleScroll = () => {
      if (preRef.current && textareaRef.current) {
        preRef.current.scrollTop = textareaRef.current.scrollTop;
        preRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    };

    const textarea = textareaRef.current;
    textarea.addEventListener('scroll', handleScroll);

    return () => {
      textarea.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const adjustHeight = () => {
      if (textareaRef.current && preRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        preRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustHeight();
  }, [cssCode]);

  return (
    <div className="w-full h-full p-1 flex flex-col">
      <span className='flex flex-row items-start'>
          <h1 className="text-2xl font-bold text-gray-600">.css</h1>
          <div className='flex flex-row items-center space-x-2 ml-auto'>
              <button 
                className='p-2 rounded-full hover:bg-gray-200' 
                onClick={() => navigator.clipboard.writeText(cssCode)}
                title='Copy to clipboard'
              >
                <HiOutlineClipboardCopy className='text-xl text-gray-600' />
              </button>
              <button 
                className='p-2 rounded-full hover:bg-gray-200' 
                onClick={() => setCssCode('')}
                title='Clear CSS code'
              >
                <AiOutlineClear className='text-xl text-gray-600' />
              </button>
          </div>
      </span>
      
      {/* Container for the editor */}
      <div className="relative flex-1 mt-4 overflow-auto">
        {/* Highlighted code - displayed behind the textarea */}
        <pre
          ref={preRef}
          className="absolute inset-0 overflow-hidden p-2 bg-gray-800 text-white rounded font-mono text-sm leading-normal box-border"
          style={{ lineHeight: '1.5', padding: '0.5rem', margin: 0 }} // Ensuring the same padding, line height, and removing margin
        >
          <code
            className="language-css font-mono text-sm"
            style={{ lineHeight: '1.5' }} // Matching the line height
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {/* Transparent textarea for user input */}
        <textarea
          ref={textareaRef}
          className="absolute inset-0 w-full h-full p-2 bg-transparent caret-white font-mono text-sm leading-normal text-transparent box-border"
          value={cssCode}
          onChange={handleCssChange}
          placeholder="Write CSS here..."
          style={{ resize: 'none', lineHeight: '1.5', padding: '0.5rem', margin: 0 }} // Matching the line height, padding, and removing margin
        />
      </div>
    </div>
  );
}

export default CssEditor;
