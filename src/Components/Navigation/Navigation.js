import tg from '../../images/tg.svg'
import inst from '../../images/inst.svg'
import phone from '../../images/phone.svg'
import close from '../../images/close-button.svg'

function Navigation({ handleClose }) {
    return(
        <div className="navigation__overlay">
            <div onClick={handleClose} className="navigation__container-empty"></div>
            <div className="navigation__container">
                <button className="navigation__close-button" onClick={handleClose}>
                    <img className='navigation__close-icon' src={close}/>
                </button>
                <nav className="navigation__nav">
                    <div className="navigation__links">
                        <a className="navigation__link">
                            <img className="navigation__icon navigation__icon_active" src={tg}/>
                        </a>
                        <a className="navigation__link">
                            <img className="navigation__icon navigation__icon_active" src={inst}/>
                        </a>
                    </div>
                    <a href="tel: +79960008292" className="navigation__phone">+7-996-000-82-92</a>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;