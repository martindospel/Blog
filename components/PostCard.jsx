import React from "react";
import Link from "next/link";
import moment from "moment/moment";

const PostCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-lg lg:p-4 pb-9 mb-3 bg-gray-300 bg-opacity-30 hover:bg-opacity-50">
      <div className="relative overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-3400 text-center mb-5 hover:text-gray-700 text-2xl font-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-6">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle ml-2 text-m">{post.author.name}</p>
        </div>
        <div className="font-medium">
          <span>{moment(post.createdAt).format("YYYY MMM DD")}</span>
        </div>
      </div>
      <p className="text-center text-lg font-normal px-3 lg:px-1 mb-4">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="cursor-pointer transition duration-300 transform hover:-translate-y-0.5 inline-block text-lg font-medium rounded-full text-white px-4">
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
