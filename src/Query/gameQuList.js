import gql from 'graphql-tag';

export default gql`
    query ListGames {
        listGames {
            __typename
            items {
                __typename
                id
                name
            }
            nextToken
        }
    }`;