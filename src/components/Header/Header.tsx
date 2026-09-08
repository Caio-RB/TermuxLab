import './Header.scss';

import logo from '../../images/logo-transparente01.png';

import DarkMode from '../Dark/DarkMode';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {

    return (
        <header>

            <div className="container">

                <div className="container__brand">

                    <img src={logo} alt="Logo" />

                    <h1>
                        Termux<span className="lab">Lab</span>
                    </h1>

                </div>

                <div className="container__menu">

                    <ul className="container__menu__list">

                        <li className="container__menu__list__item">
                            <a href="#">Home</a>
                        </li>

                        <li className="container__menu__list__item">
                            <a href="#">Blog</a>
                        </li>

                        <li className="container__menu__list__item">
                            <a href="#">Sobre</a>
                        </li>

                        <li className="container__menu__list__item">
                            <a href="#">Contato</a>
                        </li>

                        <li className="container__menu__list__item">
                        
                                <DarkMode
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />

                        </li>

                    </ul>

                </div>

            </div>

        </header>
    );
};

export default Header;