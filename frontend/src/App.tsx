// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// // const App: React.FC = () => {
// //   return (
// //     <div className="flex flex-col justify-center items-center h-screen">
// //       <Card className="w-[500px]">
// //         <CardHeader>
// //           <CardTitle>HOME</CardTitle>
// //         </CardHeader>
// //         <CardContent className="p-4 flex flex-col gap-4">
// //           <Link
// //             to={"/signin"}
// //             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300 "
// //           >
// //             Sign In
// //           </Link>
// //           <Link
// //             to={"/signup"}
// //             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300"
// //           >
// //             Sign Up
// //           </Link>
// //           <Link
// //             to={"/dashboard"}
// //             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300"
// //           >
// //             Go To Dashboard
// //           </Link>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useSessionContext } from "supertokens-auth-react/recipe/session";
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// const App: React.FC = () => {
//   const session = useSessionContext();

//   if (session.loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <>

   

//       {/* <div className="flex flex-col justify-center items-center h-screen">
//         <Card className="w-[500px]">
//           <CardHeader>
//             <CardTitle>HOME</CardTitle>
//           </CardHeader>
//           <CardContent className="p-4 flex flex-col gap-4">
//             <Link
//               to="/dashboard"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Go to Dashboard
//             </Link>

//             <Link
//               to="/signin"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Sign Up
//             </Link>
//           </CardContent>
//         </Card>
//       </div> */}
//     </>
//   );
// };

// export default App;


import { AppSidebar } from "@/components/ui/main-block/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

