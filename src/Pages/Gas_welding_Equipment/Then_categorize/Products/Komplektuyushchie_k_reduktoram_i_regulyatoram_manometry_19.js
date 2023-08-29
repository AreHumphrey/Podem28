import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАНОМЕТР АЦЕТИЛЕНОВЫЙ 0.4 МПА</h2>
                <p>Манометры ацетиленовые сварочные (общетехнические) тип ТМ предназначены для измерения давления в
                    пределах от 0 до 0,4 МПа в газообразных неагрессивных средах. Манометры ацетиленовые сварочные
                    применяются в баллонных редукторах и системах газообеспечения.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>
                        <b>ОСНОВНЫЕ ТЕХНИЧЕСКИЕ ДАННЫЕ И ХАРАКТЕРИСТИКИ</b><br/>

                        1. Диаметр корпуса – 50мм.<br/>

                        2. Класс точности – 2,5.<br/>

                        3. Рабочая температура:<br/>

                        Окружающая среда - -60…+60 ОС<br/>

                        Измеряемая среда – до +80 ОС.<br/>

                        4. Корпус - сталь.<br/>

                        5. Измерительный элемент, стрелочный механизм – медный сплав.<br/>

                        6. Штуцер – латунь, резьба М12х1,5.<br/>

                        7. Размер квадрата под ключ – 14х14мм.<br/>

                        8. Исполнение – радиальное.<br/>
                    </p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19;