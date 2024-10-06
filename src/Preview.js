import React from 'react';

function Preview({ htmlCode, cssCode }) {
  const srcDoc = `
    <html>
      <style>${cssCode}</style>
      <body>${htmlCode}</body>
    </html>
  `;

  return (
    <div className="w-full h-full border pt-1 border-gray-300">
      <iframe
        className="w-full h-full border-none"
        srcDoc={srcDoc}
        title="Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}

export default Preview;
