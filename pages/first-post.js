import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Primeiro post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={
            console.log("O plugin do facebook foi carregado com sucesso")
          }
        />
      </Head>
      
      <h1>
        Primeiro Post
      </h1>
      <h2>
        <Link href="/">Retornar ao inicio</Link>
      </h2>
    </Layout>
  )
}