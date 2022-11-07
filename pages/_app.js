import { Toaster } from "react-hot-toast";
import Shared from "../components/shared/Shared";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <Shared>
          <Toaster />
          <Component {...pageProps} />
        </Shared>
      </StateContext>
    </>
  );
}

export default MyApp;
