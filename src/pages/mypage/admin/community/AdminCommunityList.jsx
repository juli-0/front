import React from 'react';
import PostManage from './PostManage';
import CommentManage from './CommentManage';

const AdminCommunityList = () => {
  return (
    <div>
      커뮤니티 리스트
      <PostManage />
      <CommentManage />
    </div>
  );
};

export default AdminCommunityList;