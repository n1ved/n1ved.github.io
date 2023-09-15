import Navbar from "@/components/navbar/navbar";
import styles from './page.module.css'
import ProjectCard from "@/components/project_card/project_card";
export default function Projects() {
    return <main className={styles.main}>
        <h1 className={styles.title}>
            Projects
        </h1>
        <div className={styles.bodyContainer}>
            <ProjectCard
                className={styles.projectCard}
                image="https://repository-images.githubusercontent.com/625124989/92144e56-997b-4406-ad8a-d21c0e97f3cb"
                title="Skyze"
                description="Skyze is beautiful weather app made on flutter with openweathermap API"
                technologies="Flutter, Dart, REST API"
                links="github.com"
            />
        </div>

    </main>;
}