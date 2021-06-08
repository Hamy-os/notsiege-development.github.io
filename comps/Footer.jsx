import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
        <footer className={styles.footercontainer}>
                    <div className={styles.socials}>
                        <h3>Socials</h3>
                        <ul>
                            <li><a href="https://discord.gg/vgYmzjJJtZ">Discord</a></li> 
                            <li><a href="https://www.instagram.com/notsiege_development">Instagram</a></li>
                            <li><a href="https://twitter.com/notsiege_dev">Twitter</a></li>
                            <li><a href="https://www.youtube.com/channel/UCJ4cgi0mui8T7BVOXddlKpg">Youtube</a></li>
                        </ul>
                    </div>
                    <div className={styles.navlinks}>
                        <h3>About</h3>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/tebex">Store</a></li>
                        </ul>
                    </div>
                    <div className={styles.footdesc}>
                        <h3>Notsiege-development</h3>
                        <p>NSD Is a FiveM/GTA5 modding group that make cars, maps, scripts and much more!</p>
                        <p>NSD © 2021</p>
                    </div>
        </footer>
  );
}
 
export default Footer;