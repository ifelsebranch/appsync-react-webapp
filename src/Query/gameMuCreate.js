import gql from 'graphql-tag';

export default gql`
mutation GameCreateMutation($id: ID!, $name: String!) {
  createGame(
    id: $id
    name: $name
  ) {
    __typename
    id
    name
  }
}
`;