import { gql } from '@apollo/client';
export const FEED_QUERY = gql`
  query ($first: Int!, $location: String!, $endCursor: String) {
    search(query: $location, type: USER, first: $first, after: $endCursor) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            login
            name
            avatarUrl
            company
            followers {
              totalCount
            }

            repositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const FEED_QUERY_SEARCH = gql`
  query ($first: Int!, $q: String!, $endCursor: String) {
    search(query: $q, type: USER, first: $first, after: $endCursor) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            login
            name
            avatarUrl
            company
            followers {
              totalCount
            }

            repositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
