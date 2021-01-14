import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

const mdComponents = {
  h1: (props) => <h1 style={{ color: 'green' }} {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

const Provider = ({ children }) => <MDXProvider components={mdComponents}>{children}</MDXProvider>;

export default Provider;
