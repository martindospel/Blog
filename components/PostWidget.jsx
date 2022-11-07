import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../data";
// import moment from "moment";
// import Link from "next/Link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    slug
      ? getSimilarPosts(categories, slug).then((data) => setRelatedPosts(data))
      : getRecentPosts().then((data) => setRelatedPosts(data));
  }, [slug]);

  console.log(getSimilarPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 bg-gray-300 bg-opacity-30">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => {
        <div key={post.title} className="flex items-center"></div>;
      })}
    </div>
  );
};

export default PostWidget;
