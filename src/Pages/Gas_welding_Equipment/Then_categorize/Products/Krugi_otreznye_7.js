import React from "react";
import "../../../Pages.css"
import img_1 from "../../../../Components/Img/img_krugi_otreznye_7.jpg"
import ButtonAppBar from "../../../../Components/Header/Header";
import Gap from "../../../../Components/Gap/Gap";
import Basement from "../../../../Components/Basement/Basement";
const Krugi_otreznye_7 = () => {


    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">КРУГ ОТРЕЗНОЙ 115 Х 2,0 Х 22 (TIGARBO)</h1>
            <div className="container_foto">
                <img src={img_1}></img>
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Krugi_otreznye_7;
