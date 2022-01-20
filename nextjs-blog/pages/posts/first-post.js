import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        {/* use head to overwrite any values in html head for current page */}
        <Head>
          <title>First Post</title>
        </Head>
        {/* Use whenever loading third party js (CDNs) */}
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          // strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>First Post</h1>
        <h2>
          {/* Use link for routing between pages */}
          <Link href="/">
            {/* Always put styling on inside tag and not the Link itself */}
            <a className="someClass">Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
