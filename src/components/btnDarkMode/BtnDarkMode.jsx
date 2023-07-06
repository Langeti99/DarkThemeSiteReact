import { useEffect } from 'react';

import { detectDarkMode } from '../../utils/detectDarkMode';

import { useLocalStorage } from '../../utils/useLocalStorage';

import './style.css';
import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkMode = () => {
    //const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
    
    const [isActiveDarkMode, setIsActiveDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    
    // Добавляє або убирає темну тему
    useEffect(() => {
        if(isActiveDarkMode){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isActiveDarkMode])

    const toggleDarkMode = () => {
        setIsActiveDarkMode(!isActiveDarkMode);
    };


    // Відслідковує автоматичну зміну теми в системних налаштуваннях
    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change' , (event) => {
                const isDarkTheme = event.matches ? true : false;
                setIsActiveDarkMode(isDarkTheme);
            });
    }, [setIsActiveDarkMode])

    const btnNormal = 'dark-mode-btn'; 
    const btnActive = 'dark-mode-btn dark-mode-btn--active';
    
    return (  
        <button className={isActiveDarkMode ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default BtnDarkMode;