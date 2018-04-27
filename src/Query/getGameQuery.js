import gql from 'graphql-tag';

export default gql`
    query GetGame($id: ID!) {
        getGame(id: $id) {
            __typename
            id
            name
        }
    }`;