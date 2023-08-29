import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_reduktory_ballonnye_5.1.png"

const Reduktory_ballonnye_5_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕДУКТОР ГЕЛИЕВЫЙ БГО-50-4</h2>
                <p>Регулятор давления (редуктор) баллонный газовый одноступенчатый предназначен для понижения и
                    регулирования давления газа, поступающего из баллона, и автоматического поддержания заданного
                    рабочего давления газов постоянным.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Редукторы изготавливаются в соответствии с требованиями технических условий ТУ
                        3645-012-56164015-2013 и ГОСТ 13861-89, ИСО 2503-83 и ГОСТ 12.2.052-81.</b></p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Reduktory_ballonnye_5_1;