import React, {useState, useEffect} from 'react';
import './Header.css';
import SearchBox from './Search/Search';
import Catalog from './Catalog/Catalog';

export default function ButtonAppBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.matches('.TextContainer a')) {
                setActiveLink('');
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="App">
            <div className="Main_app">
                <div className="TextContainer">
                    <a
                        href="#"
                        onClick={() => handleLinkClick('Главная')}
                        className={activeLink === 'Главная' ? 'active' : ''}
                    >
                        Главная
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('Наша продукция')}
                        className={activeLink === 'Наша продукция' ? 'active' : ''}
                    >
                        Наша продукция
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('Полезное')}
                        className={activeLink === 'Полезное' ? 'active' : ''}
                    >
                        Полезное
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('Услуги')}
                        className={activeLink === 'Услуги' ? 'active' : ''}
                    >
                        Услуги
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('Контакты')}
                        className={activeLink === 'Контакты' ? 'active' : ''}
                    >
                        Контакты
                    </a>
                </div>
            </div>
            <div className="Search_app">
                <SearchBox/>
            </div>
            <Catalog/>
        </div>
    );
}
