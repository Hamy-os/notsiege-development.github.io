import styles from '../styles/projects.module.css'

const  projects = () => {
    return (
        <div>
            <body className={styles.body}>
            <div className={styles.header}>
                <h1>NotSiege development Projects</h1>
                <p>Here you can find quick links to all of our projects</p>
            </div>

            <div className={styles.row}> 
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/c0d8i.webp" style={{ width: '100%' }}/>
                <a href="https://github.com/notsiege-development/NS-CAR-PACK" className={styles.names}>Need a FiveM carpack but you are too lazy? Well fear no more this pack is for you! It is constantly expanding and has the best and optimized vehicles!</a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/7a7f6.webp" style={{ width: '100%' }}/>
                <a href="" className={styles.names}></a>
            </div>  
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/5e9i9.webp" style={{ width: '100%' }}/>
                <a href="" className={styles.names}></a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/8b749.webp" style={{ width: '100%' }}/>
                <a href="" className={styles.names}></a>
                <br></br>
                <br></br>
            </div>
            </div>
            </body>
        </div>
    );
}
 
export default projects ;