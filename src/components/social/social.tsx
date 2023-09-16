
import style from './social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
export default function Social() {
    return <div className={style.social}>
        <a href='https://github.com/n1ved/' className={style.link}><FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
        <a href='https://linkedin.com/in/n1ved' className={style.link}><FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>
        <a href='https://fosstodon.com/@n1ved' className={style.link}><FontAwesomeIcon icon={faMastodon} className={style.icon}/></a>
        <a href='https://instagram.com/__n1ved' className={style.link}><FontAwesomeIcon icon={faInstagram} className={style.icon}/></a>
        <a href='mailto:nivedrsalini@gmail.com' className={style.link}><FontAwesomeIcon icon={faEnvelope} className={style.icon}/></a>
        <a href='https://t.me/n1ved_0' className={style.link}><FontAwesomeIcon icon={faTelegram} className={style.icon}/></a>
        </div>
} 