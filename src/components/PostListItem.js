import React from "react";

export default function PostListItem({post}) {
    return (
        <button key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
        </button>
    );
}