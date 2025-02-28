// import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { signOut } from "supertokens-web-js/recipe/session";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const onLogOut = async () => {
//     await signOut();
//     console.log("Logged Out..");
//     navigate("/");
//   };
//   return (
//     <>
//       <h1>Dashboard</h1>
//       <Button onClick={onLogOut}>Log Out</Button>
//     </>
//   );
// };

// export default Dashboard;

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { signOut } from "supertokens-auth-react/recipe/session";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const Dashboard = () => {
  const navigate = useNavigate();
  const onLogOut = async () => {
    await signOut();
    console.log("Logged Out..");
    navigate("/");
  };
  return (
    <SessionAuth>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={onLogOut} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </Button>
      </div>
    </SessionAuth>
  );
};

export default Dashboard;