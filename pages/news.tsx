import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NGButton } from "../modules/ui/components/NGButton";

const News: NextPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <p>News Page</p>
    </>
  );
};

export default News;
