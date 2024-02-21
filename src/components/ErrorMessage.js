import React from "react";

const ErrorMessage = ({ topPosition }) => {
  return (
    <div>
      <i
        className={`text-sm text-red-500 relative ${
          topPosition ? topPosition : "-top-11"
        }  `}
      >
        Oops! Something went wrong.
      </i>
    </div>
  );
};

export default ErrorMessage;
