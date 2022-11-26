import { request, gql } from "graphql-request";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9kexqvf33pe01t8a1o5a58p/master";

export const getPosts = async () => {
  const query = gql`
    query QueryGetPosts {
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

export const getPostDetails = async (slug) => {
  const query = gql`
    query QueryGetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;

  const result = await request(endpoint, query, { slug });
  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
  query QueryGetRecentPosts() {
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

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query QueryGetSimilarPosts($slug: String!, $categories: [String!]) {
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
  const result = await request(endpoint, query, { categories, slug });
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query QueryGetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(endpoint, query);
  return result.categories;
};

export const commentSubmit = async (object) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(object),
  });
  return result.json();
};
