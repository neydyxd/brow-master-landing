function Price() {
    return(
        <section className="price">
            <div className="price__title-box">
                <h3 className='price__title'>прайс</h3>
                <label className='price__label'></label>
            </div>
            <h3 className='price__subtitle'>what do you want?</h3>
            <div className="price__box">
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Архитектура + окрашивание</h3>
                        <p className="price__service-subtitle">пинцет/воск + краска/хна</p>
                    </div>
                    <h3 className="price__service-money">750 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Архитектура</h3>
                        <p className="price__service-subtitle">пинцет/воск</p>
                    </div>
                    <h3 className="price__service-money">450 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Окрашивание</h3>
                        <p className="price__service-subtitle">краска/хна</p>
                    </div>
                    <h3 className="price__service-money">450 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Долговременная укладка + архитектура + окрашивание</h3>
                        <p className="price__service-subtitle">пинцет/воск + краска/хна</p>
                    </div>
                    <h3 className="price__service-money">1300 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Долговременная укладка + архитектура</h3>
                        <p className="price__service-subtitle">пинцет/воск</p>
                    </div>
                    <h3 className="price__service-money">100 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Окрашивание ресниц краской</h3>
                    </div>
                    <h3 className="price__service-money">100 &#8381;</h3>
                </div>
            </div>
        </section>
    );
}
export default Price;