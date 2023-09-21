import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_ballony_generatory_kolpaki_1.jpg"
import img_2 from "../../../Components/Img/img_ballony_generatory_kolpaki_2.jpg"
import img_3 from "../../../Components/Img/img_ballony_generatory_kolpaki_3.jpg"
import img_4 from "../../../Components/Img/img_ballony_generatory_kolpaki_4.jpg"
import img_5 from "../../../Components/Img/img_ballony_generatory_kolpaki_5.jpg"
import img_6 from "../../../Components/Img/img_ballony_generatory_kolpaki_6.jpg"
import img_7 from "../../../Components/Img/img_ballony_generatory_kolpaki_7.jpg"
import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Ballony_generatory_kolpaki = () => {
    const products = [
        {id: 1, href: "/ballony_generatory_kolpaki_1", name: "Ключ баллонный ацетиленовый", image: img_1},
        {id: 2, href: "/ballony_generatory_kolpaki_2", name: "Ключ баллонный универсальный", image: img_2},
        {id: 3, href: "/ballony_generatory_kolpaki_3", name: "Ключ сварщика универсальный S8 - 24", image: img_3},
        {id: 4, href: "/ballony_generatory_kolpaki_4", name: "Баллон пропановый 12 л", image: img_4},
        {id: 5, href: "/ballony_generatory_kolpaki_5", name: "Баллон пропановый 5 л", image: img_5},
        {id: 6, href: "/ballony_generatory_kolpaki_6", name: "Баллон углекислотный 10л", image: img_6},
        {id: 7, href: "/ballony_generatory_kolpaki_7", name: "Баллон кислородный", image: img_7},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Баллоны, генераторы, колпаки</h1>
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

export default Ballony_generatory_kolpaki;
