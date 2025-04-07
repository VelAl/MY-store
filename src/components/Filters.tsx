import { Form, Link, useSearchParams } from "react-router-dom";

import { FormInput } from "./FormInput";
import { Button } from "./ui/button";

export const Filters = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <Form
      className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 items-center"
    >
      <FormInput label="Search product" name="search" defaultValue={search} />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
};
