import React from "react";
import "../Pages.css"
import img_1 from  "../../Components/Img/img_1_elektricheskie-tali.png"
import img_2 from  "../../Components/Img/img_2_elektricheskie-tali.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Elektricheskie_tali = () => {
    const products = [
        {id: 1, href: "/elektricheskie-tali_1", name: " Тельфер электрический с тележкой ТM-1S", image: img_1},
        {id: 2, href: "/elektricheskie-tali_2", name: "лектрический с тележкой CD (Китай)", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Электрические тали</h1>
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

export default Elektricheskie_tali;
