import styles from '../styles/home.module.css'

const home = () => {
  return (
    <div className={styles.root}>
    <div>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </div>
        <div>
          <h1 className={styles.h1}>Welcome to notsiege development</h1>
            <h3 className={styles.h1}>The place for all your FiveM Needs!</h3>
                <div className={styles.container}>
                  <div className={styles.centermepls}>
                    <br></br>
                    <br></br>
                    <button className={styles.btn}><a href="/about"><span>Learn More</span></a></button>
                    <button className={styles.btn}><a href="https://discord.gg/vgYmzjJJtZ"><span>Join our Discord</span></a></button>
                  </div>
                </div>
                <div className={styles.iexisttomakethispagescrollable}>

                </div>
        </div>
        </div>
  );
}
 
export default home;