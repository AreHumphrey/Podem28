import React from "react";
import "../Pages.css"
import img_1 from  "../../Components/Img/img_1_lebedki_elektricheskie.png"
import img_2 from  "../../Components/Img/img_2_lebedki_elektricheskie.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Lebedki_elektricheskie = () => {
    const products = [
        {id: 1, href: "/Lebedki-elektricheskie-serii-JK", name: "Лебедки электрические серии JK", image: img_1},
        {id: 2, href: "/Lebedki-elektricheskie-serii-KDJ", name: "Лебедки электрические серии KDJ", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Лебедки электрические</h1>
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

export default Lebedki_elektricheskie;
