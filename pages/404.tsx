import React from "react";

type Props = {};

const PageNotFound = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-14">
      <h1 className="text-3xl font-bold underline">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <button
        className="text-blue-500 hover:underline cursor-pointer"
        onClick={() => window.history.back()}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
