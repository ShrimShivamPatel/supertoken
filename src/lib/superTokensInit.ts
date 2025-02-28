// Supertoken
import SuperTokens from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { AppInfoUserInput } from "supertokens-auth-react/lib/build/types";

export const appInfo : AppInfoUserInput = {
  appName: "SUPERTOKEN",
  apiDomain: "http://localhost:3000",
  websiteDomain: "http://localhost:3001",
  apiBasePath: "/auth",
};

export const initSuperToken = () => {
  SuperTokens.init({
    appInfo,
    recipeList: [Session.init(), EmailPassword.init({})],
  });
};
