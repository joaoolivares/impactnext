import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>DBC Impact</title>
        <meta name="keywords" content="DBC Impact, Next"></meta>
      </Head>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
 
export default Layout;