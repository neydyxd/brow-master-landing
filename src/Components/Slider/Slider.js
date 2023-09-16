import Carousel from '../Carousel/Carousel';

function Slider(){
    return(
        <section className='slider'>
            <div className='slider__about'>

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