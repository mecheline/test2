import React, { useState } from "react";
import { useRouter } from "next/router";

export const EditPage = ({ data }) => {
  const router = useRouter();
  console.log(data);
  const [editedName, setEditedName] = useState(data.name);
  const url = "https://kunda-test2.vercel.app";
  const postdata = async (e) => {
    e.preventDefault();
    console.log(editedName);
    const cred = {
      name: editedName,
      id: data.id,
    };
    await fetch(`${url}/api/api-handler`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        router.push(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card p-5 shadow">
      <h4>Edit Card</h4>
      <i
        class="bi bi-skip-backward-circle fs-3"
        onClick={() => router.back()}
      ></i>
      <form onSubmit={postdata}>
        <div class="my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter names"
            aria-describedby="emailHelp"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};
