import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InputPassword } from "../modules/form/components/InputPassword";
import { LoginForm } from "../modules/login/components/LoginForm";
import { NGButton } from "../modules/ui/components/NGButton";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <strong>HOME PAGE</strong>

      <div className="text-4xl text-blue-800">{counter}</div>
      <NGButton
        title="Plus"
        variant="primary"
        onPress={() => setCounter((previousState) => previousState + 1)}
      />
      <NGButton
        title="Moins"
        variant="secondary"
        onPress={() => setCounter((previousState) => previousState - 1)}
      />
      <Link href="/news">
        <a>Go to news page</a>
      </Link>
      <LoginForm />
    </React.Fragment>
  );
};

export default Home;
