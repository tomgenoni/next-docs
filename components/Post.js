import Link from 'next/link';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div>
      <Link href={link}>
        <a>{meta.title}</a>
      </Link>
    </div>
  );
};
