import Head from 'next/head';

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='Description' content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          line-height: 22px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
        }
        a {
          color: #fff;
        }
        .content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        pre,
        code {
          font-family: 'Source Code Pro' !important;
          font-size: 15px !important;
        }
      `}</style>
      <main>
        <div className='content'>{children}</div>
      </main>
    </>
  );
}
