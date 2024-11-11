import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";
import { getClient } from "@/lib/apollo/apollo-server";
import { gql } from "apollo-server-micro";
import { COUNT_USERS } from "@/lib/requests/graphql/query/user/count";
import { Session } from "../../../../generated/graphql";
import ArcheryTarget from "@/components/ArcheryTarget";
import { Splitter } from "antd";

const getTrainingSession = async (): Promise<Session> => {
  const client = getClient();

  const res = await client.query({
    query: gql(COUNT_USERS),
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  // implement
  return res.data;
};

const SessionList: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    if (!session) {
      throw new Error(`Requires authentication`);
    }
    const trainingSession: Session = await getTrainingSession();

    return (
      <Splitter
        style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
          Hi there
        </Splitter.Panel>
        <Splitter.Panel>
          <ArcheryTarget radius={250} ringCount={10} />
        </Splitter.Panel>
      </Splitter>
    );
  },
  { returnTo: "/session" }
);

export default SessionList;
