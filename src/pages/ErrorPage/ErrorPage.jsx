import React from 'react';
import { Link, useRouteError } from 'react-router';


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                
                <div className="mb-8">
                    <div className="text-[120px] leading-none font-bold text-gray-200">404</div>
                    <div className="text-6xl">😕</div>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Oops! Something went wrong
                </h1>

                <p className="text-gray-600 text-lg mb-8">
                    {error?.statusText || error?.message || "The page you're looking for doesn't exist or has been moved."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                    >
                        Go Back Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="inline-block border border-gray-300 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

