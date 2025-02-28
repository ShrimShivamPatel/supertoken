// React Library
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ShandCN
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// // superTokens
import { signUp } from "supertokens-auth-react/recipe/emailpassword";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

// // utils
import { LOG } from "@/lib/utils";

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[\W_]/, "Must contain at least one special character")
    .required("Password is required"),
  name: yup.string().required(),
});

type SignUpFormData = yup.InferType<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const session = useSessionContext();
  const form = useForm<SignUpFormData>({ resolver: yupResolver(signUpSchema) });

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
  const handleSignUp: SubmitHandler<SignUpFormData> = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      let res = await signUp({
        formFields: [
          { id: "name", value: data.name },
          { id: "email", value: data.email },
          { id: "password", value: data.password },
        ],
      });
      LOG("RESPONSE", res);
    } catch (err: any) {
      LOG("RESPONSE", err);
      console.log("Sign-up failed.", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px] p-6">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(handleSignUp)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Name" />
                    </FormControl>
                    <FormMessage>{errors.name?.message}</FormMessage>
                  </FormItem>
                )}
              />
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
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
