import React from 'react';
import ReplyComposer from './ReplyComposer';
import ReplyThread from './ReplyThread';

const CommentItem = () => {
  return (
    <div>
      댓글 아이템
      <ReplyComposer />
      <ReplyThread />
    </div>
  );
};

export default CommentItem;