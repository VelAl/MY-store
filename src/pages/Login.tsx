import { Form, Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveUser } from "@/features/user/userSlice";
import { appPaths } from "@/utils";
import { useAppDispatch } from "@/utils/hooks";
import { loginAsGuestRequest } from "@/utils/requests";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async (): Promise<void> => {
    try {
      const { username, jwt } = await loginAsGuestRequest();

      dispatch(saveUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong...";

      toast.error("Login failed...", { description: message });
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" label="password" name="password" />

            <SubmitBtn text="Login" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuest}
              className="w-full mt-4"
            >
              Guest User
            </Button>

            <p className="text-center mt-4">
              Not a member yet?{" "}
              <Button asChild variant="link">
                <Link to={appPaths.register}>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
