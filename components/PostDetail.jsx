import React from "react";
import moment from "moment/moment";

const PostDetail = ({ post }) => {
  const getContentSection = (index, text, obj, type) => {
    let finalText = text;

    if (obj) {
      if (obj.bold) {
        finalText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        finalText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        finalText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "paragraph":
        return (
          <p key={index} className="mb-5">
            {finalText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-3">
            {finalText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-3">
            {finalText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      default:
        return finalText;
    }
  };

  return (
    <div className="shadow-lg rounded-lg lg:p-4 pb-9 mb-3 bg-gray-300 bg-opacity-30 hover:bg-opacity-50">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center w-full">
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center lg:mb-0 w-full lg:w-auto mr-6">
              <img
                src={post.author.photo.url}
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
              />
              <p className="inline align-middle ml-2 text-m">
                {post.author.name}
              </p>
            </div>
            <div className="font-small">
              <span>{moment(post.createdAt).format("YYYY MMM DD")}</span>
            </div>
          </div>
        </div>
        <h1 className="mb-8 text-3xl">{post.title}</h1>
        {post.content.raw.children.map((typeOfObject, index) => {
          const children = typeOfObject.children.map((item, index) =>
            getContentSection(index, item.text, item)
          );
          return getContentSection(
            index,
            children,
            typeOfObject,
            typeOfObject.type
          );
        })}
      </div>
    </div>
  );
};

export default PostDetail;
