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
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="https://github.com/notsiege-development/NS-CAR-PACK" className={styles.names}>Need a FiveM carpack but you are too lazy? Well fear no more this pack is for you! It is constantly expanding and has the best and optimized vehicles!</a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="https://github.com/notsiege-development/NS-REPLACE-CAR-PACK" className={styles.names}>A car pack that replaces EVERY SINGLE CAR in gta 5</a>
            </div>  
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="https://github.com/notsiege-development/ns-police-pack" className={styles.names}>A pack of Police supercars, retextured by notsiege development. No specific department.</a>
            </div>
            <div className={styles.column}>
                <img src="https://hamy.iodine.gg/ajc52.webp" style={{ width: '100%' }}/>
                <a href="https://github.com/notsiege-development/NightHawk" className={styles.names}>A discord moderation bot made for the notsiege-development discord found here: https://discord.gg/zVPCNcCgZE</a>
                <br></br>
                <br></br>
            </div>
            </div>
            </body>
        </div>
    );
}
 
export default projects ;