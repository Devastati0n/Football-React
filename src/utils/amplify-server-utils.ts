
//setup server runner 
// return await run server runner
//async await fetch session check tokens check user
// "Next server" refers to the server component within the Next.js framework
//A>export const { runWithAmplifyServerContext } = createServerRunner({ config })
//B>auth the user function
//C>return await runWithAmplifyServerContext
//Context =  ifyServerContext: RunOperationWithContext;=> / type RunOperationWithContext = <OperationResult>(input: RunWithContextInput<OperationResult>) => Promise<OperationResult>;


import { authConfig } from "@/app/amplify-cognito-config";
import { NextServer, createServerRunner } from "@aws-amplify/adapter-nextjs";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: authConfig,
  },
});

export async function authenticatedUser(context: NextServer.Context) {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        if (!session.tokens) {
          return;
        }
        const user = {
          ...(await getCurrentUser(contextSpec)),
          isAdmin: false,
        };
        const groups = session.tokens.accessToken.payload["cognito:groups"];
        // @ts-ignore
        user.isAdmin = Boolean(groups && groups.includes("Admins"));

        return user;
      } catch (error) {
        console.log(error);
      }
    },
  });
}