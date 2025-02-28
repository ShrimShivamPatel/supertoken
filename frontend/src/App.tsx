// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// const App: React.FC = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <Card className="w-[500px]">
//         <CardHeader>
//           <CardTitle>HOME</CardTitle>
//         </CardHeader>
//         <CardContent className="p-4 flex flex-col gap-4">
//           <Link
//             to={"/signin"}
//             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300 "
//           >
//             Sign In
//           </Link>
//           <Link
//             to={"/signup"}
//             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300"
//           >
//             Sign Up
//           </Link>
//           <Link
//             to={"/dashboard"}
//             className="border-2 p-2 rounded-md text-center bg-white text-black hover:bg-slate-300"
//           >
//             Go To Dashboard
//           </Link>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Link } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const App: React.FC = () => {
  const session = useSessionContext();

  if (session.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>HOME</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-4">
            <Link
              to="/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/signin"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default App;
