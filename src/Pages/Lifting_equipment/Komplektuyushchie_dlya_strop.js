import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_komplektuyushchie-dlya-strop.png"
import img_2 from "../../Components/Img/img_2_komplektuyushchie-dlya-strop.png"
import img_3 from "../../Components/Img/img_3_komplektuyushchie-dlya-strop.png"
import img_4 from "../../Components/Img/img_4_komplektuyushchie-dlya-strop.png"
import img_5 from "../../Components/Img/img_5_komplektuyushchie-dlya-strop.png"
import img_6 from "../../Components/Img/img_6_komplektuyushchie-dlya-strop.png"
import img_7 from "../../Components/Img/img_7_komplektuyushchie-dlya-strop.png"
import img_8 from "../../Components/Img/img_8_komplektuyushchie-dlya-strop.png"
import img_9 from "../../Components/Img/img_9_komplektuyushchie-dlya-strop.png"
import img_10 from "../../Components/Img/img_10_komplektuyushchie-dlya-strop.png"
import img_11 from "../../Components/Img/img_11_komplektuyushchie-dlya-strop.png"
import img_12 from "../../Components/Img/img_12_komplektuyushchie-dlya-strop.png"
import img_13 from "../../Components/Img/img_13_komplektuyushchie-dlya-strop.png"
import img_14 from "../../Components/Img/img_14_komplektuyushchie-dlya-strop.png"
import img_15 from "../../Components/Img/img_15_komplektuyushchie-dlya-strop.png"
import img_16 from "../../Components/Img/img_16_komplektuyushchie-dlya-strop.png"
import img_17 from "../../Components/Img/img_17_komplektuyushchie-dlya-strop.png"


import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Komplektuyushchie_dlya_strop = () => {
    const products = [
        {id: 1, href: "/Zveno-ovalnoe-s-dopolnitelnymi-zvenyami", name: "Звено с дополни тельными звеньями", image: img_1},
        {id: 2, href: "/Zazhim-dlya-kanata-DIN-1142", name: " Зажим для каната DIN 1142", image: img_2},
        {id: 3, href: "/Kryuk-S-obraznyy", name: "Крюк S-образный", image: img_3},
        {id: 4, href: "/Talrep-takelazhnyy-vilka-vilka", name: "Талреп такелажный вилка-вилка", image: img_4},
        {id: 5, href: "/Skoby-takelazhnye", name: "Скобы такелажные", image: img_5},
        {id: 6, href: "/Kryuk-chekernyy", name: "Крюк чекерный", image: img_6},
        {id: 7, href: "/Kryuk-samozapirayushchiysya", name: "Крюк самозапи рающийся", image: img_7},
        {id: 8, href: "/Kryuk-chalochnyy-tip-322A-s-vertlyugom", name: " Крюк чалочный тип 322А с вертлюгом", image: img_8},
        {id: 9, href: "/Kryuk-chalochnyy-tip-320A", name: " Крюк чалочный тип 320А", image: img_9},
        {id: 10, href: "/Zveno-ovalnoe", name: "Звено овальное", image: img_10},
        {id: 11, href: "/Ukorotitel-tsepnoy-kleshnevoy", name: "Укоротитель цепной клешневой", image: img_11},
        {id: 12, href: "/Kryuk-s-shirokim-zevom", name: "Крюк с широким зевом", image: img_12},
        {id: 13, href: "/Zveno-soedinitelnoe-evropeyskogo-tipa", name: "Звено соединительное", image: img_13},
        {id: 14, href: "/Kryuk-s-vilochnym-razemom", name: "Крюк с вилочным разъемом", image: img_14},
        {id: 15, href: "/TSep8", name: "Цепь", image: img_15},
        {id: 16, href: "/Koush-otsinkovannyy-dlya-kanata", name: "Коуш оцинкованный для каната", image: img_16},
        {id: 17, href: "/Vtulka-alyuminievaya", name: "Втулка алюминиевая", image: img_17},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Комплектующие для строп</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href} className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Komplektuyushchie_dlya_strop;
