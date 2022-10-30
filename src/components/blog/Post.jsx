import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Article crawler</h1>
        <h6 className="mb-5">Article crawler{postSlug}</h6>
        <p>
          article crawler
        </p>
        
      </div>
    </div>
  );
}

export default Post;
