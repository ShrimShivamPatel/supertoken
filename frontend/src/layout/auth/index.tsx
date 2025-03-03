import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useState } from "react";
import SignIn from "@/components/auth/signin";
import { Outlet, useNavigate } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export function AuthForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  
  const navigate = useNavigate();


  return (
    <div className="h-screen flex justify-center items-center">
      <HomeIcon className="absolute top-4 left-4 hover:fill-white cursor-pointer"
      onClick={()=>navigate('/')}/>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        
        <Outlet/>

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
