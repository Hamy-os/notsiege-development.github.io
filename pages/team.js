import styles from '../styles/Team.module.css'
const  team = () => {
    return (
        <div>
            <div className={styles.team}>
                <h1>Our Team</h1>
                <h2>Our team is composed of the following people</h2>
            </div>
            <div className={styles.flexcontainer}>
                <ul className={styles.wrapper}>
                    <div>
                        <img src="https://hamy.iodine.gg/c0d8i.webp" alt="image of notsiege"></img>
                        <li className={styles.siege}> <a>Notsiege is the founder of NSD and is the reason all this exists</a></li>
                    </div>
                    <div>
                        <img src="https://hamy.iodine.gg/7a7f6.webp" alt="image of notpulse"></img>
                        <li className={styles.pulse}> <a>Notpulse is the co-founder of NSD and makes sure everything goes smoothly</a></li>
                    </div>
                    <div>
                        <img src="https://hamy.iodine.gg/5e9i9.webp" alt="image of SaltySea"></img>
                        <li className={styles.hamy}> <a>Hamy is the lead dev at NSD and oversees all operations</a></li>
                    </div>
                    <div>
                        <img src="https://hamy.iodine.gg/8b749.webp" alt="image of Jacob"></img>
                        <li className={styles.jacob}> <a>Jacob is a developer at NSD and made the beautiful Neon script</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}
 
export default team ;