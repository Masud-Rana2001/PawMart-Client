import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Field({ label, children, htmlFor, error, setShowPassword, showPassword, isPassword }) {
  const id = htmlFor || getChild(children);

  return (
    <div className="mb-5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2 transition-colors duration-300"
        >
          {label}
        </label>
      )}

      <div className="relative flex flex-col">
        {children}
        {isPassword && (
          <div
            className="absolute top-3 right-3 text-emerald-800 dark:text-emerald-200 cursor-pointer transition-colors duration-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>

      {!!error && (
        <div className="mt-1 text-sm text-red-500 dark:text-red-400 font-medium transition-colors duration-300">
          ⚠ {error}
        </div>
      )}
    </div>
  );
};

const getChild = (children) => {
  const child = React.Children.only(children);
  if ('id' in child.props) {
    return child.props.id;
  }
};

export default Field;
