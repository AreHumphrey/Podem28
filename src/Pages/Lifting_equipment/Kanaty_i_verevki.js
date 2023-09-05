import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_kanati_i_ver.png"
import img_2 from "../../Components/Img/img_2_kanati_i_ver.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Kanaty_i_verevki = () => {
    const products = [
        {id: 1,href: "/Kapronovaya-verevka", name: "Фал капроновый", image: img_1},
        {id: 2, href: "/Kanat-stalnoy-GOST-2688-80", name: "Канат стальной ГОСТ 2688-80", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Канаты и веревки</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href}  className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Kanaty_i_verevki;
