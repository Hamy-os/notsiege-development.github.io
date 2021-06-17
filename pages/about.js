import styles from '../styles/about.module.css'
const about = () => {
    return (
        <div className={styles.wrapper}>
            <section>
                <div className="whoarewe">
                    <h1>Who are we?</h1>
                        <p>Notsiege-Development is a group of FiveM enthusiast that got together to orignally <br></br>make a carpack for FiveM but their goals have since evolved and they are now making scripts, maps, cars, <br></br> and much more for FiveM!</p>
                </div>
            </section>
            <section>
                <div>
                    <h1>What We Do</h1>
                        <p>notsiege development mostly focuses on the creation and modification of vehicles, <br></br> maps, and liveries. We also have developers on our team who write scripts.</p>
                </div>
            </section>
            <section>
                <div className={styles.faq}>
                    <h1>F.A.Q</h1>
                        <ul>
                            <li>Why do you charge for our products?</li>
                                <p>To make the best use of our time as developers, we sell many of our resources. However, we do have a few free releases on our GitHub</p>
                            <li>Source Code?</li>
                                <p>All of our scripting products come with source code included. For design products such as liveries, we are more than happy to provide the source upon request.</p>
                            <li>Can I join the Team?</li>
                                <p>There is a process, our team is specially selected and we are extremely careful in deciding who we want on the team. First, show what you can do! Maybe earn our respect or help us out. Be active, answer questions, give suggestions, be friendly, and you may earn recognized developer. That's where we usually look for Team, but hey! You might be next! Keep your DMs open </p>
                            <li>What led to notsiege-development being created?</li>
                                <p>This is actually a very good question. When the NS-CAR-PACK was being made it was all notsiege, But when SaltySea arrived a organisation had to be made for better collaboration.</p>
                            <li>What software do you use?</li>
                                <p>We use various amounts of software, For maps we use 3DS MAX and CodeWalker, for vehicles we use ZModeler and OpenIV as well was Adobe photoshop and Paint.net, For scripts we use VSCode.</p>
                            <li>How can we speak further?</li>
                                <p>You can join our Discord! We are always looking to interact with our followers! </p>
                            <iframe src="https://canary.discord.com/widget?id=842938260447952996&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </ul>
                </div>
            </section>
        </div>
    );
}
 
export default about;