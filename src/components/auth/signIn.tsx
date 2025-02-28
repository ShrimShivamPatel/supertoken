// React Library
import { useLocation, useNavigate } from "react-router-dom";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ShandCN
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// superTokens
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { signIn } from "supertokens-auth-react/recipe/emailpassword";

// utils
import { LOG } from "@/lib/utils";

const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type SignInFormData = yup.InferType<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const session = useSessionContext();

  const form = useForm<SignInFormData>({ resolver: yupResolver(signInSchema) });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  if (session.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (session.doesSessionExist) {
     navigate(location.state?.from?.pathname || "/dashboard", {
      replace: true,
    });
    return <></>
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      let res = await signIn({
        formFields: [
          { id: "email", value: data.email },
          { id: "password", value: data.password },
        ],
      });
      LOG('RESPONSE',res);
    } catch (err : any){
      LOG('RESPONSE',err);
      console.log("Sign-in failed.", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px] p-6">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Email" />
                    </FormControl>
                    <FormMessage>{errors.email?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage>{errors.password?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
