import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/lib/requests/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "generated/graphql-introspection.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;
