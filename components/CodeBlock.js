import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Button from './Button';

const CodeBlock = ({ children, className, live }) => {
  const scope = { Button };
  const language = className.replace(/language-/, '');
  if (live) {
    return (
      <div style={{ border: '1px solid #ddd' }}>
        <LiveProvider code={children.trim()} scope={scope} theme={github}>
          <LivePreview style={{ padding: 20, borderBottom: '1px solid #ddd' }} />
          <LiveEditor style={{ fontFamily: 'Source Code Pro' }} />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={github}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '12px' }}>
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
