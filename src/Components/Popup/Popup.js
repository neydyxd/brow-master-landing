import close from '../../images/close.png';
function Popup({isOpen,onClose}){
    console.log(isOpen);
    
    const popupClass = `popup ${isOpen ? 'popup_opened' : ''}`;
    return(
        <>
        <div className={popupClass}  >
            <div className="popup__container" >
                <button onClick={onClose} className="popup__close" type="button"> <img className="popup__close-image" src={close}  alt="кнопка закрытия формы" /></button>
                <form name="{name}" className={`popup__form`} method='POST' action="tel.php">
                    <h2 className="popup__title">Записывайся на брови</h2>
                    <input className='popup__input' type='text' name='name' placeholder='Ваше имя'></input>
                    <input className='popup__input' type='text' name='phone' placeholder='Ваше телефон'></input>
                    <button className="popup__save" type="submit">test</button>
                </form>
            </div>
        </div>
        </>
    )
}   

export default Popup;