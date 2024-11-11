module.exports = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/lib/requests/**/*.ts"],
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
