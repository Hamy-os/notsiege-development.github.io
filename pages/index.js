import styles from '../styles/Home.module.css'
import Link from 'next/link'
const home = () => {
  return (
    <div>
      <h1>Welcome to notsiege development</h1>
      <div className={ styles.description }>
        <h3>The place for all your FiveM Needs!</h3>
      </div>
      <div className={styles.middle}>
        <a href="https://discord.gg/vgYmzjJJtZ"><span></span><span></span><span></span><span></span>Join our Discord</a>
        <a href="/about"><span></span><span></span><span></span><span></span>Learn More</a>
      </div>
    </div>
  );
}
 
export default home;