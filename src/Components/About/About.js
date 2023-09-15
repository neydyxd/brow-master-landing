import about from '../../images/about.jpg';

function About() {
    return(
        <section className="about">
            <div className="about__photo-box">
                <img className="about__photo" src={about} alt="аватарка"/>
                <button className="about__button">Записать на брови</button>
            </div>
            <div className="about__text-box">
                <div className="aboute__title-container">
                    <h2 className="about__title">обо мне</h2>
                    <label className="about__label"></label>
                </div> 
                <h3 className="about__subtitle">about me</h3>
                <ul className="about__list">
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                    <li className="about__list-element">loremlorem loremlorem loremloremloremlorem</li>
                </ul>
            </div>
        </section>
    );
}

export default About;