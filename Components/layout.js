import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
}
