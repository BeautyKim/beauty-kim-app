import styles from '@/styles/Home/header.module.css'
import Link from "next/link"
import SearchBar from './SearchBar';

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
            <img className={styles.logo} src="/darong.jpg" />
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