import gql from 'graphql-tag';

export default gql`
    subscription OnCreateGameSubscription {
        onCreateGame {
            __typename
            id
            name
        }
    }`;