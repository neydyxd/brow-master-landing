import about from '../../images/about.jpg';

function About({onClickButton}) {
    return(
        <section className="about">
            <div className="about__photo-box">
                <img className="about__photo" src={about} alt="аватарка"/>
            </div>
            <div className="about__text-box">
                <div className="aboute__title-container">
                    <h2 className="about__title">обо мне</h2>
                    <label className="about__label"></label>
                </div> 
                <h3 className="about__subtitle">about me</h3>
                <ul className="about__list">
                    <li className="about__list-element">Дипломированный специалист по бровям в Нижнем Новгороде</li>
                    <li className="about__list-element">Сертифицированный визажист  коммерческих макияжей</li>
                    <li className="about__list-element">Имею опыт работы в премиальном салоне города</li>
                    <li className="about__list-element">Занималась бальными танцами, где и смогла найти свое призвание в красоте</li>
                    <li className="about__list-element">Уже два года делаю брови мечты за  30 мин</li>
                    <li className="about__list-element">Создам образ, чтоб челюсть отвисла</li>
                </ul>
                <button type="click" className="about__button" onClick={onClickButton}>Записаться на брови</button>
            </div>
        </section>
    );
}

export default About;