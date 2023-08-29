import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_zhidkotoplivnoe_oborudovanie_2.jpg"

const Zhidkotoplivnoe_oborudovanie_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК "ВОГНИК" 182 БЕНЗИН</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>
                        Преимущества:<br/>

                        Быстрый выход на рабочий режим.<br/>
                        Повышенная скорость резки.<br/>
                        Полное испарение и сгорание топлива.<br/>
                        Доступен для резчика любой квалификации.<br/>
                        Безопасность: 100% стойкость обратному удару пламени.<br/>
                        Толщина реза до 300 мм<br/>
                        Горючее: бензин
                    </p>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Zhidkotoplivnoe_oborudovanie_2;