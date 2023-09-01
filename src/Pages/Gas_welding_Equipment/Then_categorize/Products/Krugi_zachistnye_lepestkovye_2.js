import React from "react";
import "../../../Pages.css"
import img_1 from "../../../../Components/Img/img_krugi_zachistnye_lepestkovye_2.jpg"
import ButtonAppBar from "../../../../Components/Header/Header";
import Gap from "../../../../Components/Gap/Gap";
import Basement from "../../../../Components/Basement/Basement";

const Krugi_zachistnye_lepestkovye_2 = () => {


    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h1 className="h1">КРУГ ЗАЧИСТНОЙ ЛЕПЕСТКОВЫЙ 125ММ № 80 БАЗ</h1>
                <div className="container_foto">
                    <img src={img_1}></img>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Krugi_zachistnye_lepestkovye_2;
