import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const HomePage: NextPage = () => {
  React.useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-14">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>Outline</Button>
      </div>
    </>
  );
};
export default HomePage;
