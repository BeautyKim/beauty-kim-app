"use client"
import styles from "@/styles/home/searchBar.module.css"

export default function SearchBar() {
    const handleClick = () => {
        alert("기능 준비중입니다.")
    }
    return(
        <>
        <button className={styles.button} onClick={handleClick}>
            <img src={"./search_ui.svg"} width={30}/>
        </button>
        </>
    )
}