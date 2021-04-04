import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
