import { EditPage } from "@/components/EditPage";
import { Layout } from "@/components/Layout";

import connectDB from "@/lib/db";
import User from "@/models/user";

export default function Edit({ data }) {
  console.log(data);
  return (
    <Layout title={data.name}>
      <EditPage data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { edit } = context.params;

  await connectDB();
  const output = await User.findOne({ _id: edit });

  console.log(output);

  return {
    props: {
      data: output ? { name: output.name, id: output._id.toString() } : "",
    },
  };
}
