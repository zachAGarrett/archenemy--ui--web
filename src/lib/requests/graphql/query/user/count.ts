export const COUNT_USERS = /* GraphQL */ `
  query CountUsers($where: UserWhere) {
    usersAggregate(where: $where) {
      count
    }
  }
`;
