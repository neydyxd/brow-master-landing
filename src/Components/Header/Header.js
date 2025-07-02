import tg from '../../images/tg.svg'
import inst from '../../images/inst.svg'
import phone from '../../images/phone.svg'
import menu from '../../images/menu.svg'
import Navigation from '../Navigation/Navigation'
import { useState } from 'react'

function Header() {
    const [isClicked, setIsClicked] = useState(false);

    function handleOpen(){
        setIsClicked(true);
    }

    function handleClose(){
        setIsClicked(false);
    }

    return(
        <header className='header'>
        <div className="header__title-box">
            <h1 className="header__title">IRINA</h1>
            <h2 className="header__subtitle">Brow-master</h2>
        </div>
        <div className="header__info">
            <div className="header__links">
                <a className="header__link" href="#" aria-label="Telegram">
                    <img className="header__icon header__icon_active" src={tg} alt="Telegram"/>
                </a>
                <a className="header__link" href="#" aria-label="Instagram">
                    <img className="header__icon header__icon_active" src={inst} alt="Instagram"/>
                </a>
                <img className="header__icon" src={phone} alt="Телефон"/>
            </div>
            <a href="tel: +79960008292" className="header__phone">+7-996-000-82-92</a>
            <button onClick={handleOpen} type="button" className="header__menu-button" aria-label="Открыть меню">
                <img className="header__menu-icon" src={menu} alt="Меню"/>
            </button>
        </div>
        {isClicked ? <Navigation handleClose={handleClose} /> : ''}
        </header>
    );
}

export default Header;