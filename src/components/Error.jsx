import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">{error.message}</h2>
        <p className="text-gray-600">Oops! Something went wrong...</p>
      </div>
    </div>
  );
};

export default ErrorPage;