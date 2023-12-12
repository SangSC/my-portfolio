import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Transition from "@/components/Transition";

import "./globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
};

export default App;
