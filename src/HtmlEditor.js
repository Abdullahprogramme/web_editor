import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // You can choose any Prism theme

function HtmlEditor({ htmlCode, setHtmlCode }) {
  const [highlightedCode, setHighlightedCode] = useState('');
  const textareaRef = useRef(null);

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  useEffect(() => {
    // Automatically highlight the user's code input using Prism
    setHighlightedCode(Prism.highlight(htmlCode, Prism.languages.html, 'html'));
  }, [htmlCode]);

  return (
    <div className="w-full p-1 flex flex-col">
      <h1 className="text-2xl font-bold text-gray-600">.html</h1>

      {/* Container for the editor */}
      <div className="relative flex-1 mt-4">
        {/* Highlighted code - displayed behind the textarea */}
        <pre
          className="absolute inset-0 overflow-auto p-2 bg-gray-800 text-white rounded font-mono text-sm leading-normal box-border"
          style={{ lineHeight: '1.5', padding: '0.5rem' }} // Ensuring the same padding and line height
        >
          <code
            className="language-html font-mono text-sm"
            style={{ lineHeight: '1.5' }} // Matching the line height
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {/* Transparent textarea for user input */}
        <textarea
          ref={textareaRef}
          className="absolute inset-0 w-full h-full p-2 bg-transparent caret-white font-mono text-sm leading-normal text-transparent box-border"
          value={htmlCode}
          onChange={handleHtmlChange}
          placeholder="Write HTML here..."
          style={{ resize: 'none', lineHeight: '1.5', padding: '0.5rem' }} // Matching the line height and padding
        />
      </div>
    </div>
  );
}

export default HtmlEditor;
