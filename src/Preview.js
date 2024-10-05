import React from 'react';

function Preview({ htmlCode, cssCode }) {
  const srcDoc = `
    <html>
      <style>${cssCode}</style>
      <body>${htmlCode}</body>
    </html>
  `;

  return (
    <div className="w-full h-full border border-gray-300 pt-1 bg-white">
      <iframe
        className="w-full h-full border-none rounded-lg"
        srcDoc={srcDoc}
        title="Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}

export default Preview;