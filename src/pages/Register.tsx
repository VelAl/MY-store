import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appPaths, fetcher } from "@/utils";

export const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method="post" className="flex flex-col gap-2">
            <FormInput
              className="bg-white"
              label="name"
              name="username"
              defaultValue="name"
            />
            <FormInput
              className="bg-white"
              type="email"
              label="email"
              name="email"
              defaultValue="email@gmail.com"
            />
            <FormInput
              className="bg-white"
              type="password"
              label="password"
              name="password"
              defaultValue="password"
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
