import { ApolloServer } from "apollo-server-micro";
import { NextRequest, NextResponse } from "next/server";
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import fs from "fs";
import path from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

// Read schema from file
const schemaPath = path.join(
  process.cwd(),
  "src/app/api/graphql/schema.graphql"
);
const typeDefs = fs.readFileSync(schemaPath, "utf-8");

// Create Neo4j driver instance
const driver = neo4j.driver(
  process.env.NEOURI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEOUSER || "neo4j",
    process.env.NEOPASS || "password"
  )
);

// Create Neo4jGraphQL instance
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// Initialize server
let apolloServer: ApolloServer | null = null;

async function getServer() {
  if (!apolloServer) {
    const schema = await neoSchema.getSubgraphSchema();
    apolloServer = new ApolloServer({
      schema,
      context: ({ req }) => ({ req }),
      introspection: process.env.DEV === "TRUE" ? true : false, // Explicitly enable introspection
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    });
    await apolloServer.start();
  }
  return apolloServer;
}

export async function POST(req: NextRequest) {
  const server = await getServer();

  // Parse the request body
  const body = await req.text();
  const { query, variables } = JSON.parse(body);

  if (!query) {
    return NextResponse.json(
      { error: "No GraphQL query provided" },
      { status: 400 }
    );
  }

  const response = await server.executeOperation({
    query,
    variables,
  });

  return NextResponse.json(response);
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "GraphQL API is running. Use POST for queries and introspection.",
  });
}
