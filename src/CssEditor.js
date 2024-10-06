import React from 'react';

function CssEditor({ cssCode, setCssCode }) {
  const handleCssChange = (e) => {
    setCssCode(e.target.value);
  };

  return (
    <div className="w-1/2 p-1 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-600">.css</h1>
        <div className="relative flex-1">
            <textarea
            className="absolute inset-0 w-full h-full p-2 bg-gray-800 text-white caret-white font-mono text-sm leading-snug"
            value={cssCode}
            onChange={handleCssChange}
            placeholder="Write CSS here..."
            style={{ resize: 'none' }}
            />
        </div>
    </div>
  );
}

export default CssEditor;
