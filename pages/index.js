import styles from '../styles/Home.module.css'

const home = () => {
  return (
    <div>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <h1>Welcome to notsiege development</h1>
      <div className={ styles.description }>
        <h3>The place for all your FiveM Needs!</h3>
      </div>
      <div className={styles.middle}>
      <a href="/about">Learn More</a>
        <a href="https://discord.gg/vgYmzjJJtZ"><span></span><span></span><span></span><span></span>Join our Discord</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
 
export default home;