import Carousel from '../Carousel/Carousel';
import arrow from '../../images/broke-arrow.svg'

function Slider(){
    return(
        <section className='slider'>
            <div className='slider__about'>
                <div className='slider__first-box'>
                    <div className='slider__title-box'>
                    <h3 className='slider__title_1'>how?</h3>
                    <h3 className='slider__title_2'>как и где я работаю</h3>
                    <h3 className='slider__title_3'>where?</h3>
                    </div>
                    <label className='slider__label'></label>
                </div>
                <ul className='slider__list'>
                    <li className='slider__list-element'>Моя главная цель: сделать вас счастливее</li>
                    <li className='slider__list-element'>Принимаю в студии в центре города, где есть все удобства для вашего комфорта</li>
                    <li className='slider__list-element'>Работаю на профессиональных материалах и стерилизованных инструментах</li>
                    <li className='slider__list-element'>Экономлю ваши нервы 15 мин по утрам</li>
                    <li className='slider__list-element'>С моим макияжем без комплиментов вы не останетесь</li>
                </ul>
            </div>
            <div className='slider__arrow-block'>
            </div>
            <Carousel>
                <div className="slider__item slider__item_1"></div>
                <div className="slider__item slider__item_2"></div>
                <div className="slider__item slider__item_3"></div>
            </Carousel>
        </section>
    );
}

export default Slider;