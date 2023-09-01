import React from "react";
import "../../../Pages.css"
import img_1 from "../../../../Components/Img/img_krugi_otreznye_1.jpg"
import ButtonAppBar from "../../../../Components/Header/Header";
import Gap from "../../../../Components/Gap/Gap";
import Basement from "../../../../Components/Basement/Basement";

const Krugi_otreznye_1 = () => {


    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h1 className="h1">КРУГ ОТРЕЗНОЙ 125Х2,5Х22,2 RUSSLAND</h1>
                <div className="container_foto">
                    <img src={img_1}></img>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Krugi_otreznye_1;
