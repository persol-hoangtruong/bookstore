import React from "react";

import { Spinner } from "~@/components/atoms";


export default function Books() {
  React.useEffect(() => {
    fetch("http://127.0.0.1:4010/books")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      Bookstore v2 <Spinner />
    </div>
  );
}

export async function getServerSideProps() {
  console.log(process.env.BASE_API_URL);

  return {
    props: {},
  };
}
