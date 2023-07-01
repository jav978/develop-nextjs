"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script';
import Layout from '../../components/layout'
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
				<meta property="og:title" content="My page title" key="title" />
				<script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
			<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
            <h1>First Post</h1>
            <Image
                src="/images/joseantonio.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Jose Antonio"
            />

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
