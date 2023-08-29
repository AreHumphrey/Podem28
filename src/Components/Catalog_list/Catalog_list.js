import React from "react";
import "./Catalog_list.css"
import img_1 from "../Img/img_1.jpg"
import img_2 from "../Img/img_2.jpg"
import img_3 from "../Img/img_3.jpg"
import img_4 from "../Img/img_4.jpg"
import img_5 from "../Img/img_5.jpg"
import img_6 from "../Img/img_6.jpg"
import img_7 from "../Img/img_7.jpg"
import img_8 from "../Img/img_8.jpg"
import img_9 from "../Img/img_9.jpg"
import img_10 from "../Img/img_10.jpg"
import img_11 from "../Img/img_11.jpg"
import img_12 from "../Img/img_12.jpg"
import img_13 from "../Img/img_13.jpg"
import img_14 from "../Img/img_14.jpg"
import img_15 from "../Img/img_15.jpg"
import img_16 from "../Img/img_16.jpg"
import img_17 from "../Img/img_17.jpg"
import img_18 from "../Img/img_18.jpg"
import img_19 from "../Img/img_19.jpg"
import img_20 from "../Img/img_20.jpg"

const Catalog_list = () => {
    const products = [
        {id: 1, href:"/komplektuyushchie-dlya-strop", name: "Комплектующие для строп", image: img_1},
        {id: 2, href:"/ruchnye-lebedki", name: "Ручные лебедки", image: img_2},
        {id: 3, href:"/ruchnye-tali", name: "Ручные тали", image: img_3},
        {id: 4, href:"/sredstva-krepleniya-gruzov", name: "Средства крепления грузов", image: img_4},
        {id: 5, href:"/stropy-gruzovye-tekstilnye", name: "Стропы грузовые текстильные", image: img_5},
        {id: 6, href:"/stropy-gruzovye-tsepnye", name: "Стропы грузовые цепные", image: img_6},
        {id: 7, href:"/stelazhi", name: "Стеллажи", image: img_7},
        {id: 8, href:"/kolesa", name: "Колеса", image: img_8},
        {id: 9, href:"/lesa-stroitelnye", name: "Леса строительные", image: img_9},
        {id: 10, href:"/vyshka-tura", name: "Вышка тура", image: img_10},
        {id: 11, href:"/gazosvarochnoe_oborudovanie_1.1", name: "Редукторы баллоные", image: img_11},
        {id: 12, href:"/komplektuyushchie-k-reduktoram-i-regulyatoram-manometry", name: "Комлектующие к редукторам и регулятором", image: img_12},
        {id: 13, href:"/gazosvarochnoe_oborudovanie_1.7", name: "Горелки сварочные", image: img_13},
        {id: 14, href:"/gazosvarochnoe_oborudovanie_1.10", name: "Резаки газовые", image: img_14},
        {id: 15, href:"/svarochnye-apparaty-gorelki", name: "Сварочные аппараты, горелки", image: img_15},
        {id: 16, href:"/provoloka-sploshnogo-secheniya", name: "Проволока сплошного сечения", image: img_16},
        {id: 17, href:"/aksessuary", name: "Аксессуары", image: img_17},
        {id: 18, href:"/klemmy-svarochnye", name: "Клеммы сварочные", image: img_18},
        {id: 19, href:"/svarochnye-elektrododerzhateli", name: "Сварочные электрододержатели", image: img_19},
        {id: 20, href:"/krugi-otreznye", name: "Круги отрезные", image: img_20},

    ];

    return (
        <div>

            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href} className="product-name">{product.name}</a>
                    </div>
                ))}

            </div>

        </div>

    );
};

export default Catalog_list;
