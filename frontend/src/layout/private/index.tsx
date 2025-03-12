// import { AppSidebar } from "@/components/dashboard/app-sidebar";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

// import { Separator } from "@/components/ui/separator"

// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"

// import { HomeIcon } from "lucide-react";

// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {

//   const navigate = useNavigate();

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>

//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">

//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
//             {/* <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb> */}
//           </div>

//           {/* <div className="ml-auto px-5">
//             <HomeIcon className="hover:fill-white cursor-pointer" onClick={()=>navigate('/')}/>
//           </div> */}
//         </header>

//         {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div> */}

//       </SidebarInset>
//     </SidebarProvider>
//   )
// }

import { Avatar } from "@/components/avatar";
import { Badge, BadgeSizes, BadgeTypes } from "@/components/badge";
import { Button } from "@/components/button";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Input } from "@/components/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { FieldError } from "react-hook-form";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <header className="h-full p-4">
        {/* Sidebar Trigger */}
        <div className="mb-8">
          <SidebarTrigger className="-ml-1" />
        </div>

        {/* Grid Layout for Components */}
        <div className="grid grid-cols-12 gap-6 grid-rows-12 min-h-screen">
          {/* Avatar Section */}
          <Section title="Avatar Variants" className="row-span-1 col-span-6">
            <div className="flex flex-wrap gap-4">
              <Avatar name="Shivam Patel" size={6} className="bg-yellow-500" />
              <Avatar name="Shivam Patel" size={8} />
              <Avatar name="Shivam Patel" size={9} />
              <Avatar name="Shivam Patel" size={10} />
              <Avatar name="Shivam Patel" size={12} />
            </div>
          </Section>

          {/* Button Section */}
          <Section title="Button Variants" className="col-span-6 row-span-1">
            <div className="flex flex-wrap gap-4">
              <Button variant="destructive">Delete</Button>
              <Button variant="outline" onClick={() => console.log("clicked")}>
                Outline
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button asChild variant="secondary" className="hover:bg-gray-300">
                <a href="https://example.com">Go to Example</a>
              </Button>
              <Button variant="Emerald" onClick={() => console.log("clicked")}>
                Green
              </Button>
              <Button isLoading>Please wait</Button>
              <Button
                icon={Trash}
                variant="Orange"
                iconPosition="right"
                size="sm"
                onClick={() => console.log("deleted")}
              >
                Delete
              </Button>
              <Button
                icon={Trash}
                variant="Violet"
                size="lg"
                onClick={() => console.log("deleted")}
              >
                Delete
              </Button>
              <Button
                icon={Trash}
                variant="Blue"
                iconPosition="left"
                onClick={() => console.log("deleted")}
              >
                Delete
              </Button>
            </div>
          </Section>

          {/* Badge Section */}
          <Section title="Badge Variants" className="col-span-6 row-span-1">
            <div className="flex flex-wrap gap-4">
              <Badge type={BadgeTypes.Success} size={BadgeSizes.Normal}>
                Success
              </Badge>
              <Badge type={BadgeTypes.Warning} size={BadgeSizes.Normal}>
                Warning
              </Badge>
              <Badge
                type={BadgeTypes.Error}
                size={BadgeSizes.Small}
                className="shadow-lg"
              >
                Error
              </Badge>
            </div>
          </Section>

          {/* Form Section */}
          <Section title="Form Example" className="row-span-1 col-span-6">
            <FormComponent />
          </Section>

          {/* Input Section */}
          <Section title="Input Variants" className="col-span-6 row-span-3">
            <div className="flex flex-col gap-4">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Amount" prefix="$" suffix="USD" type="currency" />
              <Input
                label="Password"
                secondaryLabel="Must be at least 8 characters"
                type="password"
              />
              <Input
                label="Email"
                type="email"
                error={{ message: "Invalid email address" } as FieldError}
              />
              <Input label="Read-Only" value="You can't edit this" disabled />
              <Input
                label="Username"
                placeholder="Enter your username"
                underline
              />
            </div>
          </Section>
          <Section title="Input Variants" className="col-span-6 row-span-3">
            <div className="flex flex-col gap-4">
              <Input label="Ghost Mode" placeholder="Invisible border" ghost />
              <Input label="Quantity" type="number" min={1} step={0.5} />
              <Input
                label="Styled Input"
                wrapperClassName="bg-gray-200 p-4 rounded-lg"
              />
              <Input
                label="Discount"
                type="percentage"
                placeholder="Enter % discount"
              />
              <Input
                label="Custom Style"
                inpurtContainerWrapperClassName="border-green-500 shadow-lg"
              />
            </div>
          </Section>
        </div>
      </header>
    </SidebarProvider>
  );
}

// Reusable Section Component
const Section = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      " p-6 rounded-lg shadow-sm border border-gray-100",
      className
    )}
  >
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

// Form Component
const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email"
        type="email"
        {...register("email", { required: "Email is required" })}
        error={errors.email as FieldError}
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};
