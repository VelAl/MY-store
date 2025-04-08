import { Form, Link, useLoaderData, useSearchParams } from "react-router-dom";

import { T_ProductsResponse } from "@/utils";

import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { Button } from "./ui/button";

const sortOptions = ["a-z", "z-a", "high", "low"];

export const Filters = () => {
  const { meta } = useLoaderData() as T_ProductsResponse;
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || undefined;
  const company = searchParams.get("company") || undefined;
  const order = searchParams.get("order") || undefined;

  return (
    <Form
      className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 items-center"
    >
      <FormInput label="Search product" name="search" defaultValue={search} />
      <FormSelect
        name="category"
        label="Select category"
        defaultValue={category}
        options={meta.categories}
      />
      <FormSelect
        name="company"
        label="Select company"
        defaultValue={company}
        options={meta.companies}
      />
      <FormSelect
        name="order"
        label="Sort by"
        defaultValue={order}
        options={sortOptions}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Apply filters
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="secondary"
        className="self-end mb-2 border"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
};
