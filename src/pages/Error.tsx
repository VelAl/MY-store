import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { appPaths } from "@/utils";

export const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to={appPaths.home}>Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};
