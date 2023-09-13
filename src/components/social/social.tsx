
import style from './social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagramSquare, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
export default function Social() {
    return <div className={style.social}>
        <a href='' className={style.link}><FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
        <a href='' className={style.link}><FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>
        <a href='' className={style.link}><FontAwesomeIcon icon={faMastodon} className={style.icon}/></a>
        <a href='' className={style.link}><FontAwesomeIcon icon={faInstagram} className={style.icon}/></a>
        <a href='' className={style.link}><FontAwesomeIcon icon={faEnvelope} className={style.icon}/></a>
        <a href='' className={style.link}><FontAwesomeIcon icon={faTelegram} className={style.icon}/></a>
        </div>
} 