import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer</p>
        <p>Open Source, Process, Technical Leadership, Automation, People</p>
        <p>
          Love building distributed teams, writing in Go, building CLI dev
          tools, engaging with other engineering teams, and learning new things
        </p>
      </section>
    </Layout>
  );
}
