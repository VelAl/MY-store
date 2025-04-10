import { Form } from "react-router-dom";

import { FormInput } from "./FormInput";
import { SubmitBtn } from "./SubmitBtn";

export const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" />
      <FormInput label="address" name="address" />

      <SubmitBtn text="Place Your Order" />
    </Form>
  );
};
