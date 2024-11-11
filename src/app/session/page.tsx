import { Col, List, Row, Typography } from "antd";
import { Session } from "../../../generated/graphql";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";
import { getClient } from "@/lib/apollo/apollo-server";
import { gql } from "apollo-server-micro";
import { COUNT_USERS } from "@/lib/requests/graphql/query/user/count";
const { Title, Text } = Typography;

const getTrainingSessions = async (): Promise<Session[]> => {
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
    const trainingSessions: Session[] = await getTrainingSessions();

    return (
      <List
        itemLayout="horizontal"
        dataSource={trainingSessions}
        renderItem={(ts) => (
          <List.Item key={ts.id} actions={[ts.active && "Active"]}>
            <List.Item.Meta
              title={<Title level={1}>{ts.name}</Title>}
              description={
                <>
                  <Row>
                    <Col>
                      <Text>{new Date(ts.date).toLocaleString()}</Text>
                    </Col>
                    {ts.ruleset && (
                      <>
                        <Col>
                          <Text>{ts.ruleset.discipline}</Text>
                        </Col>
                        <Col>
                          <Text>{ts.ruleset.arrowsPerSet} arrows per set</Text>
                        </Col>
                      </>
                    )}
                  </Row>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  },
  { returnTo: "/session" }
);

export default SessionList;
