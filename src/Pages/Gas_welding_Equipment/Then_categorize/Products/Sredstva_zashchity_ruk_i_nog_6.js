import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_6.jpg"

const Sredstva_zashchity_ruk_i_nog_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <p>Краги спилковые пятипалые желто-черные с подкладкой изготовлены из специального огнеупорного спилка,
                    что обеспечивает высокую защиту от искр, брызг металла, высокой температуры, механических
                    повреждений.</p>
                <h2>КРАГИ СПИЛКОВЫЕ ЧЕРНО-ЖЕЛТЫЕ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Отличительные особенности:</b><br/>

                        Качественная подкладка из натурального х/б материала, приятная для рук<br/>

                        Кисти дополнительно утеплены флисом<br/>

                        Прошивка кевларовой нитью обеспечивает высокую прочность изделия<br/>

                        Оптимальная длина 14" (35 см) для дополнительной защиты рук<br/></p>
                </div>
                <p>Широкий раструб позволяет легко одевать краги поверх сварочной спецодежды</p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_6;