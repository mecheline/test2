import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export const HomePage = ({ lists }) => {
  const { mutate } = useSWRConfig();
  const url = "https://kunda-test2.vercel.app/api/api-handler";

  const [names, setNames] = useState("");
  const [namesList, setNamesList] = useState();

  const { data, error } = useSWR(url, () => fetcher(url));

  if (!data) return <h4>Loading...</h4>;
  if (error) return <h4>Try again later</h4>;

  async function postdata(e) {
    e.preventDefault();

    const result = names.split(",");
    setNames("");

    let out = [];

    result.forEach((item) => {
      out.push({ name: item });
    });

    await fetch("https://kunda-test2.vercel.app/api/api-handler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(out),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        mutate(url);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  const handleDelete = async (name, id) => {
    if (window.confirm(`Do you want to delete ${name}`)) {
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        });
        const output = await response.json();
        console.log(output);

        mutate(url);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={postdata}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter names"
            aria-describedby="emailHelp"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary mb-3 ">
          Submit
        </button>
      </form>

      <table class="table table-hover table-responsive">
        {data.length > 0 ? (
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Names</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        ) : (
          <em className="mt-5">Add multiple names separated by comma</em>
        )}

        <tbody>
          {data ? (
            data.map((record, i) => (
              <tr key={record._id}>
                <th scope="row">{i + 1}</th>
                <td>{record.name}</td>
                <td>
                  <Link href={`https://kunda-test2.vercel.app/${record._id}`}>
                    <i class="bi bi-pencil-square"></i>
                  </Link>

                  <i
                    class="bi bi-x-circle mx-2"
                    onClick={() => handleDelete(record.name, record._id)}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <h4>Loading...</h4>
          )}
        </tbody>
      </table>
    </div>
  );
};
