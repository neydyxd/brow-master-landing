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
                        <h3 className="price__service-title">Коррекция</h3>
                        <p className="price__service-subtitle">коррекция формы пинцетом/нитью</p>
                    </div>
                    <h3 className="price__service-money">600 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Коррекция/воск</h3>
                        <p className="price__service-subtitle">коррекция формы воском</p>
                    </div>
                    <h3 className="price__service-money">800 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Моделирование/хна</h3>
                        <p className="price__service-subtitle">моделирование формы хной</p>
                    </div>
                    <h3 className="price__service-money">1200 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Моделирование/краска</h3>
                        <p className="price__service-subtitle">моделирование формы краской</p>
                    </div>
                    <h3 className="price__service-money">1500 &#8381;</h3>
                </div>
                <div className="price__service">
                    <div className="price__service-box">
                        <h3 className="price__service-title">Ламинирование</h3>
                        <p className="price__service-subtitle">укладка бровей с коррекцией формы</p>
                    </div>
                    <h3 className="price__service-money">2000 &#8381;</h3>
                </div>
            </div>
        </section>
    );
}
export default Price;