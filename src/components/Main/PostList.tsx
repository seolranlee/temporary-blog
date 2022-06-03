import React, { FC } from 'react';
import PostItem from 'components/Main/PostItem';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        publicURL: string;
      };
    };
  };
};

type Props = {
  posts: PostType[];
};

const PostList: FC<Props> = function ({ posts }) {
  return (
    <div>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </div>
  );
};

export default PostList;
