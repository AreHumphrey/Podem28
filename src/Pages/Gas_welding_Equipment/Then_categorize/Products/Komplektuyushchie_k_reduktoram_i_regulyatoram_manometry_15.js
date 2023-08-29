import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15.jpeg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАНОМЕТР ПРОПАНОВЫЙ 0,6 МПА</h2>
                <p>Манометр пропановый 0,6 МПа предназначен для измерения давления в газообразных и жидких средах. Он
                    относится к общетехническому типу (тип ТМ). Стальной корпус типа ТМ очень удобен для установки в
                    системе газообеспечения, на регуляторах расхода газа или баллонных редукторах благодаря своим
                    техническим характеристикам. Используется для измерения давления в пределах 0-0.6 МПа в газообразных
                    неагрессивных средах.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Технические характеристики:</b><br/>
                        Рабочая температура: Окружающая среда - -60…+60 ОС<br/>
                        Измеряемая среда – до +80 ОС<br/>
                        Корпус выполнен из стали<br/>
                        Измерительный элемент, стрелочный механизм – медный сплав<br/>
                        Штуцер – латунь, резьба М12х1.5</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15;