import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <Post title="Alex" message="Hello guys, i'm Alex!"/>
        <Post title="John" message="Hi Alex, how are you?"/>
        <Post title="Roll" message="Yo, Guys!"/>
      </div>
    </div>
  );
};

export default MyPosts;
