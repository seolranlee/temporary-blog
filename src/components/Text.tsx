import React, { FunctionComponent } from 'react';

type TextProps = {
  text: string;
};

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Text;
