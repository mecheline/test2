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
  let a = true;
  if (a) {
    return {
      redirect: {
        destination: "https://kunda-test2.vercel.app/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "",
    },
  };
}
