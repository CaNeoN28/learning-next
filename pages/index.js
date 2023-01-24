import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá, eu sou Carlos Felipe, técnico em informática e estudante em análise e desenvolvimento de sistemas.</p>
      </section>
    </Layout>
  );
}