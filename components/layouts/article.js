import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Scoop</title>
          </Head>
        )}
        {children}
      </>
      <GridItemStyle />
    </motion.article>
  );
};

export default Layout;
