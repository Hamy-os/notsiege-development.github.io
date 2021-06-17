import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.maincontainer}>
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;