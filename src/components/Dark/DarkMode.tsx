import './StylesDark.scss'
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

    interface DarkModeProps {
        darkMode: boolean;
        setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    }

    function DarkMode({ darkMode, setDarkMode }: DarkModeProps) {

        return (
            <div>
                <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        );

    }

    export default DarkMode;