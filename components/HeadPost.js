export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
    <div className='details'>
      <span>{meta.description}</span>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #666;
          margin-right: 1rem;
        }
        .details {
          font-size: 19px;
          margin-bottom: 1rem;
        }
      `}
    </style>
  </>
);
