import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_mini-tali-elektricheskie.png"
import img_2 from "../../Components/Img/img_2_mini-tali-elektricheskie.png"
import img_3 from "../../Components/Img/img_3_mini-tali-elektricheskie.png"
import img_4 from "../../Components/Img/img_4_mini-tali-elektricheskie.png"
import img_5 from "../../Components/Img/img_5_mini-tali-elektricheskie.png"
import img_6 from "../../Components/Img/img_6_mini-tali-elektricheskie.png"
import img_7 from "../../Components/Img/img_7_mini-tali-elektricheskie.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Mini_tali_elektricheskie = () => {
    const products = [
        {id: 1, href: "/mini_tali_elektricheskie_1", name: "  BH250A", image: img_1},
        {id: 2,  href: "/mini_tali_elektricheskie_2", name: "Тележка для мини тали с электроприво- дом TD", image: img_2},
        {id: 3, href: "/mini_tali_elektricheskie_3", name: "Тележка для мини тали с электроприво- дом тип TE1", image: img_3},
        {id: 4, href: "/mini_tali_elektricheskie_4", name: "HDGD c электрической тележкой (Китай)", image: img_4},
        {id: 5, href: "/mini_tali_elektricheskie_5", name: "PA (Китай)", image: img_5},
        {id: 6, href: "/mini_tali_elektricheskie_6", name: "тип МЕН, Стационарная", image: img_6},
        {id: 7, href: "/mini_tali_elektricheskie_7", name: " Тип МЕН, Комбинирован- ная", image: img_7},


    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Мини электрические тали</h1>
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

export default Mini_tali_elektricheskie;
