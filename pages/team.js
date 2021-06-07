import styles from '../styles/Team.module.css'
const  team = () => {
    return (
        <div>
            <div className="team">
                <h1>Our Team</h1>
                <p>Our team is composed of the following people</p> make a bot to select users with team role and display as li
            </div>
            <div>
                <ul>
                    <li className={styles.facebook}> <a>Laboris commodo mollit voluptate esse sint tempor ipsum.</a></li>
                    <li className="facebook"> <a>Laboris commodo mollit voluptate esse sint tempor ipsum.</a></li>
                    <li className="facebook"> <a>Laboris commodo mollit voluptate esse sint tempor ipsum.</a></li>
                    <li className="facebook"> <a>Laboris commodo mollit voluptate esse sint tempor ipsum.</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default team ;