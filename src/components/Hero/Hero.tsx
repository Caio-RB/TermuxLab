import heroLight from '../../images/hero_01.png';
import heroDark from '../../images/hero_02.png';
import './styleHero.scss'

interface HeroProps {
    darkMode: boolean;
    menuOpen: boolean;
}

function Hero({ darkMode, menuOpen }: HeroProps) {
    
    return(
        
        <div className="hero">

        <div className={`hero__container ${menuOpen ? 'padd-open' : ''}`}>
                <div className="hero__container__box">
                    <h2>Tecnologia<br /> ao alcance <br /> de <span className="lab">todos</span></h2>
                    <p>
                        Termux Lab é uma iniciativa de inclusão
                        digital, criada para levar conhecimneto
                        suporte e oportunidades ao mundo da
                        tecnologia e programação para pessoas
                        de baixa renda que sonham em se tornar <br />
                        programadores
                    </p>
                    <div className="hero__container__box__caixinha">
                        <div className="hero__container__box__caixinha__btn-comecar">Começar</div>
                        <div>Saiba mais -&gt;</div>
                    </div>
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