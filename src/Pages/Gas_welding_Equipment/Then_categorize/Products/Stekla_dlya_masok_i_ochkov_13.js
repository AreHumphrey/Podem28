import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_stekla_dlya_masok_i_ochkov_13.jpg"

const Stekla_dlya_masok_i_ochkov_13 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СВЕТОФИЛЬТР 121Х69 ТС-3 ПРОЗРАЧНЫЙ</h2>
                <img src={img_3}></img>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Stekla_dlya_masok_i_ochkov_13;