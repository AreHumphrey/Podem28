import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_2.jpg"

const Sredstva_zashchity_ruk_i_nog_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПЕРЧАТКИ КОЖАНЫЕ ЖЕЛТЫЕ"ДРАЙВЕР"</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Полностью кожаные перчатки предназначены для аргонодуговой (TIG) сварки. Изготовлены из мягкой
                        зернистой овечьей кожи с дополнительным усилением большого пальца для лучшей защиты и
                        износостойкости. Исключительно мягкие, легкие и невероятно удобные в работе. Надежная защита рук
                        от открытого огня, искр, брызг расплавленного металла, механических повреждений.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_2;