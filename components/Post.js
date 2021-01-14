import Link from 'next/link';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div>
      <Link href={'/post' + link}>
        <a>{meta.title}</a>
      </Link>
    </div>
  );
};
