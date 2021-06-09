import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.topnav}>
      <div>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/tebex">Store</a></li>
              <li><a href="/sneakpeaks">Sneak Peaks</a></li>
              <li><a href="https://discord.gg/vgYmzjJJtZ">Discord</a></li>
          </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;