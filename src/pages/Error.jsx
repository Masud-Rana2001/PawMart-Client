import {useContext} from "react";
import { useRouteError, Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import AuthContext from './../contexts/AuthContext';

const Error = () => {
  const {userError} = useContext(AuthContext)
  const err = useRouteError() || userError;
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-emerald-100 via-emerald-50 to-green-100 dark:from-emerald-800 dark:via-emerald-900 dark:to-green-900 backdrop-blur-md text-center p-6">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-red-700 mb-2">
        Oops! Something went wrong 😢
      </h1>

      <p className="text-gray-100 mb-4">
        {err?.statusText || err?.message || "Unexpected error occurred."}
      </p>

      {err?.status && (
        <p className="text-red-600 font-semibold text-lg mb-4">
          Error Code: {err.status}
        </p>
      )}

      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default Error;
