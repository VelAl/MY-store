import { useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div>
      <h4 className="font-boldc text-4xl">there was an error...</h4>
      {error instanceof Error && (
        <p className="text-red-500  p-4">
          {error.name}: {error.message}
        </p>
      )}
    </div>
  );
};
