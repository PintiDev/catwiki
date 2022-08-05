import "../styles/globals.css";
import Header from "../components/layout/Header";
function MyApp({ Component, pageProps }) {
  return (
    <div className="container px-10">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
