import Link from "next/link";
import styles from "@/styles/home/header.module.css";
import SearchBar from './SearchBar';
import Image from "next/image";

export default function Header() {
  const menuItems = [
    { text: 'Dev-log', href: '/dev-log' },
    { text: 'Culture', href: '/culture' },
    { text: 'About', href: '/about' },
  ];

  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={'./'}>
            <Image className={styles.logo} src="/darong.jpg" width={40} height={40} alt={'로고'}/>
          </Link>
        </div>
        <div >
          <ul className={styles.menuBox}>
            {menuItems.map((menuItem, index) => (
              <li key={index} className={styles.menu}>
                {/* <Link className={styles.link} href={menuItem.href}>{menuItem.text}</Link> */}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.button}>
          <SearchBar/>
        </div>
      </nav>
    </header>
  )
}