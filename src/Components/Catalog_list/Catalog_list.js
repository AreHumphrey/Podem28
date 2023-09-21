import React from "react";
import "./Catalog_list.css"
import "../../Pages/Pages.css"
import img_1 from "../Img/img_1.jpg"
import img_2 from "../Img/img_2.jpg"
import img_3 from "../Img/img_3.jpg"
import img_7 from "../Img/img_3_stropy-gruzovye-iz-stalnogo-kanata.jpg"
import img_4 from "../Img/img_4.jpg"
import img_5 from "../Img/img_5.jpg"
import img_8 from "../Img/img_8.jpg"
import img_9 from "../Img/img_zveno_15.png"
import img_16 from "../Img/img_16.jpg"
import img_17 from "../Img/img_17.jpg"
import img_20 from "../Img/img_20.jpg"
import img_14 from "../Img/img_5_stropy-gruzovye-tekstilnye.jpg"
import img_21 from "../Img/img_4_sredstva-krepleniya-gruzov.png"
import img_22 from "../Img/img_zveno_4.png"
import img_23 from "../Img/img_3_stropy-gruzovye-tsepnye.png"
import img_25 from "../Img/img_ballony_generatory_kolpaki_7.jpg"
import img_26 from "../Img/img_ballony_generatory_kolpaki_6.jpg"
import img_27 from "../Img/img_ballony_generatory_kolpaki_5.jpg"

const Catalog_list = () => {
    const products = [
        {id: 2, href: "/stropy-gruzovye-tsepnye", name: "Стяжки цепные", image: img_23},
        {id: 7, href: "/stropy-gruzovye-tekstilnye", name: "Стропы грузовые текстильные", image: img_14},
        {id: 8, href: "/sredstva-krepleniya-gruzov", name: "Средства крепления грузов", image: img_4},
        {id: 9, href: "/stropy-gruzovye-tekstilnye", name: "Стропы грузовые текстильные", image: img_5},
        {id: 7, href: "/stropy-gruzovye-iz-stalnogo-kanata", name: "Стропы грузовые из стального каната", image: img_7},
        {id: 3, href: "/Talrep-takelazhnyy-vilka-vilka", name: "Талреп  такелажный вилка-вилка", image: img_22},
        {id: 4, href: "/sredstva-krepleniya-gruzov_4", name: "Талреп цепной", image: img_21},
        {id: 5, href: "/komplektuyushchie-dlya-strop", name: "Комплектующие для строп", image: img_1},
        {id: 1, href: "/TSep8", name: "Цепь", image: img_9},
        {id: 6, href: "/ruchnye-lebedki", name: "Ручные лебедки", image: img_2},
        {id: 7, href: "/ruchnye-tali", name: "Ручные тали", image: img_3},
        {id: 10, href: "/kolesa", name: "Колеса", image: img_8},
        {id: 11, href: "/provoloka-sploshnogo-secheniya", name: "Проволока сплошного сечения", image: img_16},
        {id: 12, href: "/aksessuary", name: "Аксессуары", image: img_17},
        {id: 13, href: "/krugi-otreznye", name: "Круги отрезные", image: img_20},
        {id: 14, href: "/ballony_generatory_kolpaki_7", name: "Баллон кислородный", image: img_25},
        {id: 15, href: "/ballony_generatory_kolpaki_6", name: "Баллон углекислотный 10л", image: img_26},
        {id: 16, href: "/ballony_generatory_kolpaki_5", name: "Баллон пропановый 5л", image: img_27},

    ];

    return (
        <div>
            <div className="all_frame">
                <div className="catalog">

                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt="Product Image"/>
                            <a href={product.href} className="product-name">{product.name}</a>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default Catalog_list;
