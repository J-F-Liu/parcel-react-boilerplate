import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fetchData from "../enhancers/fetchData";

const Posts = props => {
  const { loading, data: posts } = props;
  if (posts == null) return null;
  if (loading) return <p>loading...</p>;
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post?id=${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default fetchData({
  url: p => `${p.apiServer}/posts`,
  extract: result => result.data,
})(Posts);
