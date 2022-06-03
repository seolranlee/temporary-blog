import React, { FC } from 'react';
import { Link } from 'gatsby';
type Props = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    publicURL: string;
  };
  link: string;
};

const PostItem: FC<Props> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: { publicURL },
  link,
}) {
  return (
    <Link to={link}>
      <img src={publicURL} alt="Post Item Image" />

      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div>
          {categories.map(category => (
            <p key={category}>{category}</p>
          ))}
        </div>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default PostItem;
