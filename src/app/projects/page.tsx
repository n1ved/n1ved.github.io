import Navbar from "@/components/navbar/navbar";
import styles from './page.module.css'
import ProjectCard from "@/components/project_card/project_card";
export default function Projects() {
    return <main className={styles.main}>
        <Navbar haveTitle={true} title={"Projects"}/>
        <div className={styles.bodyContainer}>
            <ProjectCard
                className={styles.projectCard}
                title="Skyze"
                description="Skyze is a weather app made on flutter with openweathermap API"
                technologies="Flutter, Dart"
                github = "https://github.com/n1ved/skyze"
                haveLive = {false}
                haveDownload = {true}
                download = "https://github.com/n1ved/skyze/releases/latest"
                colors="#19B9FB,cyan"
            />
            <ProjectCard
                className={styles.projectCard}
                title="FAdj"
                description="Simple front-end for ryzenAdj made with Flutter"
                technologies="Flutter, Dart, Shell"
                github = "https://github.com/n1ved/FAdj"
                haveLive = {false}
                haveDownload = {false}
                colors="#19B9FB,cyan,grey"
            />
            <ProjectCard
                className={styles.projectCard}
                title="nCrypter"
                description="A Simple text cyphering tool written in C++"
                technologies="C++"
                links="https://github.com/n1ved/ncrypter"
                haveLive = {true}
                live = "https://n1ved.me/ncrypter/"
                haveDownload = {true}
                download = "https://github.com/n1ved/ncrypter/releases/latest"
                colors="pink"
            />

        </div>
        <center> <div className={styles.repo}>Find More on my <a href="https://github.com/n1ved?tab=repositories"> Github</a></div></center>

    </main>;
}