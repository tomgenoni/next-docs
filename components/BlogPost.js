import Props from 'pretty-proptypes';

import Button from './Button';
import { HeadPost } from './HeadPost';
import { Post } from './Post';
import { posts } from '../getAllPosts';

export default function BlogPost({ children, meta }) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 300, marginTop: 20 }}>
          {posts.map((post) => (
            <Post key={post.link} post={post} />
          ))}
        </div>
        <div>
          <HeadPost meta={meta} isBlogPost />
          <article>{children}</article>
          <Props heading='Props' props={require('!!extract-react-types-loader!./Button')} />
        </div>
      </div>
    </>
  );
}
