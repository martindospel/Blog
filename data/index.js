import { request, gql } from "graphql-request";
// import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9kexqvf33pe01t8a1o5a58p/master";

export const getPosts = async () => {
  const query = gql`
    query Query {
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

  const result = await request(endpoint, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;
  const result = await request(endpoint, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(endpoint, query);
  return result.posts;
};
