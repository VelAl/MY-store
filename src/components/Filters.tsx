import { Form, Link, useLoaderData } from "react-router-dom";

import { appPaths, T_ProductsResponse } from "@/utils";
import { useProductsPageSearchParams } from "@/utils/hooks";

import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";
import { FormRange } from "./FormRange";
import { FormSelect } from "./FormSelect";
import { Button } from "./ui/button";

const sortOptions = ["a-z", "z-a", "high", "low"];

export const Filters = () => {
  const { meta } = useLoaderData() as T_ProductsResponse;
  const searchParams = useProductsPageSearchParams();

  return (
    <Form
      className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 items-center"
    >
      <FormInput
        label="Search product"
        name="search"
        defaultValue={searchParams.search || ""}
      />
      <FormSelect
        name="category"
        label="Select category"
        defaultValue={searchParams.category}
        options={meta.categories}
      />
      <FormSelect
        name="company"
        label="Select company"
        defaultValue={searchParams.company}
        options={meta.companies}
      />
      <FormSelect
        name="order"
        label="Sort by"
        defaultValue={searchParams.order}
        options={sortOptions}
      />
      <FormRange name={"price"} defaultValue={searchParams.price} />
      <FormCheckbox
        name="shipping"
        label="Free shipping"
        defaultValue={searchParams.shipping}
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
        <Link to={appPaths.products}>reset</Link>
      </Button>
    </Form>
  );
};
