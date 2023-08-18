import React from "react";
import "./Basement.css";
import logo_podem28 from "../Img/logo_podem28.svg"
export default function Basement() {
    return (
        <div className="basement">

            <div className="logo-container">
                <img className = "logo" src= {logo_podem28}/>
            </div>

            <div className="column">

                <div className="text">Навигация</div>

                <div className="text_infos">
                    <a href="#" className="text_all">Главная</a>
                    <a href="#" className="text_all">Полезное</a>
                    <a href="#" className="text_all">Наша Продукция</a>

                </div>

            </div>

            <div className="column">
                <div className="text">Наши контакты</div>

                <div className="text_infos">

                    <a className="text_alls">

                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.91667 6.16675H14.25L17.4167 13.8751L13.4583 16.1876C15.154 19.5354 17.9367 22.2449 21.375 23.8959L23.75 20.0417L31.6667 23.1251V29.2917C31.6667 30.1095 31.333 30.8938 30.7392 31.472C30.1453 32.0502 29.3399 32.3751 28.5 32.3751C22.3238 32.0096 16.4986 29.4559 12.1233 25.1958C7.74805 20.9357 5.12533 15.2637 4.75 9.25008C4.75 8.43233 5.08363 7.64807 5.6775 7.06984C6.27136 6.4916 7.07681 6.16675 7.91667 6.16675Z"
                                stroke="#EAE9E9" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        8 (4162) 501-933

                    </a>
                </div>

                <div className="text_infos">

                    <a href="https://2gis.ru/blagoveshensk/geo/7318985049659421" className="text_alls">

                        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path
                                d="M18 29.75C25.4558 29.75 31.5 24.0416 31.5 17C31.5 9.95837 25.4558 4.25 18 4.25C10.5442 4.25 4.5 9.95837 4.5 17C4.5 24.0416 10.5442 29.75 18 29.75Z"
                                stroke="#EAE9E9" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.40039 12.75H30.6004" stroke="#EAE9E9" stroke-opacity="0.6"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.40039 21.25H30.6004" stroke="#EAE9E9" stroke-opacity="0.6"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M17.2495 4.25C14.7225 8.07445 13.3828 12.492 13.3828 17C13.3828 21.508 14.7225 25.9255 17.2495 29.75"
                                stroke="#EAE9E9" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M18.75 4.25C21.277 8.07445 22.6167 12.492 22.6167 17C22.6167 21.508 21.277 25.9255 18.75 29.75"
                                stroke="#EAE9E9" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>

                        </svg>

                        г. Благовещенск, ул. Тенистая, 127Б

                    </a>

                </div>
                <div className="text_infos">

                    <a href="mailto:podem-blag@mail.ru" className="text_alls">

                        <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path
                                d="M30.0833 7.08325H7.91667C6.16776 7.08325 4.75 8.35178 4.75 9.91659V24.0833C4.75 25.6481 6.16776 26.9166 7.91667 26.9166H30.0833C31.8322 26.9166 33.25 25.6481 33.25 24.0833V9.91659C33.25 8.35178 31.8322 7.08325 30.0833 7.08325Z"
                                stroke="#EAE9E9" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 9.9165L19 18.4165L33.25 9.9165" stroke="#EAE9E9" stroke-opacity="0.6"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        podem-blag@mail.ru

                    </a>
                </div>
            </div>
        </div>
    );
}
