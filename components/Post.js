import Link from 'next/link';
import { HeadPost } from './HeadPost';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <Link href={'/blog' + link}>
        <a>{meta.title}</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </article>
  );
};
