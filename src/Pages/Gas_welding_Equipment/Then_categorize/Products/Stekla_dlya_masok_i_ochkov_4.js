import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_stekla_dlya_masok_i_ochkov_4.jpg"

const Stekla_dlya_masok_i_ochkov_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПЛАСТИНА ЗАЩИТНАЯ ПОЛИКАРБОНАТ 133Х114Х1</h2>
                <img src={img_3}></img>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Stekla_dlya_masok_i_ochkov_4;