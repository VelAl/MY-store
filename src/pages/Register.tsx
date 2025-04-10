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
            <FormInput label="name" name="username" />
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <SubmitBtn className="w-full mt-2 " />

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
