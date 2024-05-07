import styles from "@/styles/home/footer.module.css"
import Link from "next/link"
export default function Footer() {
    return(
        <footer className={styles.container}>
            <div className={styles.image}>
                <Link href={"https://github.com/BeautyKim"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={"./github_black_logo.svg"} width={30}/>
                </Link>
                <Link href={"https://www.instagram.com/0_ahreumi/"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={"./instagram_black_logo.svg"} width={30}/>
                </Link>
                <Link href={"mailto:shadowbubobubo@gmail.com"}>
                    <img src={"./mail_black_logo.svg"} width={30}/>
                </Link>
            </div>
            <div className={styles.textBox}>
                <h3 className={styles.text}>Beauty Kim blog</h3>
                <p className={styles.text}>ⓒ 2023. Beauty Kim. All rights reserved.</p>
            </div>
        </footer>
    )
}