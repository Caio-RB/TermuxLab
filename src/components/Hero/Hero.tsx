import heroLight from '../../images/termuxlab-hero02.png';
import heroDark from '../../images/hero_transparente.png';
import DarkMode from '../Dark/DarkMode';
import './styleHero.scss'

interface HeroProps {
    darkMode: boolean;
}

function Hero({ darkMode }: HeroProps) {
    return(
        <div className="hero">
            <div className="hero__container">
                <div className="hero__container__box">
                    <h2>Domine o <br />Termux. <br />Explore o poder <br />do Linux no Android.</h2>
                </div>
                <div className="hero__container__image">
                    <img
                        src={darkMode ? heroDark : heroLight}
                        alt="Termux Lab"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;