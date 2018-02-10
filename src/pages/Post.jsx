import React from "react";
import { Link } from "react-router-dom";
import compose from "../utils/compose";
import parseQuery from "../enhancers/parseQuery";
import fetchData from "../enhancers/fetchData";

const Post = props => {
  const post = props.data;
  return (
    post && (
      <div>
        <Link to="/posts">{"<"} Back</Link>
        <br />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  );
};

export default compose(
  parseQuery,
  fetchData({
    url: p => `${p.apiServer}/posts/${p.query.id}`,
    extract: result => result.data,
  })
)(Post);
