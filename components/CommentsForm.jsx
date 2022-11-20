import React, { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const comment = useRef();
  const name = useRef();
  const email = useRef();
  const storeData = useRef();
  return (
    <div className="shadow-lg rounded-lg lg:p-4 pb-9 mb-3 bg-gray-300 bg-opacity-30 hover:bg-opacity-20">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        Post a comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-3">
        <textarea
          placeholder="Any thoughts?"
          ref={comment}
          className="text-gray-600 p-2 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  );
};

export default CommentsForm;
