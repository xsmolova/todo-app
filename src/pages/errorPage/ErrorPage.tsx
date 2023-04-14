import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

type Props = {};

// Error page - routing
const ErrorPage = (props: Props) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error) && (
          <i>{`${error.status} ${error.statusText}`}</i>
        )}
      </p>
    </div>
  );
};

export default ErrorPage;
