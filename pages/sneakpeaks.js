import styles from '../styles/sneakpeaks.module.css'

const  sneakpeaks = () => {
    return (
        <div>
            <body className={styles.body}>
            <div className={styles.header}>
                <h1>NotSiege development team Sneapeaks</h1>
                <p>Here you can see some of our sneakpeaks</p>
            </div>

            <div className={styles.row}> 
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="#" className={styles.names}></a>
                <br></br>
                <br></br>
            </div>
            </div>
            </body>
        </div>
    );
}
 
export default sneakpeaks ;