import Navbar from "@/components/navbar/navbar";
import styles from './page.module.css'
import ProjectCard from "@/components/project_card/project_card";
export default function Projects() {
    return <main className={styles.main}>
        <Navbar/>
        <div className={styles.bodyContainer}>
            <ProjectCard
                className={styles.projectCard}
                title="Skyze"
                description="Skyze is a weather app made on flutter with openweathermap API"
                technologies="Flutter, Dart, REST API"
                github = "https://github.com/n1ved/skyze"
                live = ""
                download = "https://github.com/n1ved/skyze/releases/latest"
                colors="#19B9FB,cyan,grey"
            />
            <ProjectCard
                className={styles.projectCard}
                title="FAdj"
                description="Simple front-end for ryzenAdj made with Flutter"
                technologies="Flutter, Dart, Shell"
                github = ""
                colors="#19B9FB,cyan,grey"
            />
            <ProjectCard
                className={styles.projectCard}
                title="nCrypter"
                description="A Simple text cyphering tool written in C++"
                technologies="C++"
                links="github.com"
                colors="pink"
            />

        </div>

    </main>;
}