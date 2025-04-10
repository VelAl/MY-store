import { Form, Link } from "react-router-dom";

import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appPaths } from "@/utils";

export const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method="post" className="flex flex-col gap-2">
            <FormInput className="bg-white" label="name" name="username" />
            <FormInput
              className="bg-white"
              type="email"
              label="email"
              name="email"
            />
            <FormInput
              className="bg-white"
              type="password"
              label="password"
              name="password"
            />
            <Button type="submit" variant="default" className="w-full mt-2">
              Submit
            </Button>

            <p className="text-center">
              Already a member ?{" "}
              <Button asChild variant="link">
                <Link to={appPaths.login}>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
