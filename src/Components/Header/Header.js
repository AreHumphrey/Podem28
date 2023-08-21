import React, {useState, useRef} from 'react';
import './Header.css';
import SearchBox from './Search/Search';
import Catalog from './Catalog/Catalog';
import {useClickOutside} from "./useClickOutside";
import logo from "../Img/logo__podem28.svg";

export default function ButtonAppBar() {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    return (
        <div className="App">

            <div className="Main_app">
                <img className="logo_header" src={logo}/>

                <div className="TextContainer">
                    <a
                        href="/"
                        onClick={() => handleLinkClick('Главная')}
                        className={activeLink === 'Главная' ? 'active' : ''}
                    >
                        Главная
                    </a>

                    <a
                        href="useful"
                        onClick={() => handleLinkClick('Полезное')}
                        className={activeLink === 'Полезное' ? 'active' : ''}
                    >
                        Полезное
                    </a>
                    <a
                        href="/services"
                        onClick={() => handleLinkClick('Услуги')}
                        className={activeLink === 'Услуги' ? 'active' : ''}
                    >
                        Услуги
                    </a>
                    <a
                        href="/contacts"
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
