import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_lenta_tekstilnaya.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Lenta_tekstilnaya = () => {
    const products = [
        {id: 1,href: "/Lenta-tekstilnaya-item", name: "Лента текстильная", image: img_1},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Ленты текстильные</h1>
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

export default Lenta_tekstilnaya;
