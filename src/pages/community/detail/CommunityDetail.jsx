import React from 'react';
import PostDetailHeader from './PostDetailHeader';
import PostContentCard from './PostContentCard';
import CommentComposer from './CommentComposer';
import CommentThread from './CommentThread';
import BackToListButton from './BackToListButton';

const CommunityDetail = () => {
  return (
    <div>
      커뮤니티 글 보기
      <PostDetailHeader />
      <PostContentCard />
      <CommentComposer />
      <CommentThread />
      <BackToListButton />
    </div>
  );
};

export default CommunityDetail;