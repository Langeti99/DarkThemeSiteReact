import { useEffect } from 'react';

import { detectDarkMode } from '../../utils/detectDarkMode';

import { useLocalStorage } from '../../utils/useLocalStorage';

import './style.css';
import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkMode = () => {
    //const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
    
    const [isActiveDarkMode, setIsActiveDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    

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
    
    return (  
        <button className={isActiveDarkMode ? 'dark-mode-btn dark-mode-btn--active' : 'dark-mode-btn'} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default BtnDarkMode;