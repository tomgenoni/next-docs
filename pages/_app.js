import Layout from '../components/Layout';
import MDXProvider from '../components/MDXProvider';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Layout pageTitle='BrandKit' description='UI for stuff'>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
