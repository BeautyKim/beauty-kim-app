import styles from '@/styles/home/title.module.css';

export default function Title() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.h1}>한 번에 하나씩</h1>
                <p className={styles.p}>기록합니다</p>
            </div>
        </section>
    )
}