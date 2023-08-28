import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_aksessuary_1_1.jpg"

const Aksessuary_1_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МЕЛОК СТЕАТИТОВЫЙ FM.400</h2>
                <p><b>Мелок стеатитовый FM.400</b> используется для промышленной маркировки и разметки металлических
                    конструкций, а так же по текстилю.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>
                        <b>Особенности стеатитового мелка для сварщика:</b><br/>

                        Маркировка видна через экран сварочного аппарата, что облегчает идентификацию и работу<br/>
                        Высокая термостойкость, маркировка видна в процессе сварки<br/>
                        Плоская конструкция предотвращает скатывание на рабочие столы<br/>
                        Маркировка не будет загрязнять сварной шов или повреждать поверхность металла<br/>
                        Временные отметки можно легко удалить<br/>
                        <b>Рабочие типы поверхностей:</b><br/>
                        Сталь и металл<br/>
                        Алюминий<br/>
                        Текстиль<br/>
                    </p>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_1_1;