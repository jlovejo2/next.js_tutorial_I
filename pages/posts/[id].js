import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
