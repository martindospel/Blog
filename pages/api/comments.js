import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_PROJECT_BLOG_ENDPOINT;

// route to submit comments
const comments = async (req, res) => {
  const { name, email, comment, slug } = req.body;
  const graphQLClient = new request(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });
  //   connecting name, email and post to a specific post
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      )
    }
    {
      id
    }
  `;
  const result = await graphQLClient(query, req.body);
  return res.status(200).send(result);
};

export default comments;
