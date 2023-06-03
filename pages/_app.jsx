import Layout from "@/components/Layout";
import { Provider } from "@/theme";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
