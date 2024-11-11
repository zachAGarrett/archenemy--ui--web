import {
  handleAuth,
  AfterCallback,
  Session,
  handleCallback,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

const afterCallback: AfterCallback = async (
  _req: NextRequest,
  session: Session
) => {
  if (session?.user) {
    const authId = session.user.sub as string;

    try {
      const response = await fetch("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation CreateOrUpdateUser($authId: String!) {
              createUsers(input: [{ authId: $authId }]) {
                users {
                  id
                  authId
                }
              }
            }
          `,
          variables: {
            authId,
          },
        }),
      });

      const data = await response.json();
      console.log("User created/updated:", data.data.createUsers.users[0]);
    } catch (error) {
      console.error("Error creating/updating user in Neo4j:", error);
    }
  }
  return session;
};

export const GET = handleAuth({
  callback: handleCallback((req) => {
    return { afterCallback };
  }),
});
