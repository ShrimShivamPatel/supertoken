import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { middleware } from "supertokens-node/framework/express";
import { errorHandler } from "supertokens-node/framework/express";
// import { verifySession } from "supertokens-node/recipe/session/framework/express";
// import { SessionRequest } from "supertokens-node/framework/express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://try.supertokens.io",
    },
    appInfo: {
        appName: "SUPERTOKEN",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:3001",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init({
            override: {
                apis: (originalImplementation) => {
                    return {
                        ...originalImplementation,
                        signUpPOST: async function (input) {
                            if (originalImplementation.signUpPOST === undefined) {
                                throw Error("Should never come here");
                            }
                            // First we call the original implementation of signUpPOST.
                            let response = await originalImplementation.signUpPOST(input);
                            // Post sign up response, we check if it was successful
                            if (response.status === "OK") {
                                // These are the input form fields values that the user used while signing up
                                let formFields = input.formFields;
                                console.log(formFields);
                            }
                            return response;
                        },
                    };
                },
            },
            signUpFeature: {
                formFields: [
                    {
                        id: "name",
                        validate: async (value, tenantId) => {
                            if (value.length >= 4) {
                                return undefined; // means that there is no error
                            }
                            return "Name must be atleast 4 chars long.";
                        },
                    },
                ],
            },
        }),
        Session.init(),
    ],
});
const app = express();
app.use(cors({
    origin: "http://localhost:3001",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));
app.use(middleware());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello, TypeScript + Express (ESM)!");
});
app.use(errorHandler());
// your own error handler
app.use((err, req, res, next) => {
    /* ... */
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
