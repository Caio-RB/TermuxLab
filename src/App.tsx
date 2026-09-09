import { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import './App.scss';

function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={darkMode ? 'app dark' : 'app'}>

            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <Hero
                darkMode={darkMode}
                menuOpen={menuOpen}
            />

        </div>
    );
}

export default App;