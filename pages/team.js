import styles from '../styles/team.module.css'

const  team = () => {
    return (
        <div>
            <body className={styles.body}>
            <div className={styles.header}>
                <h1>NotSiege development team</h1>
                <p>Our team is composed of the following people.</p>
            </div>

            <div className={styles.row}> 
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/i8b64.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>NotSiege | Owner</p>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/gcbb0.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>NotPulse | Manager</p>
            </div>  
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/0jcg5.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>SaltySea | Team Lead</p>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/gcbb0.webp" style={{ width: '100%' }}/>
                <p className={styles.names}>Jacob | Team</p>
                <br></br>
                <br></br>
            </div>
            </div>
            </body>
        </div>
    );
}
 
export default team ;