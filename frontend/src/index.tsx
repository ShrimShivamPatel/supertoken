// React Library
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Styling
import "./index.css";

// Context
import { ThemeProvider } from "@/components/context/theme-provider";

// SuperTokens
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initSuperToken } from "./lib/superTokensInit";

// Performance Monitoring
import reportWebVitals from "./reportWebVitals";

// Custom Components
import App from './App';
import Helper from "./lib/helper";
initSuperToken();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <SuperTokensWrapper>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Helper/>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </SuperTokensWrapper>
  // </React.StrictMode>
);

reportWebVitals();
