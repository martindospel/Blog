import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";

export const getPosts = async () => {
  const graphQLClient = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9kexqvf33pe01t8a1o5a58p/master"
  );

  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await graphQLClient.request(query);
  return result.PostsConnection;
};
