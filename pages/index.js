import { HomePage } from "@/components/HomePage";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <HomePage />
    </Layout>
  );
}

export async function getServerSideProps() {
  // const response = await fetch(
  //   "https://kunda-test2.vercel.app/api/api-handler",
  //   {
  //     method: "GET",
  //   }
  // );
  // const lists = await response.json();
  // console.log(lists);

  return {
    // props: {
    //   lists: lists ? { lists } : "",
    // },
    redirect: {
      destination: "https://kunda-test2.vercel.app/",
      permanent: false,
    },
  };
}
