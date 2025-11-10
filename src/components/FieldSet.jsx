import React from 'react';

function FieldSet({ label, children }) {
  return (
    <fieldset className="border border-cyan-600/40 rounded-2xl p-6 mb-6 bg-sky-900/20 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-cyan-800/30">
      {label && (
        <legend className="px-4 text-2xl font-semibold text-cyan-500 rounded-md shadow-sm ">
          {label}
        </legend>
      )}
      <div className="mt-4 space-y-4">{children}</div>
    </fieldset>
  );
}

export default FieldSet;
