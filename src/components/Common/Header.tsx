import React, { FC } from 'react';
import { Link } from 'gatsby';

type Props = {
  // text: string;
};

const Header: FC<Props> = () => {
  return (
    <header>
      <Link className="flex" to="/">
        <h1 className="text-4xl">이설란</h1>
        <small className="text-lg">웹 프론트엔드 개발자</small>
      </Link>
      <nav>
        <ul>
          <li>이력서</li>
          <li>포스트</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
