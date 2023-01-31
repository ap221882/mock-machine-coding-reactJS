import React from 'react';
import { commentData } from './mockData';

const NestedComments = () => {
  return <div>{renderComments(commentData)}</div>;
};

const renderComments = (comments) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div style={{ border: '2px solid red', paddingLeft: '2rem' }}>
            <SingleComment comment={comment} />
            {comment?.replies && renderComments(comment.replies)}
          </div>
        );
      })}
    </>
  );
};

const SingleComment = ({ comment }) => {
  return (
    <>
      <div>{comment?.id}</div>
      <div>{comment?.comment}</div>
    </>
  );
};

export default NestedComments;
