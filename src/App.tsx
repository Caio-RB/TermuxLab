import { useState } from "react";

import { AppRouter } from "./routes/routes";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./main.scss";
import "./App.css";
import "./styles.scss";


function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "app dark" : "app"}>

            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Hero darkMode={darkMode} />
            <main>
                <AppRouter />
            </main>

        </div>
    );
}

export default App; 