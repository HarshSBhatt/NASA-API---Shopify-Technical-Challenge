import Results from "components/Results";
import Head from "next/head";
import { API_KEY, BASE_URL } from "utils/constant";

export default function Home({ photos }) {
  return (
    <div>
      <Head>
        <title>Shopify Technical Challenge</title>
        <link rel="icon" href="/nasa-48.png" />
      </Head>
      <Results photos={photos} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch(
    `${BASE_URL}?sol=1000&page=1&api_key=${API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      photos: request.photos,
    },
  };
}
