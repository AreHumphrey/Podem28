import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_1.jpg"

const Sredstva_zashchity_ruk_i_nog_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПЕРЧАТКИ СПИЛКОВЫЕ ЖЕЛТЫЕ"ДРАЙВЕР"</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Цельноспилковые перчатки предназначены для аргонодуговой (TIG), в определенной степени для ручной
                        дуговой (ММА), полуавтоматической сварки (MIG/MAG) и механосборочных работ. Изготовлены из
                        качественного коровьего спилка без подкладки, что делает работу в них легкой и удобной. Надежная
                        защита рук от открытого огня, искр, брызг расплавленного металла, механических повреждений.
                        Высокая устойчивость к истиранию, проколам и порезам.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_1;