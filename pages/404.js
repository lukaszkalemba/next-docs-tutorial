import Head from 'next/head';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.scss';

export default function ErrorPage() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Page Not found</h1>
      </section>
    </Layout>
  );
}
