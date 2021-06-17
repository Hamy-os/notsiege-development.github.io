import styles from '../styles/sneakpeaks.module.css'

const  sneakpeaks = () => {
    return (
        <div>
            <body className={styles.body}>
            <div className={styles.header}>
                <h1>NotSiege development team</h1>
                <p>Our team is composed of the following people.</p>
            </div>

            <div className={styles.row}> 
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/c0d8i.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>NotSiege | Owner</p>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/7a7f6.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>NotPulse | Manager</p>
            </div>  
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/5e9i9.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>SaltySea | Team Lead</p>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/8b749.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>Jacob | Team</p>
                <br></br>
                <br></br>
            </div>
            </div>
            </body>
        </div>
    );
}
 
export default sneakpeaks ;