import close from '../../images/close.png';

function Popup({isOpen, onClose}){
    const popupClass = `popup ${isOpen ? 'popup_opened' : ''}`;

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return(
        <div className={popupClass} onClick={handleOverlayClick}>
            <div className="popup__container">
                <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть форму">
                    <img className="popup__close-image" src={close} alt="Кнопка закрытия формы" />
                </button>
                <form name="bookingForm" className="popup__form" method='POST' action="tel.php">
                    <h2 className="popup__title">Записывайся на брови</h2>
                    <input 
                        className='popup__input' 
                        type='text' 
                        name='name' 
                        placeholder='Ваше имя'
                        required
                    />
                    <input 
                        className='popup__input' 
                        type='tel' 
                        name='phone' 
                        placeholder='Ваш телефон'
                        required
                    />
                    <button className="popup__save" type="submit">Записаться</button>
                </form>
            </div>
        </div>
    )
}   

export default Popup;