import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export const Cart = () => {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to={"/"} className="text-7xl text-red-600">
        home
      </Link>
      <div>
        <Button asChild size="lg">
          <Link to={"/"}>home</Link>
        </Button>
      </div>
    </div>
  );
};
