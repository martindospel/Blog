import React, { useState, useEffect, useRef } from "react";

import { commentSubmit } from "../data";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [submitComment, setCommentSubmit] = useState(false);
  const comment = useRef();
  const name = useRef();
  const email = useRef();
  const storeData = useRef();

  const handleSubmitComment = () => {
    setError(false);

    const { value: name } = name.current;
    const { value: email } = email.current;
    const { value: comment } = comment.current;
    const { checked: storeData } = storeData.current;

    return (!name || !email || !comment) && setError(true);
  };
  const commentObject = {
    name,
    email,
    comment,
    slug,
  };

  if (storeData) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    }
  } else {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
  }

  commentSubmit(commentObject).then((res) => {
    setCommentSubmit(true);
    setTimeout(() => {
      setCommentSubmit(false);
    }, 5000);
  });

  return (
    <div className="shadow-lg rounded-lg lg:p-4 pb-9 mb-3 bg-gray-300 bg-opacity-30 hover:bg-opacity-20">
      <h3 className="text-xl mb-4 font-semibold pb-2 lg:pb-4 ml-2 lg:ml-0">
        Post a comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-3 p-1 lg:p-0">
        <textarea
          className="text-gray-600 p-2 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100"
          placeholder="Any thoughts?"
          name="comment"
          ref={comment}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2 p-1 lg:p-0">
        <input
          className="text-gray-600 py-1 px-2 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100"
          placeholder="Name"
          name="name"
          type="text"
          ref={name}
        />
        <input
          className="text-gray-600 py-1 px-2 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100"
          placeholder="Email"
          name="email"
          type="text"
          ref={email}
        />
      </div>
      {/* <div className="grid grid-cols-1 gap-4 mb-3"> */}
      <div className="mt-2 flex justify-center lg:justify-end">
        <div>
          <label
            className="text-black-900 cursor-pointer pr-1"
            htmlFor="storeData"
          >
            Save details
          </label>
          <input
            className="cursor-pointer"
            id="storeData"
            value="true"
            name="storeData"
            type="checkbox"
            ref={storeData}
          />
        </div>
      </div>
      {error && <p className="text-xs text-red-400">All fields required.</p>}
      <div className="mt-2 flex justify-center lg:justify-end">
        <button
          type="button"
          onClick={handleSubmitComment}
          className="bg-green-50 p-1.5 grid transition duration-300 ease hover:bg-green-100 rounded"
        >
          Post Comment
        </button>
        {submitComment && (
          <span className="text-l float-right font-semibold mt-3 text-green-400">
            Thanks for your comment. It has been submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
