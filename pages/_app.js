import Layout from '../components/Layout';
import MDXProvider from '../components/MDXProvider';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Layout pageTitle='Blog' description='My Personal Blog'>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
