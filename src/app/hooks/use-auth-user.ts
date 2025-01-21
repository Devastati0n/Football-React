import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";

/* 
uis/dashboard/nav-links
uis/profile-settings/update-email-form
uis/profile-settingsupdate-profile-form
*/ 

export default function useAuthUser() {
  const [user, setUser] = useState<Record<string, any>>();

  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession();
      if (!session.tokens) {
        return;
      }
      const user = {
        ...(await getCurrentUser()),
        ...(await fetchUserAttributes()),
        isAdmin: false,
      };
      const groups = session.tokens.accessToken.payload["cognito:groups"];
      // @ts-ignore
      user.isAdmin = Boolean(groups && groups.includes("Admins"));
      setUser(user);
    }

    getUser();
  }, []);

  return user;
}





/* 
export default function useAuthUser() {
  const [user, setUser] = useState<Record<string, any>>();

  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession();
      if (!session.tokens) {
        return;
      }
      const user = {
        ...(await getCurrentUser()),
        ...(await fetchUserAttributes()),
        isAdmin: false,
      };
      const groups = session.tokens.accessToken.payload["cognito:groups"];
      // @ts-ignore
      user.isAdmin = Boolean(groups && groups.includes("Admins"));
      setUser(user);
    }

    getUser();
  }, []);

  return user;
}
*/

  







