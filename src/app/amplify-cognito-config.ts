"use client";
//https://aws-amplify.github.io/amplify-js/api/interfaces/aws_amplify.auth.AuthTokens.html#accessToken
//Set up userPoolClientId, userPoolId 
// cogn config // amplify-server utils // hooks // lib-cogn // middleware // 

import { Amplify, type ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig["Auth"] = {
  Cognito: {
    userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
    userPoolClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID),
  },
};

Amplify.configure(
  {
    Auth: authConfig,
  },
  { ssr: true }
);

export default function ConfigureAmplifyClientSide() {
  return null;
}