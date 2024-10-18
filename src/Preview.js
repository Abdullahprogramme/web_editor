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
      {htmlCode.trim() === '' && cssCode.trim() === '' ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-white text-black">
            <p className="text-lg font-semibold mb-2">Welcome to the code editor</p>
            <p className="text-md mb-2">Write your code and see the preview here</p>
            <p className="text-md italic">Happy coding!</p>
        </div>
      ) : (
        <iframe
            className="w-full h-full border-none"
            srcDoc={srcDoc}
            title="Preview"
            sandbox="allow-scripts"
        />
      )}
    </div>
  );
}

export default Preview;
