import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

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
