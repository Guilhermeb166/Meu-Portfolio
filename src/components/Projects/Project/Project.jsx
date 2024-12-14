import styles from './Project.module.css'
export default function Project({image,name,description,tech,url}){
    return(
        <div className={styles.project}>
            <p className={styles.name}>{name}</p>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.overlay}>
                    <div className={styles.projectDetails}>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.skills}>{tech}</p>
                        <button className={styles.url}><a href={url} target='blank' rel='external'>Acessar Projeto</a></button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}