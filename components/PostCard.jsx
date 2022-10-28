import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PostCard;
