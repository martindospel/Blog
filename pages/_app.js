import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import React, { useEffect, useState } from "react";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div id="overlay">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
