import { useLocation, useNavigate } from "react-router-dom";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/avatar";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative h-screen overflow-hidden bg-background">
      
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={10}
        gridGap={4}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.5}
        height={1000}
        width={2000}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-transparent gap-8 p-6">

      <div className="absolute top-0 right-0 flex gap-4 justify-end p-4">
        <Button onClick={()=>navigate('/auth/signin', {state : {from : location.pathname}})}
          >Sign in</Button>
        <Button onClick={()=>navigate('/auth/signup')}>Sign up</Button>
      </div>

        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl font-extrabold">
          Explore our amazing features and experience an interactive UI powered
          by React, TypeScript, and ShadCN.
        </p>
        <div className="flex gap-6">
          <Button
            className="px-6 py-3 text-lg"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
          <Button
            className="px-6 py-3 text-lg"
            variant="outline"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
        <Button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 text-lg"
        >
          Go To Dashboard
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card className="p-6 text-center shadow-lg ">
            <h2 className="text-2xl font-bold mb-2">Feature One</h2>
            <p className="text-gray-600 mb-4">
              A brief description of this feature.
            </p>
            <Button>Explore</Button>
          </Card>
          <Card className="p-6 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Feature Two</h2>
            <p className="text-gray-600 mb-4">
              Another key feature of our platform.
            </p>
            <Button>Discover</Button>
          </Card>
        </div>
      </div>

      
    </div>
  );
}
