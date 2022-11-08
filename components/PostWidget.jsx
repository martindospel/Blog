import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../data";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    slug
      ? getSimilarPosts(categories, slug).then((data) => {
          setRelatedPosts(data);
        })
      : getRecentPosts().then((data) => {
          setRelatedPosts(data);
        });
  }, [slug]);

  return (
    <div className="bg-gray-300 bg-opacity-30 shadow-lg rounded-lg p-8 pb-2 mb-4">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-auto mb-2">
          <div className="w-18 h-8">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-700 font-xs">
              {moment(post.createdAt).format("YYYY MMM DD")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
