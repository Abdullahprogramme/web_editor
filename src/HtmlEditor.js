import React from 'react';

function HtmlEditor({ htmlCode, setHtmlCode }) {
  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="w-1/2 p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-600">.html</h1>
        <div className="relative flex-1">
            <textarea
            className="absolute inset-0 w-full h-full p-2 bg-gray-800 text-white caret-white font-mono text-sm leading-snug"
            value={htmlCode}
            onChange={handleHtmlChange}
            placeholder="Write HTML here..."
            style={{ resize: 'none' }}
            />
        </div>
    </div>
  );
}

export default HtmlEditor;