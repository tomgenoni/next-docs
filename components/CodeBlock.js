import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Button from './Button';

const CodeBlock = ({ children, className, live }) => {
  const scope = { Button };
  const language = className.replace(/language-/, '');
  if (live) {
    return (
      <div style={{ border: '1px solid red' }}>
        <LiveProvider code={children.trim()} scope={scope}>
          <LivePreview />
          <LiveEditor style={{ fontFamily: 'Source Code Pro' }} />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={duotoneLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
