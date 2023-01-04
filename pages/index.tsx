import { useRouter } from "next/router";
import React from "react";

import SpinnerMaster from "~@/components/molecules/SpinnerMaster/SpinnerMaster";
import { useAuth } from "~@/contexts/authContext";


export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <SpinnerMaster />
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
