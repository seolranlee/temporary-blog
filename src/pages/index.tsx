import React, { FC } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';
import Header from 'components/Common/Header';
import { graphql } from 'gatsby';
import PostList, { PostType } from 'components/Main/PostList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
};

const IndexPage: FC<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <>
      <Header />
      <PostList posts={edges} />
      {/* <Text text="Home" />
      <Link to="/info/">To Info</Link> */}
    </>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
