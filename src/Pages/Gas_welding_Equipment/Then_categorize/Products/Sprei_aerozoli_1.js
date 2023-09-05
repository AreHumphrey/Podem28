import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sprei_aerozoli_1.jpg"

const Sprei_aerozoli_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СПРЕЙ ДЛЯ СВАРОЧНЫХ РАБОТ AKFIX E90</h2>
                <img src={img_3}></img>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sprei_aerozoli_1;