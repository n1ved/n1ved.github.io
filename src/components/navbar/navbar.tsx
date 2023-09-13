import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
   return <div className={styles.navbar}>
    <ul className={styles.navlinks}>
      <li className={styles.navlink}><Link href={'/'}>About Me</Link></li>
      <li className={styles.navlink}><Link href={'/'}>Projects</Link></li>
      <li className={styles.navlink}><Link href={'/'}>Resume</Link></li>
    </ul>
  </div>
}